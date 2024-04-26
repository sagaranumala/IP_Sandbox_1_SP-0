import React, { useState } from 'react'
import Example from './GenericTable'
import Theader from './Theader'
import List from './List';


const Instructions = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div>
        Instructions  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
    </div>
  )
}
export default  Instructions