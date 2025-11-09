import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    
    
  return (
    <div id="Right" className='h-full w-3/4 flex overflow-x-auto flex-nowrap gap-10'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
