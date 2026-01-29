import React from 'react';

const ThemeToggle = ({ currentTheme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                border: '2px solid var(--color-border)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-xl)',
                transition: 'all var(--transition-base)',
                zIndex: 1000,
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
                e.currentTarget.style.boxShadow = '0 25px 30px -6px rgba(0, 0, 0, 0.2), 0 12px 12px -6px rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            }}
        >
            {/* Sun Icon (Light Mode) */}
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                    position: 'absolute',
                    transition: 'all 0.4s ease-in-out',
                    opacity: currentTheme === 'light' ? 1 : 0,
                    transform: currentTheme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                    position: 'absolute',
                    transition: 'all 0.4s ease-in-out',
                    opacity: currentTheme === 'dark' ? 1 : 0,
                    transform: currentTheme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>

            {/* Tooltip on hover */}
            <span
                style={{
                    position: 'absolute',
                    right: '70px',
                    background: 'var(--color-card-bg)',
                    color: 'var(--color-text-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--color-border)',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity var(--transition-base)',
                }}
                className="theme-toggle-tooltip"
            >
                {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
            </span>

            <style jsx>{`
        button:hover .theme-toggle-tooltip {
          opacity: 1;
        }
      `}</style>
        </button>
    );
};

export default ThemeToggle;
