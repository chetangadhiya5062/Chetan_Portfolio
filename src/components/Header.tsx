
import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#introduction', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = (href: string) => 
        `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            activeSection === href.substring(1)
                ? 'bg-primary text-white'
                : 'text-text-primary dark:text-gray-300 hover:text-primary'
        }`;

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-soft dark:bg-secondary/80' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#home" className="text-xl font-heading font-bold text-secondary dark:text-background">
                    Alex Doe
                </a>
                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className={linkClasses(link.href)}>
                            {link.label}
                        </a>
                    ))}
                    <div className="ml-4">
                        <ThemeSwitcher />
                    </div>
                </nav>
                <div className="md:hidden flex items-center">
                    <ThemeSwitcher />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary dark:text-background focus:outline-none ml-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-text-primary pb-4">
                    <nav className="flex flex-col items-center space-y-2">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={linkClasses(link.href)}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;