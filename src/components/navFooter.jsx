import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#213b82] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between pl-5">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-white md:pr-20 md:text-sm">Our platform offers a flexible and convenient environment for individuals to engage in one-on-one online work opportunities. Workers can access daily wage jobs from anywhere in the world, while employers can find skilled individuals to meet their staffing needs. </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#home" className="text-white">Home</a></li>
                            <li className="mb-2"><a href="#services" className="text-white">Services</a></li>
                            <li className="mb-2"><a href="#about" className="text-white">About</a></li>
                            <li className="mb-2"><a href="#contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <ul>
                            <li className="mb-2"><a href="#facebook" className="text-white">Facebook</a></li>
                            <li className="mb-2"><a href="#twitter" className="text-white">Twitter</a></li>
                            <li className="mb-2"><a href="#instagram" className="text-white">Instagram</a></li>
                            <li className="mb-2"><a href="#linkedin" className="text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-white">&copy; 2024 MITMAT E-Connect. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
