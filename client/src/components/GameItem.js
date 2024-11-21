// import React, { useState } from 'react';
// import { ReactSVG } from 'react-svg';

// function GameItem({ title, icon }) {

//     const [isItemOpen, setIsItemOpen] = useState(false);

//     return (
//         <div className='game-item'>
//             <ReactSVG src={icon} className='game-icon' onClick={()=>setIsItemOpen(true)} />
            
//                 <div style={{display: 'flex', width: '100%'}}>
//                     <span className='text-light-bold game-title' onClick={()=>setIsItemOpen(true)}>{title}</span>
//                     <button className='btn-arrow' onClick={()=>setIsItemOpen(!isItemOpen)}>
//                         <svg class={`icon transition ease-out size-4.5 fill-secondary ${isItemOpen ? '' : '-'}rotate-90`} onClick={()=>setIsItemOpen(!isItemOpen)} viewBox="0 0 32 32"><path d="M20.1912 6.1001L9.79119 16.5001L20.1912 26.9001L23.2088 23.8825L15.8264 16.5001L23.2088 9.1177L20.1912 6.1001Z"></path></svg>
//                     </button>
//                 </div>
//         </div>
//     )
// }

// export default GameItem;