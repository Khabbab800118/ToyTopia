import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10">
            <nav className='flex flex-col gap-3 items-center'>
                <h6 className="footer-title">Find Us On</h6>
                <a href="https://www.facebook.com/" target='_blank'><FaFacebook className='text-3xl'></FaFacebook></a>
                <a href="https://www.google.com/" target='_blank'><FaGoogle className='text-3xl'></FaGoogle></a>
                <a href="https://www.instagram.com/" target='_blank'><FaInstagram className='text-3xl'></FaInstagram></a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;