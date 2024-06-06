import Link from "next/link";
import React from "react";

export default function About() {
    return(
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-purple-500">About</p>
                    <h2 className="py-4">Who I am</h2>
                    <p className="py-2">During my senior year of high school, I started exploring career options and discovered a passion for coding. This initial curiosity quickly grew into a deep-seated passion for programming. 
                        Over the years, coding has taught me patience, attention to detail, and the importance of staying calm when faced with challenges.
                        One of my primary goals as a programmer is to continuously enhance my skills and help companies improve their business processes, increase productivity, and deliver superior solutions to their customers.</p>
                    <p className="py-2">After high school, I pursued a college education where I expanded my knowledge by learning various programming languages. 
                        This experience further fueled my passion for learning new technologies and ensuring that both my clients and I are satisfied with the final projects. 
                        I am organized, a team player, and always eager to learn something new, making me well-equipped to handle diverse and complex projects.</p>
                    <Link href="/#projects">
                        <p className="py-2 underline cursor-pointer">Check out some of my latest projects.</p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="./assets/aboutme.jpg" alt="picture of Lisa Kamdem" />
                </div>
            </div>
        </div>

    );
}