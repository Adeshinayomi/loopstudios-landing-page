import Logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'
export function Footer(){
    return(
        <footer className='bg-black mt-16 grid py-16 gap-10 md:mt-40'>
            <div className='grid md:grid-cols-2 gap-10 justify-between md:w-[90%] mx-auto'>
                <div className='grid gap-5'>
                    <div className='justify-self-center md:justify-self-start'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul className='text-white justify-self-center md:justify-self-start grid gap-3 justify-center md:flex'>
                        <li className='text-lg font-medium text-center'>About</li>
                        <li className='text-lg font-medium text-center'>Careers</li>
                        <li className='text-lg font-medium text-center'>Events</li>
                        <li className='text-lg font-medium text-center'>Products</li>
                        <li className='text-lg font-medium text-center'>Support</li>
                    </ul>
                </div>
                <div className='grid gap-5 '>
                    <div className='justify-self-center md:justify-self-end flex gap-5'>
                        <img src={facebook} alt="facebook-icon" width={30}/>
                        <img src={twitter} alt="twitter-icon" width={30}/>
                        <img src={pinterest} alt="pinterest-icon" width={30}/>
                        <img src={instagram} alt="instagram-icon" width={30}/>
                    </div>
                    <p className='text-Grey200 text-lg md:justify-self-end font-medium'>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}