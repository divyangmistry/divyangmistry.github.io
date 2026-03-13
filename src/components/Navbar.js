import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/#contact' },
    ];

    const isActive = (path) => {
        if (path.startsWith('/#')) {
            return false; // Anchor links are special
        }
        return router.pathname === path;
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            transition: 'all var(--transition-base)',
            padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
            background: isScrolled ? 'rgba(var(--color-bg-primary-rgb), 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Link href="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                }}>
                    DM<span style={{ color: 'var(--color-text-primary)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.path}
                            style={{
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                transition: 'color var(--transition-base)',
                                textDecoration: 'none',
                                position: 'relative',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => {
                                if (!isActive(link.path)) {
                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                }
                            }}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '2px',
                                }} />
                            )}
                        </Link>
                    ))}
                    <Link href="/services" className="btn btn-primary" style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.875rem',
                    }}>
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)',
                    }}
                    className="mobile-toggle"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--color-bg-primary)',
                    padding: '1.5rem',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-lg)',
                }}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-primary)',
                                textDecoration: 'none',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}

            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
                :global(:root) {
                    --color-bg-primary-rgb: 255, 255, 255;
                }
                :global([data-theme="dark"]) {
                    --color-bg-primary-rgb: 15, 23, 42;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
