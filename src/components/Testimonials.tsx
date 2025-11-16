
import React from 'react';
import Section from './Section';
import { ChatAlt2Icon } from './Icons';

const Testimonials: React.FC = () => {
    return (
        <Section
            id="testimonials"
            title="Testimonials"
            subtitle="What my professors and mentors say about my work and character."
            className="bg-white dark:bg-secondary"
        >
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft text-center">
                    <ChatAlt2Icon className="w-8 h-8 text-primary mx-auto mb-4"/>
                    <blockquote className="text-lg italic text-text-primary/90 dark:text-gray-300 mb-4">
                        “Alex possesses a rare combination of sharp analytical skills and creative problem-solving. Their dedication to understanding complex topics deeply was evident in every project they undertook in my class.”
                    </blockquote>
                    <p className="font-bold text-secondary dark:text-background">Professor Jane Smith</p>
                    <p className="text-sm text-text-primary/70 dark:text-gray-500">Department of Computer Science</p>
                </div>
                <div className="bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft text-center">
                    <ChatAlt2Icon className="w-8 h-8 text-primary mx-auto mb-4"/>
                    <blockquote className="text-lg italic text-text-primary/90 dark:text-gray-300 mb-4">
                        “Working with Alex during the hackathon was a pleasure. They are a natural leader who excels at teamwork and is always proactive in tackling challenges. Their positive attitude is infectious and boosts team morale.”
                    </blockquote>
                    <p className="font-bold text-secondary dark:text-background">John Davis</p>
                    <p className="text-sm text-text-primary/70 dark:text-gray-500">Senior Software Engineer & Hackathon Mentor</p>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;