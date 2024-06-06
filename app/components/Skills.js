import React from "react";

export default function Skills() {
    return(
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-purple-500">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/html.png" alt="html" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/css.png" alt="css" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/javascript.png" alt="javaScript" width="94px" height="94px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/react.jpg" alt="React" width="94px" height="94px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/reactNative.png" alt="React Native" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React Native</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/firebase.png" alt="FireBase" width="74px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>FireBase</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/tailwind.png" alt="Tailwind" width="94px" height="94px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/mongodb.jpg" alt="mongodb" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/node.png" alt="node js" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node. js</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/nextauth.jpg" alt="next Auth" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NextAuth</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/java.png" alt="java" width="114px" height="114px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Java</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src="./assets/c.jpg" alt="c#" width="64px" height="64px"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>C#</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}