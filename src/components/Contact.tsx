
import React from 'react';
import Section from './Section';
import { MailIcon, LinkedInIcon, GithubIcon, TwitterIcon } from './Icons';

const Contact: React.FC = () => {
    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!"
        >
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft h-full">
                        <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MailIcon className="w-6 h-6 text-primary" />
                                <a href="mailto:alex.doe@university.edu" className="ml-3 text-text-primary/90 dark:text-gray-300 hover:text-primary">alex.doe@university.edu</a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mt-6 mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><GithubIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-primary transition-colors"><TwitterIcon className="w-6 h-6" /></a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary/80 dark:text-gray-400 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary bg-white dark:bg-secondary dark:border-gray-600 dark:text-background" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary/80 dark:text-gray-400 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary bg-white dark:bg-secondary dark:border-gray-600 dark:text-background" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary/80 dark:text-gray-400 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary bg-white dark:bg-secondary dark:border-gray-600 dark:text-background"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;