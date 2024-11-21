import { useState, useEffect } from 'react';
import React from 'react'
import LotteryCard from './UpcomingLotteryCard'
import axios from 'axios';

function UpcomingDraw() {
    const [lotteries, setLotteries] = useState([])
    const fetchData = async () => {
        const response = await axios.get(`/api/lotteries`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        setLotteries(response.data);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='upcoming-draw'>
            {
                lotteries.map((lottery, index) => (
                    <LotteryCard
                        key={index}
                        id={lottery._id}
                        name={lottery.lottery}
                        country={lottery.country}
                        nextEvent={lottery.last_event_time}
                        prize={lottery.jackpot}
                        count_of_balls={lottery.count_of_balls}
                        selected_balls_count={lottery.selected_balls_count}
                        next_event_time={lottery.next_event_time}
                    />
                ))
            }
        </div>
    )
}

export default UpcomingDraw;