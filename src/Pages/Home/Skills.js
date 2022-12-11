import React from 'react';

const Skills = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold  my-10'>My Skills</h1>
            <div className='flex flex-col md:flex-row justify-center'>
                <div className='text-left px-5 w-full md:w-1/2 my-auto'>
                    <h2 className='font-bold text-primary text-3xl my-5'>Why Hire Me???</h2>
                    <p className='text-lg font-bold'>I am a Front end and MERN Stack developer who learned and was certified by Programming Hero. I have done many projects with React, Node js, MongoDB, JavaScript . <br />
                        I am an expert in React JS, Express JS, Node JS, MongoDB, JWT, JavaScript, Tailwind CSS, Bootstrap, Html5, and CSS3. </p>
                </div>
                <div className='flex flex-col px-5 w-full md:w-1/2 my-6'>
                    <h2 className='text-3xl font-bold text-primary mb-6'>Skills</h2>
                    <h4 className='font-bold text-left'>HTML-90%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="90" max="100"></progress>
                    <h4 className='font-bold text-left'>CSS-80%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="80" max="100"></progress>
                    <h4 className='font-bold text-left'>Tailwind-80%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="80" max="100"></progress>
                    <h4 className='font-bold text-left'>React-75%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="75" max="100"></progress>
                    <h4 className='font-bold text-left'>JavaScript-70%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="70" max="100"></progress>
                    <h4 className='font-bold text-left'>Node-50%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="50" max="100"></progress>
                    <h4 className='font-bold text-left'>MongoDB-50%</h4>
                    <progress className="progress progress-primary w-full mb-4" value="50" max="100"></progress>

                </div>
            </div>
        </div>
    );
};

export default Skills;