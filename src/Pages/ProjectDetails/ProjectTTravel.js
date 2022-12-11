import React from 'react';
import bikroyBDImg from '../../image/travel.JPG'
import img1 from '../../image/projects/tTravel/home.png'
import img2 from '../../image/projects/tTravel/service.png'
import img3 from '../../image/projects/tTravel/review.png'
import imgHome from '../../image/projects/tTravel/login.png'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProjectTTravel = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-6">
                <figure className="px-10 pt-10">
                    <img src={bikroyBDImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-left">
                    <div>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://t-travel-9b753.web.app/">Live site | </a>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://github.com/Tauhidul-IR/t-travel-11">Client site code | </a>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://github.com/Tauhidul-IR/t-travel-server-11">Server site code</a>
                    </div>
                    <h2 className="card-title text-4xl font-bold">T-Travel</h2>
                    <h2 className='text-lg font-bold'><span className='text-2xl text-primary font-bold'>Project Info: </span>This is a personal tourist guide service website. Anyone can book a Guide from here. This is a firebase authentication base site. User must Login or SignUp then book a guide. All data and information store in Database. Also use CRUD Operation.</h2>
                    <h3 className='text-lg font-bold'><span className='text-2xl font-bold text-primary'>Technologies: </span> React JS, Node JS, Express JS, JWT, Tailwind, Firebase, MongoDB.</h3>
                </div>
                <div>
                    <h3 className='text-4xl font-bold my-7'>Website ScreenShots</h3>
                    <div className='flex justify-center flex-wrap mb-6'>
                        <PhotoProvider>
                            <PhotoView src={imgHome}>
                                <figure><img className='rounded h-60 w-52 md:w-72' src={imgHome} alt="Shoes" /></figure>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={img1}>
                                <figure><img className='rounded h-60 w-52 md:w-72' src={img1} alt="Shoes" /></figure>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={img2}>
                                <figure><img className='rounded h-60 w-52 md:w-72' src={img2} alt="Shoes" /></figure>
                            </PhotoView>
                        </PhotoProvider>
                        <PhotoProvider>
                            <PhotoView src={img3}>
                                <figure><img className='rounded h-60 w-52 md:w-72' src={img3} alt="Shoes" /></figure>
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTTravel;