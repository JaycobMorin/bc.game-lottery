import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownToEvent from './utils/CountdownToEvent';

function LotteryCard({ id, name, country = "fr", prize, count_of_balls, selected_balls_count, next_event_time }) {
  const navigate = useNavigate();  // Get the navigate function

  const handleNavigation = () => {
    // Perform any necessary logic before navigation here
    console.log(selected_balls_count);
    navigate(`/detail/${id}?balls=${count_of_balls}&select=${selected_balls_count}`);  // Change route to About page
  };
  const eventTime = new Date(next_event_time);    

  return (
    <div className='size-full' onClick={handleNavigation} id={id}>
      <div className='size-full'>
        <section className='lottery-card'>
          <div className='flag-container'>
            <section className='card-flag'>
              <img className='flag-img' src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`} alt="" />
            </section>
          </div>
          <div className='lottery-address'>{name} {selected_balls_count}/{count_of_balls}</div>
          <div className='lottery-price'>${prize}</div>
          <div className='card-divider' />
          <div className='timer-title'>Next Draw Starts in</div>
          <div className='align-center full-width'>
            <div className='lottery-timer'>
              <CountdownToEvent eventTime={eventTime} id={id}/>
            </div>
            <div className='btn-bet' onClick={handleNavigation}>Bet Now</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LotteryCard;