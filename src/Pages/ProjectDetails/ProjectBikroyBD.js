import React from 'react';
import bikroyBDImg from '../../image/bikroybd.JPG'
import img1 from '../../image/projects/bikroy.png'
import img2 from '../../image/projects/user.png'
import img3 from '../../image/projects/seller.png'
import imgHome from '../../image/projects/homepage.png'
const ProjectBikroyBD = () => {
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl mb-6">
                <figure className="px-10 pt-10">
                    <img src={bikroyBDImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-left">
                    <div>
                        <a className='text-2xl text-red-700 font-bold' href="">Live site | </a>
                        <a className='text-2xl text-red-700 font-bold' href="">Client site code | </a>
                        <a className='text-2xl text-red-700 font-bold' href="">Server site code</a>
                    </div>
                    <h2 className="card-title text-4xl font-bold">Bikroy-BD</h2>
                    <h2 className='text-lg font-bold'><span className='text-2xl text-primary font-bold'>Project Summary: </span>This is phone reselling website. Anyone can buy a 2nd hand phone here. This site has 3 different role . Admin panel (admin control full site), Seller (Add/delete product) & Buyer (Buying Product ,can Payment, can delete item from order list). Use Firebase for authentication & MongoDB as database to store all data. Also use CRUD Operation.</h2>
                    <h3 className='text-lg font-bold'><span className='text-2xl font-bold text-primary'>Technologies: </span> React JS ,Node JS, Express JS, JWT, Tailwind, Firebase, MongoDB, React hook form, React Query, Axios, Stripe for Payment system.</h3>
                </div>
                <div>
                    <h3 className='text-4xl font-bold my-7'>Website ScreenShots</h3>
                    <div className='flex justify-center flex-wrap mb-6'>
                        <img className='w-72' src={imgHome} alt="" />
                        <img className='w-72' src={img1} alt="" />
                        <img className='  h-56 w-72' src={img2} alt="" />
                        <img className='  h-56 w-72' src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectBikroyBD;