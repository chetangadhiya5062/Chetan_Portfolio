
import React from 'react';
import Section from './Section';
import { BriefcaseIcon, AcademicCapIcon, CodeIcon, UsersIcon, SparklesIcon, PuzzleIcon, LanguageIcon, StarIcon } from './Icons';

const ResumeSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft mb-8">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-heading font-bold text-secondary dark:text-background ml-3">{title}</h3>
        </div>
        <div className="pl-9">{children}</div>
    </div>
);

const Resume: React.FC = () => {
    return (
        <Section
            id="resume"
            title="My Resume"
            subtitle="A summary of my academic qualifications, technical skills, and professional experience."
        >
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div>
                    <ResumeSection title="Education" icon={<AcademicCapIcon className="w-6 h-6 text-primary" />}>
                        <h4 className="font-bold text-secondary dark:text-background">B.Tech in Computer Science</h4>
                        <p className="text-sm text-text-primary/80 dark:text-gray-400">University of Technology | 2021 - 2025</p>
                        <p className="mt-1 text-text-primary/90 dark:text-gray-300">Relevant Coursework: Data Structures, Algorithms, AI/ML, Cybersecurity, Cloud Computing.</p>
                    </ResumeSection>

                    <ResumeSection title="Technical Skills" icon={<CodeIcon className="w-6 h-6 text-primary" />}>
                        <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300">
                            <li><span className="font-semibold text-secondary dark:text-background">Languages:</span> TypeScript, Python, JavaScript, Java, SQL</li>
                            <li><span className="font-semibold text-secondary dark:text-background">Frameworks:</span> React, Node.js, Express, Flask, Tailwind CSS</li>
                            <li><span className="font-semibold text-secondary dark:text-background">Databases:</span> MySQL, PostgreSQL, MongoDB, Firebase</li>
                            <li><span className="font-semibold text-secondary dark:text-background">Cloud:</span> AWS (EC2, S3), Docker, CI/CD with GitHub Actions</li>
                        </ul>
                    </ResumeSection>
                    
                    <ResumeSection title="Tools" icon={<PuzzleIcon className="w-6 h-6 text-primary" />}>
                       <div className="flex flex-wrap gap-2">
                            {['Git', 'Jira', 'Figma', 'VS Code', 'Postman', 'Webpack'].map(tool => (
                                <span key={tool} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">{tool}</span>
                            ))}
                        </div>
                    </ResumeSection>
                </div>
                <div>
                    <ResumeSection title="Soft Skills" icon={<UsersIcon className="w-6 h-6 text-primary" />}>
                        <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300">
                            <li>Problem Solving & Critical Thinking</li>
                            <li>Team Collaboration & Leadership</li>
                            <li>Effective Communication</li>
                            <li>Adaptability & Time Management</li>
                        </ul>
                    </ResumeSection>
                    
                    <ResumeSection title="Certifications" icon={<SparklesIcon className="w-6 h-6 text-primary" />}>
                         <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300">
                            <li>Certified React Developer - Coursera</li>
                            <li>Python for Data Science - edX</li>
                        </ul>
                    </ResumeSection>

                    <ResumeSection title="Achievements" icon={<StarIcon className="w-6 h-6 text-primary" />}>
                        <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300">
                            <li>Winner, University Hackathon 2023</li>
                            <li>Dean's List for Academic Excellence (4 Semesters)</li>
                        </ul>
                    </ResumeSection>

                    <ResumeSection title="Languages" icon={<LanguageIcon className="w-6 h-6 text-primary" />}>
                        <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-300">
                            <li>English (Fluent)</li>
                            <li>Spanish (Intermediate)</li>
                        </ul>
                    </ResumeSection>
                </div>
            </div>
        </Section>
    );
};

export default Resume;