import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="App">
            <button
                onClick={toggleDarkMode}
                className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Dashboard />
        </div>
    );
}

export default App;