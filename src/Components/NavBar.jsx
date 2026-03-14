import { useState,useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
export function NavBar(){
    const [scroll,setScroll]=useState(false)
    const [menu,setMenu]=useState(false)
    function handscroll(){
        setScroll(window.scrollY > 100)
    }
    useEffect(()=>{
        window.addEventListener('scroll',handscroll)
    })

    function toggleMenu(){
        if(!menu){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }
    return(
        <nav className={`w-full ${menu?'bg-black':''} ${scroll?'bg-black':''} fixed z-20 ease-in duration-300 top-0 px-4 py-10`}>
            <div className='flex justify-between w-[90%] mx-auto'>
                <img src={logo} alt="logo" />
                <ul className={`${menu?'absolute h-screen flex flex-col bg-black top-20 left-0':'hidden '} w-full ease-in duration-300 text-white justify-self-start md:justify-end md:font-alata font-thin md:flex gap-5 px-8 pt-28 md:pt-0 md:px-0 justify-start`}>
                    <li className='text-3xl md:text-sm  md:font-normal'>ABOUT</li>
                    <li className='text-3xl md:text-sm  md:font-normal'>CAREER</li>
                    <li className='text-3xl md:text-sm  md:font-normal'>EVENT</li>
                    <li className='text-3xl md:text-sm md:font-normal'>PRODUCTS</li>
                    <li className='text-3xl md:text-sm  md:font-normal'>SUPPORT</li>
                </ul>
                <img src={hamburger} alt="hamburger-icon" width={40} className={`${menu?'hidden':''} md:hidden ease-in duration-300`} onClick={toggleMenu}/>
                <img src={close} alt="close-icon" width={40} className={`${menu?'flex':'hidden'} md:hidden ease-in duration-300`}  onClick={toggleMenu}/>
            </div>
        </nav>
    )
}