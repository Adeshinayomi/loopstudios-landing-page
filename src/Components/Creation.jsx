import earthImage from '../assets/images/mobile/image-deep-earth.jpg'
import arcadeImage from '../assets/images/mobile/image-night-arcade.jpg'
import soccerImage from '../assets/images/mobile/image-soccer-team.jpg'
import gridImage from '../assets/images/mobile/image-grid.jpg'
import fromaboveImage from '../assets/images/mobile/image-from-above.jpg'
import pocketImage from '../assets/images/mobile/image-pocket-borealis.jpg'
import curriosity from '../assets/images/mobile/image-curiosity.jpg'
import fisheye from '../assets/images/mobile/image-fisheye.jpg'
import earthImageD from '../assets/images/desktop/image-deep-earth.jpg'
import arcadeImageD from '../assets/images/desktop/image-night-arcade.jpg'
import soccerImageD from '../assets/images/desktop/image-soccer-team.jpg'
import gridImageD from '../assets/images/desktop/image-grid.jpg'
import fromaboveImageD from '../assets/images/desktop/image-from-above.jpg'
import pocketImageD from '../assets/images/desktop/image-pocket-borealis.jpg'
import curriosityD from '../assets/images/desktop/image-curiosity.jpg'
import fisheyeD from '../assets/images/desktop/image-fisheye.jpg'
export function Creation(){
    return(
        <section className='w-[90%] mx-auto mt-16 grid gap-10 md:mt-40'>
            <div className='flex justify-between'>
                <h1 className='text-center text-4xl font-thin'>OUR CREATIONS</h1>
                <button className='hidden md:flex px-8 py-2 border-2 w-fit justify-self-center font-medium border-black tracking-[.2rem]'>SEE ALL</button>
            </div>
            <div className='grid gap-5 md:grid-cols-4'>
                <div className='relative'>
                    <img src={earthImage} alt="earth-image" className='md:hidden'/>
                    <img src={earthImageD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2'>DEEP EARTH</h1>
                </div>
                <div className='relative'>
                    <img src={arcadeImage} alt="earth-image" className='md:hidden'/>
                    <img src={arcadeImageD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2'>NIGHT ARCADE</h1>
                </div>
                <div className='relative'>
                    <img src={soccerImage} alt="earth-image" className='md:hidden'/>
                    <img src={soccerImageD} alt="earth-image" className='hidden md:flex bg-gradient-to-t from-black'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2 md:w-2/3'>SOCCER TEAM VR</h1>
                </div>
                <div className='relative'>
                    <img src={gridImage} alt="earth-image" className='md:hidden'/>
                    <img src={gridImageD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2'>THE <br /> GRID</h1>
                </div>
                <div className='relative'>
                    <img src={fromaboveImage} alt="earth-image" className='md:hidden'/>
                    <img src={fromaboveImageD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2 md:w-2/3'>FROM UP ABOVE VR</h1>
                </div>
                <div className='relative'>
                    <img src={pocketImage} alt="earth-image" className='md:hidden'/>
                    <img src={pocketImageD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2 md:w-2/3'>POCKET BOREALIS</h1>
                </div>
                <div className='relative'>
                    <img src={curriosity} alt="earth-image" className='md:hidden'/>
                    <img src={curriosityD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2 md:w-2/3'>THE CURIOSITY</h1>
                </div>
                <div className='relative'>
                    <img src={fisheye} alt="earth-image" className='md:hidden'/>
                    <img src={fisheyeD} alt="earth-image" className='hidden md:flex'/>
                    <h1 className='bg-gradient-to-r from-black h-full flex items-end absolute bottom-0 left-0 py-5 px-8 text-2xl text-White font-thin w-1/2 md:w-2/3'>MAKE IT FISHEYE</h1>
                </div>
            </div>
            <button className='md:hidden px-8 py-2 border-2 w-fit justify-self-center font-medium border-black tracking-[.2rem]'>SEE ALL</button>
        </section>
    )
}