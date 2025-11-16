
import React from 'react';
import { LinkedInIcon, GithubIcon, TwitterIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Alex Doe. All Rights Reserved.</p>
                    <p className="text-xs text-gray-400 mt-1">Designed & Built with Passion</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;