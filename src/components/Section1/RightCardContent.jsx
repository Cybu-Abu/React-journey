

const RightCardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full w-10 h-10 flex items-center justify-center'>{props.id+1}</h2>
            <div>
            <p className='text-lg font-medium text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla obcaecati ad vero vel. Veniam.
            </p>
            
            <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' px-6 py-2 rounded-full text-white text-lg'>{props.tag}</button>
            <button className=' px-3 py-2 rounded-full text-white text-lg'><i className="ri-arrow-right-line"></i></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
