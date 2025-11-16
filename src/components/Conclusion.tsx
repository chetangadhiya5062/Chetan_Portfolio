
import React from 'react';
import Section from './Section';
import { CheckCircleIcon, ExclamationIcon, LightbulbIcon, ShieldExclamationIcon } from './Icons';

const SWOTItem: React.FC<{ title: string; icon: React.ReactNode; items: string[] }> = ({ title, icon, items }) => (
    <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
        <div className="flex items-center mb-3">
            {icon}
            <h4 className="text-lg font-bold font-heading text-secondary dark:text-background ml-2">{title}</h4>
        </div>
        <ul className="list-disc list-inside space-y-1 text-text-primary/90 dark:text-gray-400 text-sm">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

const Conclusion: React.FC = () => {
    return (
        <Section
            id="conclusion"
            title="Conclusion & Self-Assessment"
            subtitle="A final reflection on my journey, capabilities, and the path ahead."
        >
            <div className="max-w-4xl mx-auto bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft-lg mb-12">
                <h3 className="text-xl font-bold font-heading text-secondary dark:text-background mb-3 text-center">Self-Assessment</h3>
                <p className="text-lg leading-relaxed text-text-primary/90 dark:text-gray-300 text-center">
                    This portfolio represents the culmination of my academic and personal learning journey. It showcases not just the technical skills I've acquired, but also my growth in problem-solving, collaboration, and ethical responsibility. I am confident in my ability to build robust, user-centric applications and am eager to transition these skills into a professional setting, where I can continue to learn, contribute, and make a meaningful impact.
                </p>
            </div>

            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold font-heading text-secondary dark:text-background mb-6 text-center">SWOT Analysis</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SWOTItem 
                        title="Strengths"
                        icon={<CheckCircleIcon className="w-5 h-5 text-green-500" />}
                        items={['Strong foundation in CS fundamentals', 'Diverse hands-on project experience', 'Quick learner and highly adaptable', 'Proficient in modern web technologies']}
                    />
                    <SWOTItem 
                        title="Weaknesses"
                        icon={<ExclamationIcon className="w-5 h-5 text-yellow-500" />}
                        items={['Limited corporate-level experience', 'Tendency to over-analyze problems initially', 'Balancing depth vs. breadth of knowledge']}
                    />
                    <SWOTItem 
                        title="Opportunities"
                        icon={<LightbulbIcon className="w-5 h-5 text-blue-500" />}
                        items={['High demand for software engineers', 'Thriving open-source community', 'Continuous emergence of new technologies', 'Networking opportunities at tech events']}
                    />
                    <SWOTItem 
                        title="Threats"
                        icon={<ShieldExclamationIcon className="w-5 h-5 text-red-500" />}
                        items={['Rapidly evolving tech landscape', 'Highly competitive job market', 'Risk of skill obsolescence without continuous learning']}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Conclusion;