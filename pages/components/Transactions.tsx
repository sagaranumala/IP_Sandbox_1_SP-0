import React from 'react'

const Transactions = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
        <span className=''>Transactions -&gt; Customer Credit Transfer -&gt; IPTXN20240812000001</span>
        <div className='flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Txn ID: IPTXN20240812000001</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Txn Type: CCT</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Party :<a>HDFC NY</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Account # : <a>012345</a></div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Service : Payments</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Account Type: DDA</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Preferred Account : NO</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Preferred Account : NO</div>
        </div>
        <div className='flex flex-wrap gap-[20px] border-solid border-[2px] border-black p-[20px]'>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Settlement Amount: 25000.00</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Settlement Currency: USD</div>
            <div className='h-[40px] bg-[lightgray] w-[300px] text-center rounded-[5px]'>Execution Date: 08082024T12:35.56.000</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>MOP: FEDNOW</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>MOP Business Date: 08092024</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Value Date: 08082024T12:35.56.000</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>MOP Profile: Realtime Payments</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>MOP Curreny: USD</div>
            <div className='h-[40px] bg-[lightgray] w-[250px] text-center rounded-[5px]'>Charges: Nil</div>
        </div>
        <div className='flex flex-col gap-[10px] '>
             <div className='bg-[gray] h-[40px] rounded-[5px] text-[white] text-[20px] pl-[20px]'>Payment Header</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] text-[white] text-[20px] pl-[20px]'>Debtor Agent</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] text-[white] text-[20px] pl-[20px]'>Creditor Agent</div>
             <div className='bg-[gray] h-[40px] rounded-[5px] text-[white] text-[20px] pl-[20px]'>Remittance Information</div>
        </div>
    </div>
  )
}

export default Transactions
