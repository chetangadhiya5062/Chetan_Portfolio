
import React from 'react';
import Section from './Section';
import { GlobeAltIcon, ScaleIcon } from './Icons';

const Ethics: React.FC = () => {
    return (
        <Section
            id="ethics"
            title="Global Awareness & Ethical Considerations"
            subtitle="Reflecting on the broader impact of technology and my commitment to responsible innovation."
        >
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                    <div className="flex items-center mb-3">
                        <GlobeAltIcon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold font-heading text-secondary dark:text-background ml-2">Case Study: AI Bias in Hiring</h3>
                    </div>
                    <p className="text-text-primary/80 dark:text-gray-400 mb-3">Analyzed a case where an AI recruitment tool was found to be biased against female candidates because it was trained on historical, male-dominated data. This highlighted the critical need for diverse training data and continuous auditing of AI systems to prevent the amplification of societal biases.</p>
                    <p className="italic text-text-primary/70 dark:text-gray-500">"This case study solidified my belief that technical correctness is not enough; we must actively design for fairness and equity."</p>
                </div>
                <div className="bg-white dark:bg-text-primary p-6 rounded-2xl shadow-soft">
                     <div className="flex items-center mb-3">
                        <ScaleIcon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold font-heading text-secondary dark:text-background ml-2">Ethical Dilemma: Data Privacy</h3>
                    </div>
                    <p className="text-text-primary/80 dark:text-gray-400 mb-3">Considered a scenario where a project requirement involved collecting more user data than functionally necessary for potential future features. The dilemma was balancing business goals against the ethical principle of data minimization and user privacy. My stance is to advocate for collecting only essential data, being transparent with users, and building privacy-preserving features from the start.</p>
                     <p className="italic text-text-primary/70 dark:text-gray-500">"My reflection led me to the principle of 'privacy by design,' ensuring ethical considerations are a foundational part of the development process, not an afterthought."</p>
                </div>
            </div>
        </Section>
    );
};

export default Ethics;