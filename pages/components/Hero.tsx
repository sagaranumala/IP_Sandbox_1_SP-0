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

    const Pages: any[]=[<Dashboard/>,<Profile/>,<Calender/>,<Region/>,<Country/>,<Currency/>,<MOP/>,<MOPCluster/>,<MOPPreference/>,<MembershipDirectory/>,<ClearingPersona/>,<MembershipProperty/>,<ClearingProperty/>,<Account/>,<Party/>,<Instructions/>,<Transactions/>]
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