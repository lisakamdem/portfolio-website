import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function PawsAndClaws() {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
                    <Image src="/./assets/paw.svg" alt="paws logo" className="absolute z-1" layout="fill" objectFit="cover" />
                        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
                            <h2 className="py-2">Paws And Claws</h2>
                            <h3>React/MongoDB/Tailwind CSS/Next Auth</h3>
                        </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This project was a collaborative effort for our capstone project at SAIT.
                        Each team member had specific responsibilities, and my primary role focused on the backend development. 
                        I was responsible for connecting the application to MongoDB, implementing user authentication with login and sign-up functionalities, and using regex to ensure strong password creation. 
                        Additionally, I utilized hashing techniques to secure passwords in the database and implemented Role-Based Access Control (RBAC) to ensure that only authorized users could leave reviews on various suppliers, while preventing suppliers from reviewing their own pages.</p>
                    <p className="mt-4">The most challenging aspect for me was establishing and managing the database connection. 
                        However, once I overcame this hurdle, I found it fascinating to interact with different parts of the database and display the necessary information on the website. 
                        This project significantly enhanced my understanding of backend development and security practices.</p>
                    <Link href="https://paws-and-claws-seven.vercel.app/" target="_blank" rel="noreferrer" >
                        <button className="px-8 py-2 mt-4 mr-8" >Demo</button>
                    </Link>
                    <Link href="https://github.com/samnbogen/pawsAndClaws" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Code</button>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Tailwind CSS</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>MongoDB</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Next Auth</p>
                        </div>

                    </div> 
                </div>
                    <Link href="/#projects">
                        <p className="underline cursor-pointer">Back</p>
                    </Link>
            </div>
        </div>
    );
};