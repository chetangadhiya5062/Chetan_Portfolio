
import React, { useState } from 'react';
import type { Project } from '../types';
import { ChevronDownIcon, CheckCircleIcon, CodeIcon, LightbulbIcon, ShieldCheckIcon, BeakerIcon } from './Icons';

interface ProjectCardProps {
    project: Project;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode;}> = ({ title, children, icon }) => (
    <div className="mb-4">
        <h4 className="flex items-center text-lg font-bold font-heading text-secondary dark:text-background mb-2">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        {children}
    </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white dark:bg-text-primary rounded-2xl shadow-soft-lg overflow-hidden transition-all duration-300">
            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold font-heading text-primary mb-2">{project.title}</h3>
                <p className="text-text-primary/80 dark:text-gray-400 leading-relaxed">{project.overview.purpose}</p>
                
                <div className={`mt-6 grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            <DetailSection title="Objectives" icon={<CheckCircleIcon className="w-5 h-5 text-accent"/>}>
                                <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300 text-sm">
                                    <li><strong>Problem:</strong> {project.overview.problem}</li>
                                    <li><strong>Goal:</strong> {project.overview.goal}</li>
                                </ul>
                            </DetailSection>

                             <DetailSection title="Technologies Used" icon={<CodeIcon className="w-5 h-5 text-accent"/>}>
                                <div className="flex flex-wrap gap-2">
                                    {project.methodology.tech.map(t => (
                                        <span key={t} className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                            </DetailSection>

                            <DetailSection title="Outcomes & Innovations" icon={<LightbulbIcon className="w-5 h-5 text-accent"/>}>
                                <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300 text-sm">
                                    {project.outcomes.innovations.map(i => <li key={i}>{i}</li>)}
                                </ul>
                            </DetailSection>

                            <DetailSection title="Challenges & Solutions" icon={<ShieldCheckIcon className="w-5 h-5 text-accent"/>}>
                                <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300 text-sm">
                                    {project.challenges.slice(0, 2).map(c => <li key={c.challenge}><strong>{c.challenge}:</strong> {c.solution}</li>)}
                                </ul>
                            </DetailSection>
                             <div className="md:col-span-2">
                                 <DetailSection title="Visuals" icon={<BeakerIcon className="w-5 h-5 text-accent"/>}>
                                    <p className="text-sm text-text-primary/90 dark:text-gray-400 mb-2">{project.visuals.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.visuals.items.map(v => (
                                           <span key={v} className="bg-gray-100 dark:bg-secondary text-gray-700 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded-full">{v}</span>
                                        ))}
                                    </div>
                                </DetailSection>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="w-full flex justify-between items-center text-left text-primary font-semibold"
                    >
                        <span>{isExpanded ? 'Show Less' : 'View Full Details'}</span>
                        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;