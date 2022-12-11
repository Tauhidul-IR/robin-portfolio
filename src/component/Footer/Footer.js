import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from '../../image/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <div>
                    <img className='w-20 h-20 rounded-full' src={img} alt="" />
                    <p className="font-bold text-xl">
                        Tauhidul Islam Robin<br />Front End Web Developer
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a className='' href='https://www.facebook.com/' target={'_blank'}><FaFacebook className='text-3xl'></FaFacebook></a>
                        <Link className='' href='#' target={'_blank'}><FaLinkedin className='text-3xl'></FaLinkedin></Link>
                        <Link className='' href='#' target={'_blank'}><FaTwitter className='text-3xl'></FaTwitter></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;