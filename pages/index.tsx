import Image from 'next/image'
import { Inter } from 'next/font/google'
import BasicPie from './components/chart2'
import { StyledEngineProvider } from '@mui/material'
import PieChart from './components/PieChart'
import Chart1 from './components/Chart1'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import Dashboard from './components/dashboard'
import SideBar from './components/sideBar'
import Profile from './components/Profile'
//import Example from './components/GenericTable.tsx';
import Example from './components/GenericTable'
import Hero from './components/Hero'
import List from './components/List'
import Transactions from './components/Transactions'
//import BasicPie from './components/dashboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
        
        <Hero/>
      
       
    </main>
  )
}


