import React from 'react'

export default function Card(props) {
  let badgeText;
  if(props.openSpots === 0){
    badgeText = 'SOLD OUT';
  }else if(props.location === 'online'){
    badgeText = 'ONLINE';
  }
    // console.log(props);
    // props.stats.rating = 15; // is this posible pleas check
  return (
    <div className='card'>
      {badgeText && <div className='card_badge'>{badgeText}</div>}
        <img id="card_img" src={props.coverImg} alt="kd"/>
        <div id='card_stats'>
            <span>{props.stats.rating}</span>
            <span className='gray'>(6) • </span>
            <span className='gray'>{props.location}</span>
        </div>
        <p className='card_title'>{props.title}</p>
        <p className='card_price'><b>From ${props.price}</b> / person</p>
    </div>
  )
}
