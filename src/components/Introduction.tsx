
import React from 'react';
import Section from './Section';
import { LightbulbIcon, CheckCircleIcon, RocketIcon } from './Icons';

const timelineEvents = [
    { title: 'Curiosity', description: 'Exploring new technologies and asking "why" to understand concepts deeply.', icon: <LightbulbIcon className="w-6 h-6 text-white"/> },
    { title: 'Consistency', description: 'Daily practice and incremental improvements to build robust and reliable skills.', icon: <CheckCircleIcon className="w-6 h-6 text-white"/> },
    { title: 'Creativity', description: 'Applying knowledge in novel ways to solve complex problems and build unique solutions.', icon: <RocketIcon className="w-6 h-6 text-white"/> },
];

const Introduction: React.FC = () => {
    return (
        <Section 
            id="introduction" 
            title="Introduction & Learning Philosophy"
            subtitle="My approach to continuous growth and mastery in the ever-evolving world of technology."
            className="bg-white dark:bg-secondary"
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft text-center mb-12">
                    <p className="text-lg leading-relaxed text-text-primary/90 dark:text-gray-300">
                        “I believe learning is a continuous process driven by curiosity. My academic journey revolves around understanding concepts deeply, experimenting, practicing, failing, improving, and finally mastering. I prioritize hands-on learning, project-based exploration, and real-world application of knowledge. My philosophy follows three pillars: curiosity, consistency, and creativity.”
                    </p>
                </div>
                
                <div className="relative">
                    <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-5/12"></div>
                            <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg">
                                {event.icon}
                            </div>
                            <div className="md:w-5/12 bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                                <h3 className="text-xl font-heading font-bold text-secondary dark:text-background mb-2">{event.title}</h3>
                                <p className="text-text-primary/80 dark:text-gray-400">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Introduction;