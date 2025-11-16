
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Collaboration from './components/Collaboration';
import Ethics from './components/Ethics';
import Future from './components/Future';
import Conclusion from './components/Conclusion';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            Object.values(sectionRefs.current).forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const addToRefs = (el: HTMLElement | null, id: string) => {
        if (el) {
            sectionRefs.current[id] = el;
        }
    };

    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen font-body text-text-primary bg-background dark:bg-secondary dark:text-gray-300">
                <Header activeSection={activeSection} />
                <main>
                    <div ref={(el) => addToRefs(el, 'home')}>
                        <Hero />
                    </div>
                    <div ref={(el) => addToRefs(el, 'introduction')}>
                        <Introduction />
                    </div>
                    <div ref={(el) => addToRefs(el, 'resume')}>
                        <Resume />
                    </div>
                    <div ref={(el) => addToRefs(el, 'projects')}>
                        <Projects />
                    </div>
                    <div ref={(el) => addToRefs(el, 'skills')}>
                        <Skills />
                    </div>
                    <div ref={(el) => addToRefs(el, 'collaboration')}>
                        <Collaboration />
                    </div>
                    <div ref={(el) => addToRefs(el, 'ethics')}>
                        <Ethics />
                    </div>
                    <div ref={(el) => addToRefs(el, 'future')}>
                        <Future />
                    </div>
                    <div ref={(el) => addToRefs(el, 'conclusion')}>
                        <Conclusion />
                    </div>
                    <div ref={(el) => addToRefs(el, 'testimonials')}>
                        <Testimonials />
                    </div>
                    <div ref={(el) => addToRefs(el, 'contact')}>
                        <Contact />
                    </div>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;