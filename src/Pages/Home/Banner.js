import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

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
        <div className="hero py-12 mt-5" style={{ backgroundImage: `url("https://i.ibb.co/cQtt56C/Gray-Minimal-How-To-Enhance-Your-Portfolio-Blog-Banner.png")` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-black text-5xl font-bold">Hello, I'm <br /> Tauhidul Islam Robin</h1>
                    <p className="mb-5 text-black text-lg">A Frontend Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                    <button onClick={onButtonClick} className="btn btn-sm  btn-primary "><Link className='text-white'>Resume</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;