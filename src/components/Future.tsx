
import React from 'react';
import Section from './Section';
import { TrendingUpIcon, EyeIcon } from './Icons';

const Future: React.FC = () => {
    return (
        <Section
            id="future"
            title="Future Aspirations"
            subtitle="My roadmap for professional growth and the long-term vision guiding my career."
            className="bg-white dark:bg-secondary"
        >
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft">
                    <div className="flex items-center mb-4">
                        <TrendingUpIcon className="w-8 h-8 text-accent" />
                        <h3 className="text-2xl font-bold font-heading text-secondary dark:text-background ml-3">3-Year Roadmap</h3>
                    </div>
                    <ul className="space-y-3 text-text-primary/90 dark:text-gray-300">
                        <li className="flex items-start"><span className="text-accent font-bold mr-2">›</span> Secure a challenging Full-Stack Developer role to apply and expand my skills.</li>
                        <li className="flex items-start"><span className="text-accent font-bold mr-2">›</span> Become a regular contributor to a major open-source project.</li>
                        <li className="flex items-start"><span className="text-accent font-bold mr-2">›</span> Achieve a professional cloud certification (e.g., AWS Certified Developer).</li>
                        <li className="flex items-start"><span className="text-accent font-bold mr-2">›</span> Deepen my expertise in system design and scalable architecture.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-text-primary p-8 rounded-2xl shadow-soft">
                    <div className="flex items-center mb-4">
                        <EyeIcon className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-bold font-heading text-secondary dark:text-background ml-3">5-Year Vision</h3>
                    </div>
                     <ul className="space-y-3 text-text-primary/90 dark:text-gray-300">
                        <li className="flex items-start"><span className="text-primary font-bold mr-2">›</span> Grow into a Senior Engineer or Tech Lead position, mentoring junior developers.</li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2">›</span> Specialize in a high-impact area such as cloud-native applications or MLOps.</li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2">›</span> Speak at a tech conference or lead workshops to share knowledge with the community.</li>
                        <li className="flex items-start"><span className="text-primary font-bold mr-2">›</span> Lead the architecture and development of a significant user-facing product.</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Future;