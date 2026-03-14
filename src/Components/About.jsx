import interactive from '../assets/images/mobile/image-interactive.jpg'
export function About(){
    return(
        <section className='w-[90%] mx-auto mt-10 grid gap-10'>
            <div>
                <img src={interactive} alt="interactive-image"/>
            </div>
            <div className='grid gap-5 '>
                <h1 className='text-center text-4xl font-light'>THE LEADER IN INTERACTIVE VR</h1>
                <p className='w-5/6 mx-auto text-center text-lg font-medium text-gray-500'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                </p>
            </div>        
        </section>
    )
}