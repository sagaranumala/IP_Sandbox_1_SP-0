import React from 'react'

const Profile = () => {
  return (
    <div className='pt-[10px] '>
         <span className='mb-[20px] '>User Profile -&gt; Profile View</span>
         <div className='border-solid border-[2px] border-black p-[30px] rounded-[10px]'>
         <div className='flex justify-center gap-[100px] mt-[20px] '>
             <div className='border-solid border-C-Blue border-[2px] rounded-[10px] p-[30px] pt-[10px] '>
                 <h2 className='text-[20px] font-sans ml-[60px]'>Profile Details</h2>
                 <div className='flex flex-col justify-center items-center gap-[10px]'>
                 <div>
                    <label htmlFor="firstname">First Name: </label><br></br>
                    <input id="firstname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="lastname">Last Name: </label><br></br>
                    <input id="lastname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="Email">Email: </label><br></br>
                    <input id="Email" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="Phone">Phone: </label><br></br>
                    <input id="Phone" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 </div>
             </div>


             <div className='border-solid border-C-Blue border-[2px] rounded-[10px] p-[30px] pt-[10px] '>
                 <h2 className='text-[20px] font-sans ml-[60px]'>Role Details</h2>
                 <div className='flex flex-col justify-center items-center gap-[10px]'>
                 <div>
                    <label htmlFor="firstname">TimeZone: </label><br></br>
                    <input id="firstname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="lastname">User Name: </label><br></br>
                    <input id="lastname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="Email">Password: </label><br></br>
                    <input id="Email" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 <div>
                    <label htmlFor="Phone">Role: </label><br></br>
                    <input id="Phone" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                 </div>
                 </div>
             </div>
         </div>


         <div className='border-solid border-C-Blue border-[2px] rounded-[10px] p-[30px] pt-[10px] mt-[50px]'>
                 <h2 className='text-[20px] font-sans ml-[60px]'>Entitlement Details</h2>
                 <div className='flex justify-center items-center gap-[100px] mt-[20px]'>
                       <div>
                          <div>
                             <label htmlFor="operator">Operator: </label>
                             <input id="firstname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                          </div>
                          <div className='mt-[20px]'>
                              <label htmlFor="operator">Operator: </label>
                              <input id="lastname" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                       </div>
                       <div>
                          <div>
                             <label htmlFor="Email">Level-1 Approver: </label>
                             <input id="Email" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                         <div className='mt-[20px]'>
                             <label htmlFor="Phone">Level-2 Approver: </label>
                             <input id="Phone" type="text" className='border-[black] border-[2px] border-solid rounded-[5px] w-[280px] h-[30px]'/>
                         </div>
                       </div>
                 </div>
             </div>
             </div>
    </div>
  )
}

export default Profile
