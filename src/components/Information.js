import { useEffect } from "react";
import Typewriter from "typewriter-effect"
import AOS from 'aos';
import 'aos/dist/aos.css'

import Social_Media from "./information_socialmedia";
export default function Information (){
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return(<div className="h-[50vh] md:h-[70vh] lg:h-[89vh]  md:mt-0 mt-[20%] "> 
               
                <div className=' text-white absolute  md:bottom-[40%] left-5 xl:left-40' 
                data-aos="fade-right" data-aos-easing="ease-in-sine">
                    <div className="text-[2rem] md:text-[2rem]">Hi, I'm</div>
                    <div className="text-[#ffff00] text-[3rem] md:text-[5rem]">OUBAKKI AYOUB</div>
                    <div className="text-[2rem] md:text-[2.5rem] mb-3">
                    <Typewriter options={{autoStart:true,loop:true,delay:40,strings:["Full stack web Developer","React js / Next js Developer","MERN Stack Developer"]}}/></div>

                    <Social_Media/>
                    <a href='CV/AYOUB%20OUBAKKI_CV.pdf' className="text-xl"><button className='bg-transparent hover:bg-yellow-400 text-yellow-400 font-semibold
                     hover:text-white  px-4 border border-yellow-400 hover:border-transparent rounded w-[10rem] md:w-[15rem] py-2 md:py-3 hover:shadow-lg hover:shadow-yellow-400' >
                        My Cv
                    </button></a>
                </div>

                <div className='hidden xl:inline-block images' >
                    <img src='./images/img1.png' className='imag1' />
                    <img src='./images/img10.png' className='imag2'/>
                </div>
               
                
      
        </div>

    )
}