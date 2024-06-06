import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
    return (
    <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-xl tracking-widest">LET&apos;S BRING YOUR IDEAS TO LIFE</p>
                <h1 className=" py-4">Hi, I am <span className="text-purple-500">Lisa</span></h1>
                <h1 className="py-2 ">A Software Developer</h1>
                <p className="py-4 max-w-[70%] m-auto">My expertise spans both front-end and back-end development, allowing me to deliver full-stack solutions to suit the needs of my clients.
                        Additionally, I have experience in developing mobile applications, ensuring a cohesive and user-friendly experience on all devices.</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">

                    <Link href="https://www.linkedin.com/in/lisa-kamdem/" target="_blank" rel="noreferrer"> 
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 mr-6 cursor-pointer hover:scale-110 ease-in duration-300">  
                                <FaLinkedinIn />  
                        </div>
                    </Link>

                    <Link href="https://github.com/lisakamdem" target="_blank" rel="noreferrer">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 mr-6 cursor-pointer hover:scale-110 ease-in duration-300"> 
                                <FaGithub />  
                        </div>
                    </Link>
                    <Link href="/#contact">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 mr-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 mr-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <a href="/assets/resume.pdf" download="Lisa Kamdem - Resume.pdf">
                            <TbFileDownload />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
        
}