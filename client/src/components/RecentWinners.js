import React from 'react'
import RecentWinnersItem from './RecentWinnersItem'

function RecentWinners() {
    return (
        <div className='recent-winners'>
            <div className='recent-title'>
                <img className='img-dot' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAMFBMVEUj8IcAAAAi74gl8Icj74cj7okj74kj7ogn64kk7okk7okj7ogl8Ikj8Ikk7ogk7okFjRj2AAAAD3RSTlMzACoUH+Vzpg3Mv5lmZqYg4eflAAAA5ElEQVQoz3WSvQ3CMBCFH38RBUgkoaAkgoKSMAFhAjYgG1BDhbIEJSUlI8AIbMAIVID4kUJ8L8KJbF7jp0++853v4Ir8GTAM6YkmEA00SgSQEXXxU5SjvkZVogQFBYJ4SV8DM2lFGRqXUdMF44qR8Ola621MF8IjWaTpjSxAR85jmukttgLJ7qSik/I1TNXRIJorX4c8uCT6yJMQXYke0NoRvaB1IHqCMgKZ/kJ0Z3qzCJbaJopZqqUhtu2ots952z7IVnsShLYvdDdlVLOMwz401zNH2zMXwFwTrhc1+rdy5mJ+AYt6bxsiBf7PAAAAAElFTkSuQmCC" alt="" />
                <h4>Recent Winners</h4>
            </div>
            <div className='prizes-paid-out'>
                <label className='paid-out-title'>Prizes Paid Out</label>
                <label className='paid-out-money'>$16,608,645.22</label>
            </div>
            <div className='recent-table-box'>
                <div className='recent-table-caption'>
                    <label className=''>Player</label>
                    <label className='' style={{textAlign: 'right'}}>Prize</label>
                </div>
                <div className='recent-table-body'>
                    <ul className='recent-table-list'>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecentWinners