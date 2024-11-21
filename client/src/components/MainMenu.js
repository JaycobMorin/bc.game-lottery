import React from 'react'
import UpcomingDraw from './UpcomingDraw';
import PopularDraw from './PopularDraw';
import RecentWinners from './RecentWinners';
import TopWinningLotteries from './TopWinningLotteries';
import LatestResults from './LatestResults';

function MainMenu() {
    return (
        <div className='mainmenu'>
            <div className='main-panel'>
                <section className='banner'>
                    <img className='banner-img' src="http://bc.game/modules/lottery2/assets/banner-pc-244408e8.png" alt="" />
                    <div className='absolute-center text-left banner-text'>
                        <h1 className='text-size-3 text-bold'>LOTTERY</h1>
                        <p className='text-size-2'>Play lotteries online with Lotto and hit the jackpot!</p>
                        <a className='text-size-1 text-link' href="">How to play?</a>
                    </div>
                </section>
                <section className='search'>
                    <svg className='svg absolute' viewBox="0 0 32 32"><path d="M20.6097 21.616L19.2692 20.2755C17.6782 21.5776 15.6458 22.3597 13.4305 22.3624C8.33103 22.3624 4.19653 18.2279 4.19653 13.1285C4.19653 8.02903 8.33103 3.89453 13.4305 3.89453C18.5299 3.89453 22.6644 8.02903 22.6644 13.1285C22.6617 15.3277 21.8903 17.3468 20.6061 18.9325L21.9492 20.2755L21.9189 20.305L21.9304 20.2952C22.2203 20.0651 22.643 20.0847 22.9115 20.3522L27.5873 25.0281C27.8753 25.3161 27.8753 25.7843 27.5873 26.0733L26.3994 27.2612C26.1113 27.5493 25.6431 27.5493 25.3542 27.2612L20.6783 22.5854C20.4108 22.3178 20.3912 21.8951 20.6212 21.6044L20.6105 21.6151L20.6097 21.616ZM13.4305 6.10536C9.55193 6.10536 6.40736 9.24993 6.40736 13.1285C6.40736 17.007 9.55193 20.1516 13.4305 20.1516C17.309 20.1516 20.4536 17.007 20.4536 13.1285C20.45 9.25082 17.3081 6.10893 13.4305 6.10536Z"></path></svg>
                    <div className='search-input'>
                        <input className='search-input' placeholder='Lottery Name' type="text" name="" id="" />
                    </div>
                </section>
                <span style={{ fontWeight: '800', fontSize: '1rem', lineHeight: '1.5rem', alignItems: 'center', display: 'flex', marginBottom: '0.75rem' }}>Upcoming Draw</span>
                <UpcomingDraw />
                <span style={{ fontWeight: '800', fontSize: '1rem', lineHeight: '1.5rem', alignItems: 'center', display: 'flex', marginBottom: '0.75rem' }}>Popular</span>
                <PopularDraw />
                <section className='winners-section'>
                    <RecentWinners />
                    <TopWinningLotteries />
                </section>
                <section className='latest-results-wrap'>
                    <h4>Latest Results</h4>
                    <LatestResults />
                </section>
            </div>
        </div>
    )
}

export default MainMenu