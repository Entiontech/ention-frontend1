import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
       <div className='flex gap-4 text-md md:text-lg pt-0'><h4 onClick={() => setExpanded(!expanded)} >
          {title}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        </div> 
      </header>
      <p className='py-4'>{expanded && <p>{info}</p>}</p>
    </article>
  )
}

export default Question