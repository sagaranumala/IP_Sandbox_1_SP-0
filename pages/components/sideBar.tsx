import React from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import { MAX_VALUE_REG } from 'recharts/types/util/ChartUtils';

const SideBar = ({page,setPage}) => {
    
    console.log(page)
   const handleChange=(e: any)=>{
        let x=e.target.id
    
        setPage(x);
      console.log(e.target.id)
   }

  return (
    <div className='w-[300px] sticky top-[100px] text-[20px]'>
         <div className='h-full bg-C-Gray'>
              <div className="dropdown">
                 <div className="dropbtn" id='1' onClick={handleChange}>
                     <ChevronRightSharpIcon className='drop-icon' id='1'/>
                     <button className='ml-[70px] text-[20px] font-midium' id='1'>User Profile</button>
                 </div>
                 
                 <div className="dropdown-content">
                      <div id='1' onClick={handleChange}>Profile View</div>
                 </div>
             </div><br></br>
             <hr className='line1'/>
             <div className="dropdown">
                 <div className="dropbtn" id='0' onClick={handleChange}>
                     <ChevronRightSharpIcon className='drop-icon' id='0'/>
                     <button className='ml-[70px] text-[20px] font-midium' id='0'>Dashboard</button>
                 </div>
                
                 <div className="dropdown-content">
                      <div id='0' onClick={handleChange}>View Dashboard</div>
                 </div>
             </div><br></br>
              <hr className='line1'/>
             <div className="dropdown2">
                <div className="dropbtn" id='2' onClick={handleChange}>
                     <ChevronRightSharpIcon className='drop-icon' id='2' onClick={handleChange}/>
                     <button className='ml-[70px] text-[20px] font-midium' id='2' onClick={handleChange}>Reference Data</button>
                 </div>
                
                 <div className="dropdown-content2">
                      <div className="dropdown1">
                           <div className="dropbtn1" id='2' onClick={handleChange}>
                                 <ChevronRightSharpIcon className='drop-icon' id='2' onClick={handleChange}/>
                                 <button className='ml-[70px] text-[17px] font-midium' id='2' onClick={handleChange}>Generic Data</button>
                           </div>
                            {/* <button className="dropbtn1">Generic Data</button> */}
                          
                          <div className="dropdown-content1">
                              <div className='h-[40px] text-center text-[20px] font-midium' id='2' onClick={handleChange}>Calender</div><hr className='w-[100%]'/>
                              <div className='h-[40px] text-center text-[20px] font-midium' id='3' onClick={handleChange}>Region</div><hr />
                              <div className='h-[40px] text-center text-[20px] font-midium' id='4' onClick={handleChange}>Country</div><hr />
                              <div className='h-[40px] text-center text-[20px] font-midium' id='5' onClick={handleChange}>Currency</div>
                          </div>
                      </div><br></br>
                       
                       <hr className=''/>
                      <div className="dropdown1"> 
                           <div className="dropbtn1 bg-C-Blue" id='6' onClick={handleChange}>
                                 <ChevronRightSharpIcon className='drop-icon' id='6' onClick={handleChange}/>
                                 <button className='ml-[70px] text-[16px] font-midium' id='6' onClick={handleChange}>Distribution Data</button>
                           </div>
                          {/* <button className="dropbtn1">Distribution Data</button> */}
                          <div className="dropdown-content1">
                              <div className='h-[40px] text-center text-[20px] font-midium' id='6' onClick={handleChange}>MOP</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='7' onClick={handleChange}>MOPCluster</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='8' onClick={handleChange}>MOPPreference</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='9' onClick={handleChange}>Membership Directory</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='10' onClick={handleChange}>Clearing Persona</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='11' onClick={handleChange}>MembershipProperty</div><hr />
                              <div className=' h-[40px] text-center text-[20px] font-midium' id='12' onClick={handleChange}>ClearingProperty</div>
                          </div>
                      </div><br></br>
                      <hr className=''/>
                      <div className="dropdown1">
                           <div className="dropbtn1" id='14' onClick={handleChange}>
                                 <ChevronRightSharpIcon className='drop-icon' id='14' onClick={handleChange}/>
                                 <button className='ml-[70px] text-[17px] font-midium' id='14' onClick={handleChange}>Customer Data</button>
                           </div>
                          {/* <button className="dropbtn1">Customer Data</button> */}
                          
                          <div className="dropdown-content1">
                              <div className='h-[40px] text-center text-[20px] font-midium' id='14' onClick={handleChange}>Party</div><hr className='w-[100%]'/>
                              <div className='h-[40px] text-center text-[20px] font-midium' id='13' onClick={handleChange}>Account</div>
                             
                          </div>
                      </div><br></br>
                     
                 </div>
             </div><br></br>
              <hr className='line1'/>
             <div className="dropdown">
                 <div className="dropbtn" id='15' onClick={handleChange}>
                     <ChevronRightSharpIcon className='drop-icon' id='15' onClick={handleChange}/>
                     <button className='ml-[70px] text-[20px] font-midium' id='15' onClick={handleChange}>Instructions</button>
                 </div>
                 
                 <div className="dropdown-content">
                      <div id='15' onClick={handleChange} >Instructions View</div>
                 </div>
             </div><br></br>
              <hr className='line1'/>
             <div className="dropdown">
             <div className="dropbtn" id='16' onClick={handleChange}>
                     <ChevronRightSharpIcon className='drop-icon' id='16' onClick={handleChange}/>
                     <button className='ml-[70px] text-[20px] font-midium'id='16' onClick={handleChange}>Transactions</button>
                 </div>
                 <div className="dropdown-content">
                      <div id='16' onClick={handleChange}>Transactions View</div>
                     
                 </div>
             </div><br></br>
              <hr className='line1'/>
             <div className="dropdown">
             <div className="dropbtn">
                     <ChevronRightSharpIcon className='drop-icon'/>
                     <button className='ml-[70px] text-[18px] font-midium'>Related Transactions</button>
                 </div>
                 
                 <div className="dropdown-content">
                      <div>Link 1</div>
                      <div>Link 2</div>
                      <div>Link 3</div>
                 </div>
             </div><br></br>
              <hr className='line1'/>
             <div className="dropdown">
                 <div className="dropbtn">
                     <ChevronRightSharpIcon className='drop-icon'/>
                     <button className='ml-[70px] text-[20px] font-midium'>Approvals</button>
                 </div>
                 <div className="dropdown-content">
                      <div>Link 1</div>
                      <div>Link 2</div>
                      <div>Link 3</div>
                 </div>
             </div><br></br>
              <hr className='line1'/>
             </div>
    </div>
  )
}

export default SideBar
