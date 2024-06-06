import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
    return(
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-purple-500">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItem title="jamlPainting" tech="HTML, CSS, JavaScript" backgroundImg="../assets/jaml.png" projectUrl="./jamlPainting" />
                    <ProjectItem title="Mayhem" tech="React Native" backgroundImg="../assets/Mayhem.jpg" projectUrl="./Mayhem" />
                    <ProjectItem title="Pawns And Claws" tech="React, MERN, Tailwind, Next Auth" backgroundImg="../assets/paw.svg" projectUrl="./PawsAndClaws" />
                    {/* <ProjectItem title="Tic Tac Toe" tech="React Native" backgroundImg="../assets/logo.png" projectUrl="./TicTacToe" /> */}

                </div>
            </div>
        </div> 
    );
}