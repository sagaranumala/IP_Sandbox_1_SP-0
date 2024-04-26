import React, { useState } from 'react'
import Example from '../../GenericTable'
import Theader from '../../Theader'
import List from '../../List';


const Region = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div>
        <span className='mb-[20px]'>ReferenceData -&gt; GenericData -&gt; Region</span>  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
    </div>
  )
}

export default Region