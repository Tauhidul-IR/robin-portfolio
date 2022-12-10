import React from 'react';

const Banner = () => {
    return (
        <div className="hero py-12" style={{ backgroundImage: `url("https://i.ibb.co/cQtt56C/Gray-Minimal-How-To-Enhance-Your-Portfolio-Blog-Banner.png")` }}>
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-black text-5xl font-bold">Hello, I'm <br /> Tauhidul Islam Robin</h1>
                    <p className="mb-5 text-black">A Frontend Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                    <button className="btn btn-primary">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;