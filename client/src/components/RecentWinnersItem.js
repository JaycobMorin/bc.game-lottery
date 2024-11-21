import React from 'react'

function RecentWinnersItem() {
    return (
        <>
            <li className='recent-table-item'>
                <span className='table-item-player'>
                    <img className='table-player-avatar' src="https://img2.bc.game/avatar/19760168/s" alt="" />
                    <label className=''>lauvlctunyb</label>
                </span>
                <span className='table-item-prize'>
                    <label className='prize-caption'>$500.00</label>
                    <img className='table-player-avatar' src="https://bc.game/coin/ZAR.black.png" alt="" />
                </span>
            </li>
        </>
    )
}

export default RecentWinnersItem