import React from 'react';

const Hero = () => {
    return (
        <section className="section" id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--color-bg-primary)'
        }}>
            {/* background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-tertiary) 100%)' */}
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="animate-on-scroll">
                    <p style={{
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: 'var(--color-primary)',
                        marginBottom: '1rem'
                    }}>
                        Hello, I'm
                    </p>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                        fontWeight: '800',
                        color: 'var(--color-slate-900)',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Divyang Mistry
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(1.25rem, 4vw, 1.875rem)',
                        fontWeight: '600',
                        color: 'var(--color-primary)',
                        marginBottom: '0.5rem'
                    }}>
                        Lead Product Engineer & DevOps Architect
                    </h2>

                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-slate-600)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Product Engineer driving cybersecurity and SaaS solutions with 6+ years of experience in DevOps, infrastructure, and product leadership.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#contact" className="btn btn-primary">
                            <span style={{ marginRight: '0.5rem' }}>Get In Touch</span>
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a href="files/Divyang_Resume_2026.pdf" download className="btn btn-outline">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center'
                    }}>
                        <a
                            href="https://github.com/divyangmistry"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--color-slate-600)',
                                transition: 'color var(--transition-base)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-600)'}
                        >
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:divyangmistry7777@gmail.com"
                            style={{
                                color: 'var(--color-slate-600)',
                                transition: 'color var(--transition-base)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-600)'}
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/divyang-mistry-b48826a9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--color-text-primary)',
                                transition: 'opacity var(--transition-base)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/root_node.lens/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--color-slate-600)',
                                transition: 'color var(--transition-base)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-600)'}
                        >
                            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                    <div style={{ marginTop: '4rem' }}>
                        <a href="#about"
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: 'var(--color-slate-600)',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                textDecoration: 'none',
                                transition: 'color var(--transition-base)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-slate-600)'}
                        >
                            <span style={{ marginBottom: '0.5rem' }}>Scroll to explore</span>
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animation: 'bounce 2s infinite' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
