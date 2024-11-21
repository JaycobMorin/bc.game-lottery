import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function LotteryDetail() {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ballCount = Number(queryParams.get('balls')); // Ensure this is a number
    const selectedBallCount = Number(queryParams.get('select')); // Ensure this is a number

    const [selectedBalls, setSelectedBalls] = useState(Array(ballCount).fill(false));
    const selected = selectedBalls
        .map((selected, index) => (selected ? index + 1 : null))
        .filter(Boolean);

    const [tickets, setTickets] = useState([]);

    const addBet = () => {
        if (selected.length !== selectedBallCount) {
            return alert(`Must select exactly ${selectedBallCount} balls.`);
        }

        // Sort the selected balls to ensure order doesn't matter
        const sortedSelection = [...selected].sort((a, b) => a - b);

        const isDuplicate = tickets.some(ticket =>
            ticket.length === sortedSelection.length &&
            ticket.every((ball, index) => ball === sortedSelection[index])
        );

        if (isDuplicate) {
            toast.error("This ticket has already been added.");
            return;
        }

        setTickets(prevTickets => [...prevTickets, sortedSelection]);
    };

    const toggleBallSelection = (index) => {
        const updatedSelection = [...selectedBalls];
        updatedSelection[index] = !updatedSelection[index];

        // Count currently selected balls
        const currentCount = updatedSelection.filter(Boolean).length;

        if (currentCount > selectedBallCount) {
            alert(`You can only select ${selectedBallCount} balls.`);
            return; // Prevent further processing
        }

        setSelectedBalls(updatedSelection);
    };

    const handleBuyClick = () => {
        if (tickets.length == 0) return alert(`Must add at least 1 ticket.`);

        axios
            .post('/api/tickets/buyTicket', {
                lotteryId: id,
                token: localStorage.getItem('token'),
                tickets: tickets
            })
            .then((res) => {
                if (res.data.msg === "already finished") {
                    alert("Already Finished!");
                } else if (res.data.msg === "buy success") {
                    localStorage.setItem('balance', res.data.balance);
                    alert("Buy Success");
                    window.location.reload();
                } else {
                    alert("FAILED!");
                }
            })
            .catch((error) => {
                console.error("There was an error buying the ticket:", error);
                alert("An error occurred while trying to buy the ticket."); // User-friendly message
            });

        console.log('Selected Balls:', selected);
    };

    return (
        <div className="overflow-hidden w-full bg-black h-full">
            <div className="_content">
                <div className="in-title">
                    <div className="flex items-center gap-2">
                        <img
                            src="" // Image source should be set here
                            alt="Lottery Logo" // Accessibility enhancement
                            style={{ borderRadius: '50%', background: 'white', width: 50, height: 50 }}
                        />
                        <h1>Greece KENO 20/80</h1>
                        <button className='button button-second button-m w-8 h-8 center rounded-md cursor-pointer' style={{ backgroundColor: 'lch(26 3.29 210.45)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="fill-secondary">
                                <path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <div className="bg-neutral-900 rounded-lg shadow-lg p-6 w-full max-w-md" style={{ marginTop: '1em' }}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Buy Ticket</h2>
                        </div>
                        <div className="grid gap-x-1.5 gap-y-3 grid-cols-[repeat(auto-fill,40px)] bg-zinc-800" style={{ justifyContent: 'center', padding: '15px 0' }}>
                            {Array.from({ length: ballCount }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleBallSelection(index)}
                                    className={`w-10 h-10 justify-center center flex rounded-full transition-all duration-500 ease-out cursor-pointer bg-layer3 bg-contain hover:scale-125 ${selectedBalls[index] ? "bg-slate-300 text-primary_brandbg-black" : "bg-zinc-950"}`}
                                >
                                    <span className='center rounded-full font-extrabold text-sm'>{index + 1}</span>
                                </button>
                            ))}
                        </div>
                        <div style={{ justifyContent: 'center', display: 'flex', padding: '10px 0' }}>
                            <button
                                onClick={addBet}
                                className="w-full py-2 text-white font-semibold rounded btn-bet"
                            >
                                Add Bet
                            </button>
                        </div>
                    </div>
                    <div className='w-96 bg-layer4 rounded-xl h-fit mt-4' style={{ background: '#323738' }}>
                        <div className='px-4 pt-4'>
                            <h2 className="pb-3 text-primary text-lg font-extrabold">Choose your lucky numbers</h2>
                            <section className="flex gap-1.5 justify-center flex-wrap">
                                {tickets.map((ticket, index) => (
                                    <div key={index} className="text-white" style={{ width: '100%', display: 'flex' }}>{`Ticket ${index + 1}: `}{ticket.map((ball, id) => (
                                        <span key={id} className="latest-results-ball">{ball}</span> // Each ball in a span
                                    ))}</div>
                                ))}
                            </section>
                        </div>
                        <section className='p-4 relative left-0 bg-layer4 border-t border-solid border-input w-full bottom-0 rounded-b-xl'>
                            <div className='flex justify-between'>
                                <span className="text-secondary text-sm font-semibold">Potential Return</span>
                                <span className="text-primary text-sm font-semibold">0 USD</span>
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <span className="text-secondary text-sm font-semibold">Total Bet Amount</span>
                                <div className="text-primary text-sm font-semibold">
                                    <div className="flex justify-end">0 <img className="w-4 h-4 ml-2" loading="lazy" src="/coin/USD.rect.png" alt="Currency" /></div>
                                    <span className="text-secondary">≈ $0.00</span>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className="button button-brand button-m w-full mt-4 text-primary_brand font-extrabold text-lg py-2 text-white font-semibold rounded btn-bet"
                                    type="button"
                                    onClick={handleBuyClick}
                                >
                                    Bet
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LotteryDetail;