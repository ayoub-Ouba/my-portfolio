import { useState } from "react";
export default function Navbar(){
    const Links = [
        { name: "Home", link: "#home" },
        { name: "About me", link: "#about_me" },  { name: "Projects", link: "/devenir_vendor" }
      ];    
      const [open,setOpen]=useState(false)
return(<div className='w-full max-md:fixed max-md:top-0 max-md:left-0 max-md:z-10'>
<div className={`md:flex items-center justify-between  py-4 md:px-10 px-7 max-md:bg-white`}>
<div className={`font-bold text-3xl cursor-pointer flex items-center font-[Poppins] md:text-white  text-black  mx-10`}>
  OUBAKKI
</div>
   

<div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden '>
   <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10H21M3 14H21M3 18H21M3 6H21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>

<ul className={`md:flex md:mr-10  md:items-center md:pb-0  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 max-md:bg-white   ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
  {
    Links.map((link)=>(
      <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7 '>
        <a href={link.link} className={` text-black md:text-white  duration-500`}>{link.name}</a>
      </li>
    ))
  }
</ul>
</div>
</div>
    
    )
}