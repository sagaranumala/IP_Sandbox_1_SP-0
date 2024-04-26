import React, { useState } from 'react'
import Example from '../../GenericTable'
import Theader from '../../Theader'
import List from '../../List';


const ClearingPersona = () => {

  const [showlist,setshowList] =useState(false);
  return (
    <div>
       <span className='mb-[20px]'>ReferenceData -&gt; DistributionData -&gt; ClearingPersona </span>  
        <Theader showlist={showlist} setshowList={setshowList}/>
        {showlist?
        <List/>:   
       <Example/>
        }
    </div>
  )
}

export default ClearingPersona
