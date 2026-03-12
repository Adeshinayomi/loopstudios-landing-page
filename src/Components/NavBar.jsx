import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
export function NavBar(){
    return(
        <nav  className='w-full fixed top-0 px-4 py-10 flex justify-between'>
            <img src={logo} alt="logo" />
            <img src={hamburger} alt="hamburger icon" width={40}/>
        </nav>
    )
}