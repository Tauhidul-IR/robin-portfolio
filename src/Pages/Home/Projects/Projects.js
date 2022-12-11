import React from 'react';
import bikroyBD from '../../../image/bikroybd.JPG'
import travel from '../../../image/travel.JPG'
import programming from '../../../image/programming.JPG'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold'>My Projects</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={bikroyBD} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-center">
                        <h6 className='text-red-800 font-extrabold'>React | JavaScript | MongoDB</h6>
                        <h2 className="card-title">Bikroy-BD</h2>
                        <p>This is 2nd hand products reselling Website</p>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-primary"><a href="https://bikroybd-8102c.web.app/" target={"_blank"}>Live link</a></button>
                            <button className="btn btn-sm btn-primary"><Link to={'/prejectBikroyBDInfo'} >Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={travel} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-center">
                        <h6 className='text-red-800 font-extrabold'>React | JavaScript | MongoDB</h6>
                        <h2 className="card-title">T-Travel</h2>
                        <p>This is Tourist Guide service Website</p>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-primary"><a href="https://t-travel-9b753.web.app/" target={"_blank"}>Live link</a></button>
                            <button className="btn btn-sm btn-primary"><Link to={'/prejectTTravelInfo'} >Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={programming} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-center">
                        <h6 className='text-red-800 font-extrabold'>React | JavaScript | MongoDB</h6>
                        <h2 className="card-title">Free Programming</h2>
                        <p>This is Education Website</p>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-primary"><a href="https://free-programming.web.app/" target={"_blank"}>Live link</a></button>
                            <button className="btn btn-sm btn-primary"><Link to={'/prejectFreeProInfo'} >Details</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;