import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "typewriter-effect"
import { useEffect } from "react";

export default function AboutMe(){
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return(<div className="text-white h-[400px] flex justify-center my-[5%] md:my-[10%] w-full  ">
        <a name="about_me"></a>
        <div className="mr-5 mt-7 opacity-75 ">
            <img src="./images/tab2.png" className="hidden lg:inline-block w-[200px] border-b-2 border-[#ffff00] shadow-md  shadow-[#ffff00] " data-aos="fade-right"/>
        </div>
        <div data-aos="fade-left " className='max-md:ml-0 max-[917px]:ml-[110px]'>
            <h1 className="text-[2rem] md:text-[3rem] text-[#ffff00] text-left w-full">
                <Typewriter options={{autoStart:true,loop:true,delay:40,strings:["About Me"]}}/></h1>
            <p className="w-screen md:w-[900px] max-md:h-[50vh] max-md:text-[1.5rem]  max-[917px]:text-[1.5rem] min-[917px]:text-[1.7rem] text-left">
                I am a passionate Full Stack web developer who enjoys creating innovative and 
                high-performance web applications. I am constantly motivated to develop my 
                skills and grow professionally. I am perseverant, ambitious in my work, and 
                always ready to take on new challenges to continue progressing as a 
                professional. I am also confident in my ability to propose ideas. What 
                motivates me in my work is the opportunity to create exceptional user 
                experiences and bring value to end users .
            </p>
        </div>

        

    </div>
    )
}