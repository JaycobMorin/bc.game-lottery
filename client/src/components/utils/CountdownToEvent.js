import { useState, useEffect } from "react";
import axios from "axios";

const calculateRemainingTime = (eventTime) => {
    const now = new Date();
    const timeRemaining = eventTime - now;

    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { hours, minutes, seconds, timeRemaining };
};

const CountdownToEvent = ({ eventTime, id }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime(eventTime));
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateRemainingTime(eventTime));
        }, 1000); // Update every second

        // Cleanup interval on component unmount
        
    }, [eventTime]);

    useEffect(() => {
        if (timeRemaining.timeRemaining < 1) {
            axios.get(`/api/lotteries/getNextEventTime?id=${id}`).then((res)=>{
                setTimeRemaining(calculateRemainingTime(res.data.eventTime))
            })
        }
    }, [timeRemaining.timeRemaining])
    // If the time has passed, display a message
    
    return (
        <div>
            <p style={{color: '#bbb', fontSize: '16px', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>{timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</p>
        </div>
    );
};

export default CountdownToEvent;