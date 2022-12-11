import React from 'react';
import bikroyBDImg from '../../image/bikroybd.JPG'
import img1 from '../../image/projects/bikroyBD/bikroy.png'
import img2 from '../../image/projects/bikroyBD/user.png'
import img3 from '../../image/projects/bikroyBD/signUp.png'
import imgHome from '../../image/projects/bikroyBD/homepage.png'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';



const ProjectBikroyBD = () => {
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl mb-6">
                <figure className="px-10 pt-10">
                    <img src={bikroyBDImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-left">
                    <div>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://bikroybd-8102c.web.app/">Live site | </a>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://github.com/Tauhidul-IR/bikroy-bd-12">Client site code | </a>
                        <a className='text-2xl text-red-700 font-bold' target={'_blank'} href="https://github.com/Tauhidul-IR/bikroy-bd-server-12">Server site code</a>
                    </div>
                    <h2 className="card-title text-4xl font-bold">Bikroy-BD</h2>
                    <h2 className='text-lg font-bold'><span className='text-2xl text-primary font-bold'>Project Info: </span>This is phone reselling website. Anyone can buy & sell  2nd hand phone here. This site has 3 different role . Admin panel (admin control full site.), Seller (Add/delete products) & Buyer (Buying Product ,can Payment, can delete item from order list). Use Firebase for authentication & MongoDB as database to store all data. Also use CRUD Operation.This site is also responsive in any mobile device.</h2>
                    <h3 className='text-lg font-bold'><span className='text-2xl font-bold text-primary'>Technologies: </span> React JS ,Node JS, Express JS, JWT, Tailwind, Firebase, MongoDB, React hook form, React Query, Axios, Stripe for Payment system.</h3>
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

export default ProjectBikroyBD;