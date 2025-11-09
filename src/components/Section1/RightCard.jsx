import React from 'react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
    
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 overflow-hidden relative'>
        <img className="h-full object-cover w-screen" src={props.img} alt="" />
        <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
      
    </div>
  )
}

export default RightCard
