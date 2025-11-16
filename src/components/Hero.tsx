
import React from 'react';
import { DownloadIcon, EyeIcon } from './Icons';

const Hero: React.FC = () => {
    const submissionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <section id="home" className="min-h-screen flex items-center bg-background dark:bg-secondary">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-24">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <p className="text-primary font-medium mb-2">Alex Doe</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary dark:text-background leading-tight mb-4">
                        Final Year, B.Tech in Computer Science
                    </h1>
                    <p className="text-lg text-text-primary/90 dark:text-gray-300 mb-2">University of Technology</p>
                    <p className="text-md text-text-primary/70 dark:text-gray-400 mb-6">Submission Date: {submissionDate}</p>
                    <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-text-primary/80 dark:text-gray-300 my-6">
                        “Transforming ideas into digital solutions through curiosity, creativity, and code.”
                    </blockquote>
                    <div className="flex justify-center md:justify-start space-x-4 mt-8">
                        <a href="/resume.pdf" download className="flex items-center bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-soft-lg hover:bg-primary/90 transition-transform transform hover:scale-105 duration-300">
                            <DownloadIcon className="w-5 h-5 mr-2" />
                            Download Resume
                        </a>
                        <a href="#projects" className="flex items-center bg-white text-secondary dark:bg-text-primary dark:text-background font-semibold py-3 px-6 rounded-xl shadow-soft-lg hover:bg-gray-100 dark:hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300">
                            <EyeIcon className="w-5 h-5 mr-2" />
                            View Projects
                        </a>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl bg-gray-200 dark:bg-text-primary shadow-soft-lg overflow-hidden">
                        <img 
                            src="https://picsum.photos/400/400" 
                            alt="Alex Doe Professional Photo" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;