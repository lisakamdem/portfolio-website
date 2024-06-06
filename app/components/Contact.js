"use client";
import React, {useRef, useState} from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { TbFileDownload } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";


export default function Contact() {
    const form = useRef();
    const [fromName, setFromName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ro9em0s', 'template_y6bgngm', form.current, 'qamWILGuC4QFR_JQu')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully! I will get back to you as soon as possible.");

                //clear form inputs
                setFromName("");
                setPhoneNumber("");
                setFromEmail("");
                setMessage("");

            }, (error) => {
                console.log(error.text);
                alert("An error occurred, Please try again later.");
            });
    };


    return(
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto py-16 px-2 w-full">
                <p className="text-xl tracking-widest uppercase text-purple-500">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/*left*/}
                    <div className="col-span-3 lg:col-span-2 h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img src="./assets/logo.png" alt="" className="rounded-xl hover:scale-105 ease-in duration-300" />
                            </div>
                            <div>
                                <h2 className="py-2">Lisa Kamdem</h2>
                                <p>Software Developer</p>
                                <p className="py-4">I am available for full-time positions.
                                    Contact me and let&apos;s get in touch.</p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">Connect with me</p>
                                <div className="flex items-center justify-between py-4">
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
                    {/*right*/}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input type="text" name="from_name" value={fromName} onChange={(e) => setFromName(e.target.value)}
                                            className="border-2 rounded-lg p-3 flex border-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input type="tel" placeholder="###-###-####" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone_number" 
                                            value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                            className="border-2 rounded-lg p-3 flex border-gray-300" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input type="email" name="from_email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)}
                                        className="border-2 rounded-lg p-3 flex w-full border-gray-300" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                                        className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
                                </div>
                                <button className="w-full p-4 mt-4 bg-purple-500">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg sha-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} className="m-auto text-purple-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}