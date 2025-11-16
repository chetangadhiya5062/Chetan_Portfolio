
import React from 'react';
import { useTheme } from '../ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-text-primary dark:text-background hover:bg-gray-200 dark:hover:bg-text-primary transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
    );
};

export default ThemeSwitcher;