import React from "react";
import NavBar from "../components/Navbar";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function JamlPainting(){
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
                    <Image src="/./assets/jaml.png" alt="/" className="absolute z-1" layout="fill" objectFit="cover" />
                        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
                            <h2 className="py-2">J.A.M.L Painting</h2>
                            <h3>HTML/CSS/JavaScript</h3>
                        </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This project represents my first major endeavor in web development. 
                        My friends and I share a passion for painting, and during one of our conversations, we thought it would be wonderful to create a website showcasing our various artworks. 
                        Taking on the challenge, I began developing the website, with the most significant difficulty being the CSS design aspect. 
                        Ensuring that the site looked visually appealing and polished was quite challenging. 
                        Although it is a simple project, it holds great significance for me as my inaugural venture into web development. 
                        I am extremely proud of the final result and how it effectively presents our collective work.
                    </p>
                    <Link href="https://jamlpainting.netlify.app/" target="_blank" rel="noreferrer" >
                        <button className="px-8 py-2 mt-4 mr-8" >Demo</button>
                    </Link>
                    <Link href="https://github.com/lisakamdem/J.A.M.L-Paintings" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Code</button>
                    </Link>
                </div>

                <div className="col-span-2 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies</p>
                        <div className="grid grid-cols-4 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>HTML</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>CSS</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>JavaScript</p>
                        </div>
                    </div>
                </div>

                    <div className="col-span-4">
                        <p>I have also made a React version of this website using FireBase, so that people can log in and favorite some paintings</p>
                        <Link href="https://jamlpainting.vercel.app/" target="_blank" rel="noreferrer" >
                            <button className="px-8 py-2 mt-4 mr-8" >Demo</button>
                        </Link>
                        <Link href="https://github.com/lisakamdem/jamlpainting" target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4">Code</button>
                        </Link>
                    </div>

                    <div className="col-span-4">
                        <Link href="/#projects">
                            <p className="underline cursor-pointer">Back</p>
                        </Link>
                    </div>
            </div>
        </div>
    );
};