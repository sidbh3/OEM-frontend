
// import Renault from '../../assets/RNTLogo.png'
import User from '../../assets/user.png'
import Sidenav from './Sidenav';
import { useNavbar } from '../../context/NavContext';
import logo from '../../assets/Suzuki_logo.png'

const Navbar = () => {
    const {isopen}=useNavbar()
  return (
    <>
    <Sidenav />
    <div className='h-[74px] w-full flex justify-between p-10 items-center bg-darkBlue font-poppins drop-shadow-xl fixed top-0 z-50'>

        <div className={`flex items-center ${isopen ? 'ml-72': 'ml-14'} `}>
            <img src={logo} alt="Renault Logo" className='w-15 h-12' />
            <h2 className='text-white font-semibold text-[30px] tracking-wider'>Maruti Suzuki</h2>
        </div>

        <div className='flex gap-3 items-center rounded-[50px] p-2 bg-lightWhiteOpacity z-[-20]'>
            <div className='flex w-[55px] h-[55px] bg-darkLightWhiteOpacity rounded-full items-center justify-center'><img src={User} alt="user logo" className='w-[39px] h-[40px]' />
            </div>
            <h2 className='text-white font-light'>My Account</h2>

            <select className='outline-none border-none bg-transparent text-white w-[32px]'>
              <option value=""></option>
              <option value="" className='text-black text-sm'>Profile</option>
             
              <option value="" className='text-black text-sm'>Log out</option>
            </select>
           
        </div>
    </div>
    </>
  )
}

export default Navbar