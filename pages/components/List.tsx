import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';


const List = () => {

    const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const[data,setData]=useState([]);
   const[data2,setData2]=useState([]);

  const getData=()=>{
    axios.get('https://user-api89.onrender.com')
          .then(res =>{
            setData(res.data)
          }).catch(err => console.log(err));
  }
  useEffect(()=>{
       getData();
   },[])

   useEffect(()=>{
    if(data2.length===0){
    for(let key in data[0]){
      if(key==='_id'){
       continue
      }
      if(key==='__v'){
        continue;
      }
      let obj={
        accessorKey: `${key}`,
        header: `${key}`,
      };
      data2.push(obj);
   }
  }
  
   },[data]);

   console.log(data)
   console.log(data2[0])
  return (
    <div className='flex flex-col'>
        {
            data.map((user,i)=>{
                return <div className="dropdown bg-[aqua] w-[300px]">
                            <div className="dropbtn" id='1' >
                                <ChevronRightSharpIcon className='drop-icon' id='1'/>
                                <button className='ml-[70px] text-[20px] font-midium' id='1'>User{i+1}</button>
                            </div>
                            <div className='dropdown-content3'>
                                <span>Name:{user.Name}</span><br /><hr />
                                <span>Email:{user.Email}</span><br /><hr />
                                <span>Age:{user.Age}</span><br /><hr />
                                <span>AccountNum:{user.AccountNum}</span>
                            </div>
                            <hr className='w-[300px]'/>
                        </div>
            })
        }
        {/* <div className="dropdown">
                 <div className="dropbtn" id='1' >
                     <ChevronRightSharpIcon className='drop-icon' id='1'/>
                     <button className='ml-[70px] text-[20px] font-midium' id='1'>User Profile</button>
                 </div>
                 
                 <div className="dropdown-content"> 
                    <span>Name:{user.Name}</span><br />
                       <span>Email:{user.Email}</span><br />
                       <span>Age:{user.Age}</span><br />
                       <span>AccountNum:{user.AccountNum}</span><div id='1' >Profile View</div>
                 </div>
             </div><br></br> */}
    </div>
  )
}

export default List

