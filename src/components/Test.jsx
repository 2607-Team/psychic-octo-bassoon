import {useState} from 'react'

import React from 'react'

const Test = () => {
    const[no, setNo]= useState(0)
  return (
    <div>
      <h1>First Push request</h1>
      <button onClick={()=>setNo(no + 1)}>1</button>
    </div>
  )
}

export default Test
