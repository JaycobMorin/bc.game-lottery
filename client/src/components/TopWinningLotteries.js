import React from 'react'
import TopWinningItem from './TopWinningItem'

function TopWinningLotteries() {
  return (
    <div className='top-winning-lotteries'>
        <div className='recent-title'>
            <img className='table-player-avatar' src="https://bc.game/modules/lottery2/assets/winner-icon-319ba3e1.png" alt="" />
            <h4>Top Winning Lotteries</h4>
        </div>
        <div className='top-winning-body'>
            <ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}>
            </ul>
        </div>
    </div>
  )
}

export default TopWinningLotteries