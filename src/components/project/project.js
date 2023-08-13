import { useEffect,useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { MultiStepContext } from "./context";


export default function  Project (props){
    const context= useContext(MultiStepContext);
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return(<div data-aos="fade-left" >    
            <div className="max-w-sm bg-black border border-black rounded-lg shadow-lg ml-[10px]">
                <div className=" cursor-pointer" onClick={()=>{context.setop(true);context.setid_ved(props.project.id)}}>
                    <img  src={props.project.image} alt="" className="h-full rounded-lg rounded-t-lg" />
                </div>
                <div className="h-[40%] ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center ">{props.project.titre}</h5>
                    
                </div>
            </div>
        </div>
        )
}