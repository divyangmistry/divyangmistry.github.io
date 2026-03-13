import Link from 'next/link';

const Hero = () => {
    return (
        <section className="section" id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--color-bg-primary)',
            paddingTop: '80px' // Space for navbar
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap-reverse',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }} className="animate-on-scroll">

                    <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
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
                            Agentic AI Developer | Lead Software Engineer
                        </h2>

                        <p style={{
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: 'white',
                            background: 'var(--color-primary)',
                            display: 'inline-block',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            marginBottom: '1.5rem',
                            letterSpacing: '0.03em'
                        }}>
                            Open to Full-time · Part-time · Contract · Consultancy
                        </p>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--color-slate-600)',
                            marginBottom: '2.5rem',
                            maxWidth: '700px',
                            lineHeight: '1.8'
                        }}>
                            Agentic AI Developer & Lead Software Engineer with over 7 years of experience driving the full product lifecycle of complex cybersecurity, SaaS, and AI-powered solutions. Specialized in building autonomous AI agents using <strong>Google GenAI SDK</strong> and <strong>Model Context Protocol (MCP)</strong> to automate enterprise workflows. Expert in LLM orchestration, RAG pipelines (LangChain), Proxmox virtualization, and security hardening.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap'
                        }}>
                            <Link href="/services" className="btn btn-primary">
                                <span style={{ marginRight: '0.5rem' }}>Explore Services</span>
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            <a href="#contact" className="btn btn-outline" style={{ border: 'none' }}>
                                <span style={{ marginRight: '0.5rem' }}>Get In Touch</span>
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div style={{
                        flex: '0 0 320px',
                        height: '320px',
                        position: 'relative',
                        borderRadius: '2rem',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: '8px solid var(--color-bg-secondary)'
                    }}>
                        <img
                            src="files/divyang.jpg"
                            alt="Divyang Mistry"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'contrast(1.05)'
                            }}
                        />
                    </div>
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
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
