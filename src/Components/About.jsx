import interactive from '../assets/images/mobile/image-interactive.jpg'
import interactiveDesktop from '../assets/images/desktop/image-interactive.jpg'
export function About(){
    return(
        <section className='w-[90%] mx-auto mt-10 md:mt-16 grid gap-10 md:grid-cols-2 md:place-items-end'>
            <div className='relative'>
                <img src={interactive} alt="interactive-image-mobile" className='md:hidden'/>
                <img src={interactiveDesktop} alt="interactive-image-desktop" className='hidden md:flex'/>
                <div className='hidden md:flex absolute top-0 -right-[7.8rem] px-16 py-16 bg-[#BF66CF]'>

                </div>
            </div>
            <div className='grid gap-5'>
                <h1 className='md:w-5/6 mx-auto text-center md:text-start text-4xl md:text-5xl font-light'>THE LEADER IN INTERACTIVE VR</h1>
                <p className='w-5/6 mx-auto text-center md:text-start text-lg md:text-sm font-medium text-gray-500'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                </p>
            </div>        
        </section>
    )
}