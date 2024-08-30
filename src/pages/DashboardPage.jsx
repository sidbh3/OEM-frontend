
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard'
import { useNavbar } from '../context/NavContext'

const DashboardPage = () => {
    const {isopen}=useNavbar()
  return (
    <><Navbar/>
    <div className={`mt-16 ${isopen?'ml-64':'ml-0'}`}>
    <Dashboard/>
    </div></>
  )
}

export default DashboardPage