import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Header = () => {
  return (
    <div className='w-full z-[100] bg-[#D6BBFC] flex justify-between items-ceter h-[100px] pr-[30px] sticky top-[0px]'>
    <div className="w-32 rounded-lg w-[200px] h-[50px] md:w-[250px] md:h-[70px] ml-[10px] sm:ml-[20px]" data-aos="fade-left"> 
       <img src="/logo-instanpe-1.png" className='' alt="Italian Trulli"/>
    </div>
    <div className=''>
       <NotificationsPausedIcon className='h-[50px] w-[50px] text-[200]'/>
       <ChatBubbleIcon className='h-[30px] w-[30px] text-[200] text-[blue]'/>
        <PersonIcon className='h-[70px] w-[70px] text-[200]'/>
        <select name="role" id="role" className='h-[50px] rounded-[10px] bg-[#f8f8f8]'>
             <option value="Role" disabled selected>Role</option>
             <option value="volvo">Volvo</option>
             <option value="saab">Saab</option>
             <option value="mercedes">Mercedes</option>
             <option value="audi">Audi</option>
        </select>
    </div>
     
</div>
  )
}

export default Header
