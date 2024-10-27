import { useEffect,useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { MultiStepContext } from "./context";
import { useState } from "react";


export default function  Project (props){
    const context= useContext(MultiStepContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const [num_pr, setnum_pr] = useState();

    // Fonction pour alterner entre étendu et tronqué
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
      console.log(props.id)
      setnum_pr(props.id)
    };
    useEffect(()=>{
        AOS.init({duration:1500})
    },[])
    return(
<div class="max-w-[25rem] bg-[#ffffffe9] border  rounded-lg shadow-xl " data-aos="fade-up">
    <div className="  shadow-md  w-[95%] mx-auto my-2 h-[180px]">
        <img class=" h-[100%] w-[100%] " src={props.project.image} alt="" />
    </div>
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{props.project.titre}</h5>
       

        <p className={`font-normal text-black dark:text-gray-400  ${isExpanded && props.project.id==num_pr? "line-clamp-none" : "line-clamp-3"}`}>
            {props.project.description}
        </p>

      <button onClick={toggleReadMore} className="text-blue-500 hover:underline focus:outline-none mb-3 underline">
        {isExpanded ? "Read less" : "Read more"}
      </button>

              <div className="flex flex-wrap">
                {props.project.languages.map((lng,i)=>{
                    return  <div className=" rounded-lg  bg-slate-300 pr-3 pl-2 mr-1 mb-1" key={i}>{lng}</div>
                })}
               
            </div>
        {props.project.url!=""?
        <a href="#" class="inline-flex items-center  py-2 text-sm font-medium text-center">
            Visit Project
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>:null}
    </div>
</div>

        )
}