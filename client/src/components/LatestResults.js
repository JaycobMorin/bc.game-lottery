import React, { useState, useEffect } from 'react'
import LatestResultsItem from './LatestResultsItem';
import axios from 'axios';

function LatestResults() {
    const [page, setPage] = useState(0)
    const [draws, setDraws] = useState([])
    const fetchData = async () => {
                const response = await axios.get(`/api/draws/getDraws?page=${page}`, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setDraws(response.data);
    };
    useEffect(() => {
        fetchData();
    }, [page]);

    const prevPage = () => {
        if(page <= 0) return;
        console.log(page);
        setPage(page - 1);
    }

    const nextPage = () => {
        if(draws.length < 10) return;
        console.log(page);  
        setPage(page + 1);
    }

    return (
        <div className='latest-results-box'>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr className='latest-results-head'>
                        <th className='latest-results-caption-1'>Lottery Name</th>
                        <th className='latest-results-caption-2'>
                            <div style={{ width: '100%' }}>Jackpot Number</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        draws.map((draw, index) => (
                            <LatestResultsItem key={index} id={draw._id} result={draw.result} name={draw.lottery} endDate={draw.eventTime} country={draw.country} count_of_balls={draw.count_of_balls} selected_balls_count={draw.selected_balls_count}  />
                        ))
                    }
                </tbody>
            </table>
            <div className='pagination'>
                <button className='btn-prev-page' onClick={prevPage}>{'<'}</button>
                <div>
                    <input type="text" name="" id="" />
                    <span>of</span>
                    <div><span></span></div>
                </div>
                <button className='btn-next-page' onClick={nextPage}>{'>'}</button>
            </div>
        </div>
    )
}

export default LatestResults;