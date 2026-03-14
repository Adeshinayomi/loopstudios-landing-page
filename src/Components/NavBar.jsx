import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
export function NavBar(){
    return(
        <nav className='w-full fixed top-0 px-4 py-10'>
            <div className=' flex justify-between md:w-5/6 mx-auto'>
                <img src={logo} alt="logo" />
                <ul className='hidden text-white justify-self-center font-alata md:flex gap-5 justify-center'>
                    <li className='text-lg md:text-sm font-normal text-center'>About</li>
                    <li className='text-lg md:text-sm  font-normal text-center'>Careers</li>
                    <li className='text-lg md:text-sm  font-normal text-center'>Events</li>
                    <li className='text-lg md:text-sm font-normal text-center'>Products</li>
                    <li className='text-lg md:text-sm  font-normal text-center'>Support</li>
                </ul>
                <img src={hamburger} alt="hamburger icon" width={40} className='md:hidden'/>
            </div>
        </nav>
    )
}