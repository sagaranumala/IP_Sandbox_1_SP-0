import React from 'react'
import Chart1 from './Chart1'
import Example from './GenericTable'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-50px '>
             <h1 className='text-[20px] font-bold '>Dashboard</h1>
            <div className=' mt-[20px] flex flex-wrap  justify-between  gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                <div className='w-[210px] h-[120px] border-solid border-[2px] border-[blue] flex justify-center items-center rounded-[10px] flex flex-col item-center   hover:bg-C-Blue hover:text-[white] bg-C-Yellow'><div>Completed</div></div>
                <div className='w-[210px] h-[120px] border-solid border-[2px] border-[blue] flex justify-center items-center rounded-[10px] flex flex-col item-center  hover:bg-C-Blue hover:text-[white] bg-[#f59e0b]'><div>Rejected</div></div>
                <div className='w-[210px] h-[120px] border-solid border-[2px] border-[blue] flex justify-center items-center rounded-[10px] flex flex-col item-center  hover:bg-C-Blue hover:text-[white] bg-[#bef264]'><div>Duplicated</div></div>
                <div className='w-[210px] h-[120px] border-solid border-[2px] border-[blue] flex justify-center items-center rounded-[10px] flex flex-col item-center   hover:bg-C-Blue hover:text-[white] bg-[#86efac]'><div>In Progress</div></div>
                <div className='w-[210px] h-[120px] border-solid border-[2px] border-[blue] flex justify-center items-center rounded-[10px] hover:bg-C-Blue hover:text-[white] bg-[#67e8f9]'>Acquired</div>
            </div>
            <div className=' mt-[20px] flex flex-wrap  justify-between gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                <div className='w-[210px] h-[120px]  rounded-[10px] border-solid border-[2px] border-[blue] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-C-Yellow'><div>Completed</div></div>
                <div className='w-[210px] h-[120px]  rounded-[10px] border-solid border-[2px] border-[blue] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-[#f59e0b]'><div>Rejected</div></div>
                <div className='w-[210px] h-[120px]  rounded-[10px] border-solid border-[2px] border-[blue] flex justify-center items-center  hover:bg-C-Blue hover:text-[white] bg-[#bef264]'><div>Duplicated</div></div>
                <div className='w-[210px] h-[120px]  rounded-[10px] border-solid border-[2px] border-[blue] flex justify-center items-center   hover:bg-C-Blue hover:text-[white] bg-[#86efac]'><div>Warehoused</div></div>
                <div className='w-[210px] h-[120px]  rounded-[10px]  border-solid border-[2px] border-[blue] flex justify-center items-center hover:bg-C-Blue hover:text-[white] bg-[#67e8f9]'>Pending Resp</div>
            </div>
               <div className='mt-[50px] flex gap-[10px]'>
                  <Chart1/>
                  <Chart1/>
                  <Chart1/>
              </div>
              <div>
                  <Example/>

              </div>
        </div>
  )
}

export default Dashboard
