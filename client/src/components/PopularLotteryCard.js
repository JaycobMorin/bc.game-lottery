import React from 'react'
import { useNavigate } from 'react-router-dom'
import CountdownToEvent from './utils/CountdownToEvent';

function PopularLotteryCard({ id, name, country = "fr", prize, count_of_balls, selected_balls_count, next_event_time }) {
    const navigate = useNavigate();  // Get the navigate function

    const handleNavigation = () => {
        // Perform any necessary logic before navigation here
        console.log(selected_balls_count);
        navigate(`/detail/${id}?balls=${count_of_balls}&select=${selected_balls_count}`);  // Change route to About page

    };
    const eventTime = new Date(next_event_time);
    return (
        <div className='size-full' onClick={handleNavigation}>
            <div className='size-full'>
                <section className='popular-card-section'>
                    <div className='flex justify-between'>
                        <span className='like-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="fill-tertiary"><path d="M7.59192 13.0004L4.86962 14.4953C4.44121 14.7301 3.91174 14.5587 3.68686 14.1113C3.59719 13.9334 3.56635 13.7292 3.59861 13.531L4.11859 10.3648C4.16746 10.068 4.07305 9.76527 3.86667 9.55518L1.66435 7.31305C1.31802 6.96026 1.3109 6.38102 1.64869 6.01931C1.78343 5.87512 1.95945 5.78147 2.15017 5.75273L5.19366 5.29093C5.47879 5.24782 5.7255 5.06053 5.85312 4.79048L7.21427 1.91016C7.42824 1.45727 7.95344 1.27097 8.38754 1.49444C8.56024 1.58363 8.70019 1.7293 8.78559 1.91016L10.1467 4.79048C10.2744 5.06053 10.5211 5.24782 10.8062 5.29093L13.8497 5.75273C14.3284 5.82557 14.66 6.28985 14.5908 6.78981C14.5632 6.989 14.4731 7.17283 14.3355 7.31355L12.1332 9.55567C11.9268 9.76576 11.8324 10.0685 11.8813 10.3653L12.4012 13.5315C12.4828 14.0295 12.1626 14.5022 11.6858 14.5879C11.496 14.6221 11.3006 14.5894 11.1302 14.4958L8.40794 13.0009C8.1527 12.8606 7.84811 12.8606 7.59287 13.0009L7.59192 13.0004Z"></path></svg>
                        </span>
                        <div className='flex items-center'>
                            <section className='flag-section'>
                                <img className='popular-flag-img' src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`} alt="" />
                            </section>
                        </div>
                    </div>
                    <div className='timer-title'>Next Draw in <CountdownToEvent eventTime={eventTime} id={id}/></div>
                    <div className='lottery-address' style={{ display: 'flex', alignItems: 'center' }}>{name} {selected_balls_count}/{count_of_balls}</div>
                    <div className='flex justify-between'>
                        <label className='timer-title' style={{ marginTop: '' }}>Top prize</label>
                        <label className='lottery-price'>${prize}</label>
                    </div>
                    <div className='lottery-btn-container'>
                        <button className='lottery-btn' onClick={handleNavigation}>Bet 2 balls</button>
                        <button className='lottery-btn' onClick={handleNavigation}>Bet 3 balls</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PopularLotteryCard;