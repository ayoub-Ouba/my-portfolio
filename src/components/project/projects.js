import Project from "./project"
import Typewriter from "typewriter-effect"
import { Projects_data } from "../data";
import { useEffect,useContext,useState } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { MultiStepContext } from "./context";

export default function  Projects(){
    useEffect(()=>{
        AOS.init({duration:1000});
       
    },[])

    const context= useContext(MultiStepContext);
    return(<div className="max-md:mt-[70%] my-10"> <a name="projects"></a>
          
        <h1 data-aos="fade-up-righ" className="text-[2rem] md:text-[3rem] text-[#ffff00] text-center mb-10" >
            <Typewriter options={{autoStart:true,loop:true,delay:40,strings:["Projects"]}}/>
        </h1>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4 lg:mx-[150px] mx-[80px] place-content-center">
       
        
            {Projects_data.map((pr)=>{return(
               
                    <Project project={pr} id={pr.id} key={pr.id}/> 
               )
            })}
        
        </div>
     </div>)
}