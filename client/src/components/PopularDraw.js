import React, { useState, useEffect } from 'react'
import PopularLotteryCard from './PopularLotteryCard';
import axios from 'axios';

function PopularDraw() {
  const [lotteries, setLotteries] = useState([]);
  const fetchData = async () => {
      const response = await axios.get('/api/lotteries', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0',
        }
      });
      setLotteries(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='popular-draw'>
      {lotteries.map((lottery) => (
        <PopularLotteryCard key={lottery.id} id={lottery._id} name={lottery.lottery} country={lottery.country} endDate={lottery.endDate} prize={lottery.jackpot} count_of_balls={lottery.count_of_balls} selected_balls_count={lottery.selected_balls_count} next_event_time={lottery.next_event_time} />
      ))}
    </div>
  )
}

export default PopularDraw;