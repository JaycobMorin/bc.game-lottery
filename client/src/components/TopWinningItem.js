import React from 'react'

function TopWinningItem({ country = 'fr' }) {
    return (
        <>
            <li className='top-winning-item'>
                <div className='top-winning-number'>1</div>
                <div className='top-winning-info'>
                    <div className='top-winning-content'>
                        <img className='top-winning-flag' src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`} alt="" />
                        <label className='top-winning-address'>Slovakia EKlub Keno 20/80</label>
                    </div>
                    <div className='top-winning-timer'>
                        Next draw:<span>00</span>h<span>00</span>m<span>00</span>s
                    </div>
                    <div className='top-winning-price'>$24,758.90</div>
                </div>
                <div style={{ width: '6rem' }}>
                    <button className='top-winning-bet'>Bet Now</button>
                </div>
            </li>
        </>
    )
}

export default TopWinningItem;