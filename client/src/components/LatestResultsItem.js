import React from 'react'

function LatestResultsItem({ country = 'fr', result, id, name, endDate, count_of_balls, selected_balls_count }) {
    return (
        <>
            <tr className='latest-results-item'>
                <td style={{paddingLeft: '1rem'}}>
                    <div className='latest-results-name'>
                        <img className='top-winning-flag' src={`https://hatscripts.github.io/circle-flags/flags/${country}.svg`} alt="" />
                        <section className='latest-results-info'>
                            <h5 className='latest-results-address'>{name} {selected_balls_count}/{count_of_balls}</h5>
                            <p className='latest-results-time'>{endDate}</p>
                        </section>
                    </div>
                </td>
                <td style={{textAlign:'left', display:'flex', alignItems:'center'}}>
                    <section className='latest-results-jackpot'>
                        {
                            result.map((number) => (
                                <span className='latest-results-ball'>{number}</span>
                            ))
                        }
                    </section>
                </td>
                <td className='latest-results-bet'>
                    <section className='latest-results-bet-caption'>
                        <label>BET NOW</label>
                    </section>
                </td>
            </tr>
        </>
    )
}

export default LatestResultsItem