import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC<any> =()=>{

    return <div className="bg-red-50 h-[100px] flex justify-between items-center text-white px-[100px]">
   <h1 className="uppercase text-7xl text-black font-extrabold ">Kk</h1>
   <div className=" flex justify-center items-center gap-5">
<Link href="/" className="uppercase text-l text-black">home</Link>
<Link  href="/"className="uppercase text-l text-black">about</Link>
<Link href="/" className="uppercase text-l text-black">projects</Link>
<Link href="/" className="uppercase text-l text-black">contact</Link>
   </div>
   <div className=" flex justify-center items-center gap-3">
<h1 className="text-black text-l"><FaLinkedin /></h1>
<h1 className="text-black text-l"><FaFacebook /></h1>
<h1 className="text-black text-l"><FaInstagram /></h1>
   </div>
    </div>
}

export default Navbar