"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import { useRouter } from "next/router";

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('transparent');
    const [navColor, setNavColor] = useState('text-gray-800');


    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
                setNavBg('#ecf0f3');
                setNavColor('text-black');
            }else{
                setShadow(false);
                setNavBg('transparent');
                setNavColor('text-gray-800');
            }
        }

        window.addEventListener("scroll", handleShadow);
        return () => {
            window.removeEventListener("scroll", handleShadow);
        }
    }, []);


    return (
       <div style={{backgroundColor: navBg}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]" }>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <img src="./assets/logo.png" alt="Lisa Kamdem Logo" width='80' height='20'/>
                </Link>
                    {/* <Image src="/../assets/logo.png" alt="" width={125} height={50}/> */}
                    <div>
                        <ul className={`hidden md:flex ${navColor}`}>
                            <Link className="ml-10 text-sm uppercase hover:border-b" href="/">Home</Link>
                            <Link className="ml-10 text-sm uppercase hover:border-b" href="/#about">About</Link>
                            <Link className="ml-10 text-sm uppercase hover:border-b" href="/#skills">Skills</Link>
                            <Link className="ml-10 text-sm uppercase hover:border-b" href="/#projects">Projects</Link>
                            <Link className="ml-10 text-sm uppercase hover:border-b" href="/#contact">Contact</Link>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
            </div>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : 
                        "fixed left-[-100%] top-0 p-10 ease-in duration-500" }>
                    <div className="flex w-full items-center justify-between">
                        <Link onClick={() => setNav(false)}  href="/">
                            <img src="./assets/logo.png" alt="" width='87' height='35'/>
                        </Link>
                        {/* <Image src="/../public/assets/logo.png" alt="/" width='87' height='35'/> */}
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose className="text-black" />
                        </div>
                    </div>
                    <div className="border-b border-blue-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4 text-black">LETS SAY SOMETHING HERE </p>
                    </div>
                    <div className="py-4 flex flex-col">
                    <ul className="uppercase ">
                        <Link className="py-4 text-sm text-black" href="/">
                            <li onClick={() => setNav(false)} className=" m-4">Home</li>
                        </Link>
                        <Link className="py-4 text-sm text-black" href="/#about">
                            <li onClick={() => setNav(false)}  className="m-4">About</li>
                        </Link>
                        <Link className="py-4 text-sm text-black" href="/#skills">
                            <li onClick={() => setNav(false)}  className="m-4">Skills</li>
                        </Link>
                        <Link className="py-4 text-sm text-black" href="/#projects">
                            <li onClick={() => setNav(false)}  className=" m-4">Projects</li>
                        </Link>
                        <Link className="py-4 text-sm text-black" href="/#contact">
                            <li onClick={() => setNav(false)}  className=" m-4">Contact</li>
                        </Link>
                    </ul>
                    <div className="pt-8">
                        <p className="uppercase tracking-wide text-[#5651e5]">LETS CONNECT</p>
                        <div className="flex items-center justify-between my-4">
                            <Link href="https://www.linkedin.com/in/lisa-kamdem/" target="_blank" rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn className="text-black" />
                                </div>
                            </Link>

                            <Link href="https://github.com/lisakamdem" target="_blank" rel="noreferrer">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub className="text-black" />
                                </div>
                            </Link>

                            <Link href="/#contact">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail className="text-black" />
                                </div>
                            </Link>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <a href="/assets/resume.pdf" download="Lisa Kamdem - Resume.pdf">
                                    <TbFileDownload  className="text-black" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            </div>
       </div>
    );
}