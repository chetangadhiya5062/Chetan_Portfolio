
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary dark:text-background mb-2">
                        {title}
                    </h2>
                    {subtitle && <p className="text-md md:text-lg text-text-primary/80 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
                </div>
                {children}
            </div>
        </section>
    );
};

export default Section;