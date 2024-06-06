import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Mayhem() {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
                    <Image src="/./assets/Mayhem.jpg" alt="/" className="absolute z-1" layout="fill" objectFit="cover" />
                        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
                            <h2 className="py-2 text-white">Mayhem</h2>
                            <h3 className="text-white">React Native</h3>
                        </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>information coming soon...</p>
                    <button className="px-8 py-2 mt-4 mr-8" >Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React Native</p>
                            <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>CSS</p>
                        </div>

                    </div>
                    
                </div>
                    <Link href="/#projects">
                        <p className="underline cursor-pointer">Back</p>
                    </Link>
            </div>
        </div>
    );
}