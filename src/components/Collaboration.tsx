
import React from 'react';
import Section from './Section';
import { UsersIcon, ShieldCheckIcon, ChatAlt2Icon } from './Icons';

const Collaboration: React.FC = () => {
    return (
        <Section
            id="collaboration"
            title="Collaboration & Leadership"
            subtitle="Experience in team environments, taking initiative, and fostering a positive and productive workflow."
            className="bg-white dark:bg-secondary"
        >
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <UsersIcon className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-2">Project Lead</h3>
                    <p className="text-text-primary/80 dark:text-gray-400">Led a team of four during the University Hackathon 2023. Responsibilities included task delegation, managing timelines using Agile principles, and serving as the final decision-maker on the tech stack.</p>
                </div>
                <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                            <ShieldCheckIcon className="w-8 h-8 text-accent" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-2">Conflict Resolution</h3>
                    <p className="text-text-primary/80 dark:text-gray-400">Successfully mediated a technical disagreement on database choice by facilitating a discussion focused on project requirements, leading to a consensus that balanced performance and development speed.</p>
                </div>
                <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                     <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <ChatAlt2Icon className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-2">Team Dynamics</h3>
                    <p className="text-text-primary/80 dark:text-gray-400">Fostered an inclusive environment through regular stand-ups and open communication channels. Encouraged pair programming and knowledge sharing, resulting in a cohesive and high-performing team dynamic.</p>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;