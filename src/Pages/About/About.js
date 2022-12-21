import React from 'react';
import { FaHome, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoMdSchool } from "react-icons/io";
import { Link } from 'react-router-dom';
import img from '../../image/photo2.png'

const About = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={img} className="" /> */}
                    <div className="avatar mr-4">
                        <div className=" w-52 md:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold">Tauhidul Islam Robin</h1>
                        <h1 className="text-2xl text-primary my-4 font-bold">Front End Web Developer</h1>
                        <p className="py-6 text-lg font-bold">My name is Tauhidul Islam Robin and I am a fresher and currently develope my skill. I am a student at Eastern University. I am studying Computer science and engineering. I am much interested in developing new things which excite me a lot.</p>
                        <button onClick={onButtonClick} className="btn btn-sm  btn-primary mb-4"><Link className='text-white'>Resume</Link></button>
                        <div>
                            <div className='flex items-center text-xl font-bold text-accent'>
                                <FaHome></FaHome>
                                <p className='ml-3 my-1'>Savar, Dhaka-1341</p>
                            </div>
                            <div className='flex items-center text-xl font-bold text-accent'>
                                <FaPhoneAlt></FaPhoneAlt>
                                <p className='ml-3 my-1'>01855883465</p>
                            </div>
                            <div className='flex items-center text-xl font-bold text-accent'>
                                <IoMdMail></IoMdMail>
                                <p className='ml-3 my-1'>tauhidulislam.robin27@gmail.com</p>
                            </div>
                            <div className='hidden md:flex items-center text-xl font-bold text-accent'>
                                <FaLinkedin></FaLinkedin>
                                <a className='ml-3 my-1 ' href='https://www.linkedin.com/in/tauhidul-islam-robin-186467235/'>https://www.linkedin.com/in/tauhidul-islam-robin-186467235/</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education */}
            <div className='mb-10 bg-base-200 py-10'>
                <h1 className='text-5xl font-bold text-primary mb-10 '>My Education</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='flex flex-col md:flex-row text-xl font-bold items-center justify-center'>
                        <IoMdSchool className='text-5xl mr-4'></IoMdSchool>
                        <div className='md:text-left text-center'>
                            <h4>BSC in CSE at Eastern University</h4>
                            <p className='text-accent'>October 2021 to Present</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row  text-xl font-bold items-center justify-center my-7'>
                        <IoMdSchool className='text-5xl mr-4'></IoMdSchool>
                        <div className='md:text-left text-center'>
                            <h4>Diploma In CSE at Dhaka Polytechnic Institute</h4>
                            <p className='text-accent'>2016 to 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;