import Dashboard from '../components/dashboard'
import SideBar from '../components/sideBar'
import Profile from '../components/Profile'
import { useState } from 'react'
import Calender from './ReferenceData/GenericData/Calender';
import Region from './ReferenceData/GenericData/Region';
import Country from './ReferenceData/GenericData/Country';
import Currency from './ReferenceData/GenericData/Currency';
import MOP from './ReferenceData/DistributionData/Mop';
import MOPCluster from './ReferenceData/DistributionData/MOPCluster';
import MOPPreference from './ReferenceData/DistributionData/MOPPreference';
import MembershipDirectory from './ReferenceData/DistributionData/MembershipDirectory';
import ClearingPersona from './ReferenceData/DistributionData/ClearingPersona';
import MembershipProperty from './ReferenceData/DistributionData/MembershipProperty';
import ClearingProperty from './ReferenceData/DistributionData/ClearingProperty';
import Instructions from './Instructions';
import Transactions from './Transactions';
import Account from './ReferenceData/CustomerData/Account';
import Party from './ReferenceData/CustomerData/Party';

 
export default function Hero() {
    const [page,setPage]=useState(0);

    const Pages: any[]=[<Dashboard key={0}/>,<Profile key={1}/>,<Calender key={2}/>,<Region key={3}/>,<Country key={4}/>,<Currency key={5}/>,<MOP key={6}/>,<MOPCluster key={7}/>,<MOPPreference key={8}/>,<MembershipDirectory key={9}/>,<ClearingPersona key={10}/>,<MembershipProperty key={11}/>,<ClearingProperty key={12}/>,<Account key={13}/>,<Party key={14}/>,<Instructions key={15}/>,<Transactions key={16}/>]
    const PageDisplay=()=>{
        return Pages[page];
    }

  return (
    <main className='flex gap-[30px] bg-[white] w-[100%]'>
        <div className='sticky top-[100px]'>
            <SideBar page={page} setPage={setPage}/>
        </div>
        <div className=' pr-[50px]  p-[20px] mr-[20px] w-[100%]'>
              {
              PageDisplay()
            }
        </div>
        {/* <Dashboard/> */}
      
        {/* <Profile/> */}
    </main>
  )
}