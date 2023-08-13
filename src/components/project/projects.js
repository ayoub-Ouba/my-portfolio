import Project from "./project"
import Typewriter from "typewriter-effect"
import { Projects_data } from "../data";
import { useEffect,useContext,useState } from "react";
import Modal from 'react-modal'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { MultiStepContext } from "./context";
Modal.setAppElement('#root');
export default function  Projects(){
    useEffect(()=>{
        AOS.init({duration:1000});
       
    },[])

    const context= useContext(MultiStepContext);
    console.log(context.op)
    return(<div className="max-md:mt-[40%]">
        <Modal isOpen={context.op} contentLabel="Pop-up Modal" className="md:w-[800px] lg:w-[900px] w-[500px] md:h-[500px] h-[100px] bg-white border border-white rounded-xl absolute xl:left-[17%] left-[10%] max-md:left-[15%] right-[10%] top-[40%] md:top-[20%] "> 
            <video controls width={800} height={300} className="mx-auto mt-10 border-1 border-white" autoPlay >
                <source src={`./vedios/${context.id_ved}.mp4`} type="video/mp4" />
            </video>
            <button className='close' onClick={()=>{context.setop(false)}}>X</button>
         </Modal>
        <h1 data-aos="fade-up-righ" className="text-[2rem] md:text-[3rem] text-[#ffff00] text-center mb-10" >
            <Typewriter options={{autoStart:true,loop:true,delay:40,strings:["Projects"]}}/>
        </h1>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4 lg:mx-[150px] mx-[80px] place-content-center">
            {Projects_data.map((pr,i)=>{return(
                <Project project={pr} key={i}/> )
            })}
        </div>
     </div>)
}