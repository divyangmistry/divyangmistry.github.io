import React from 'react';

const Certifications = () => {

    const certifications = [
        {
            title: 'Google Project Management Certificate',
            issuer: 'Google · Coursera',
            year: '2026',
            icon: '🏅',
            credlyUrl: 'https://www.credly.com/badges/42543871-17cf-4f91-89d9-e8961c7dab26',
            courseraUrl: 'https://coursera.org/share/8ef28ae45a9f2024ade794d33ec09f57',
            isFeatured: true,
            courses: [
                {
                    title: 'Foundations of Project Management',
                    url: 'https://coursera.org/share/cad77ebe6ed6216448972365da84c921'
                },
                {
                    title: 'Project Initiation: Starting a Successful Project',
                    url: 'https://coursera.org/share/7eb991bf29b660197a2fe65827d7e0b2'
                },
                {
                    title: 'Project Planning: Putting It All Together',
                    url: 'https://coursera.org/share/9ee0164dd9bc7d21fd3d9c6c53854659'
                },
                {
                    title: 'Project Execution: Running the Project',
                    url: 'https://coursera.org/share/b89d3086920e809f066055ddbb8c04c8'
                },
                {
                    title: 'Agile Project Management',
                    url: 'https://coursera.org/share/f143d7d73069dcddd09f13924238c714'
                },
                {
                    title: 'Capstone: Applying Project Management in the Real World',
                    url: 'https://coursera.org/share/11446157ee88f0c280b85cdf79fd0169'
                }
            ]
        }
    ];

    const achievements = [
        {
            title: 'Independent AI Agent Consultancy',
            description: 'Successfully launched consultancy services focusing on MCP and GenAI automation.',
            year: '2026',
            icon: '🚀'
        },
        {
            title: 'Cyber Kiosk Product Delivery',
            description: 'Delivered hardware-integrated forensic sanitization kiosks to high-security clients.',
            year: '2025',
            icon: '🏆'
        },
        {
            title: 'OT SIEM "Dorje" Development',
            description: 'Lead engineer for industrial cybersecurity traffic monitoring system.',
            year: '2023',
            icon: '🛡️'
        }
    ];

    const learning = [
        {
            title: 'Advanced Model Context Protocol (MCP)',
            description: 'Deep diving into building complex MCP servers and client integrations for agentic workflows.',
            progress: 85,
            icon: '🔌',
            category: 'AI Ecosystem'
        },
        {
            title: 'Google GenAI SDK Mastery',
            description: 'Optimizing LLM orchestration and RAG pipelines for superior agent performance.',
            progress: 75,
            icon: '🧠',
            category: 'GenAI'
        }
    ];

    return (
        <section className="section" id="certifications">
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Growth & Achievements</h2>
                    <p style={{
                        margin: '0 0 3rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                    }}>
                        Continuous learning and technical innovation are the foundation of my career trajectory.
                    </p>
                </div>

                <div style={{ margin: '0 auto' }}>
                    <div className="animate-on-scroll" style={{ marginBottom: '4rem' }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            marginBottom: '1.5rem'
                        }}>
                            Professional Certifications
                        </h3>

                        {certifications.map((cert, index) => (
                            <div key={index} className="card" style={{
                                background: 'linear-gradient(135deg, rgba(30,58,138,0.04) 0%, rgba(59,130,246,0.04) 100%)',
                                border: '1px solid var(--border-color)',
                                padding: '2rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '1.5rem',
                                    flexWrap: 'wrap',
                                    marginBottom: '2rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <div style={{
                                            fontSize: '3rem',
                                            background: 'white',
                                            width: '80px',
                                            height: '80px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '1rem',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                                        }}>{cert.icon}</div>
                                        <div>
                                            <h4 style={{
                                                fontSize: '1.125rem',
                                                fontWeight: '800',
                                                color: 'var(--color-slate-900)',
                                                margin: '0 0 0.35rem 0'
                                            }}>
                                                {cert.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                color: 'var(--color-primary)',
                                                margin: 0
                                            }}>
                                                {cert.issuer} · {cert.year}
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        <a
                                            href={cert.credlyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline"
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '0.5rem 1rem',
                                                display: 'flex',
                                                gap: '0.5rem',
                                                alignItems: 'center',
                                                color: 'var(--color-slate-900)',
                                                background: 'var(--color-bg-primary)',
                                                border: '1px solid var(--border-color)'
                                            }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5l-9-4zm-1 14l-3-3 1.4-1.4 1.6 1.6 4.6-4.6L17 9l-6 6z" />
                                            </svg>
                                            Badge
                                        </a>
                                        <a
                                            href={cert.courseraUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                            style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
                                        >
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <p style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        color: 'var(--color-slate-500)',
                                        margin: '0 0 1rem 0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        Specialization Tracks
                                    </p>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                        gap: '0.75rem'
                                    }}>
                                        {cert.courses.map((course, ci) => (
                                            <a
                                                key={ci}
                                                href={course.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.75rem',
                                                    padding: '0.75rem 1rem',
                                                    background: 'var(--color-bg-primary)',
                                                    border: '1px solid var(--border-color)',
                                                    borderRadius: '0.75rem',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500',
                                                    color: 'var(--color-slate-800)'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {course.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 stagger-children">
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                Key Achievements
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                        <span style={{ fontSize: '2rem' }}>{achievement.icon}</span>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                                                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-slate-900)', margin: 0 }}>
                                                    {achievement.title}
                                                </h4>
                                                <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--color-primary)' }}>{achievement.year}</span>
                                            </div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-600)', margin: 0, lineHeight: '1.5' }}>
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                Currently Learning
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {learning.map((item, index) => (
                                    <div key={index} className="card" style={{ background: 'var(--color-slate-50)' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-slate-900)', margin: 0 }}>{item.title}</h4>
                                                    <span style={{ fontSize: '0.6rem', fontWeight: '700', background: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{item.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--color-slate-600)', marginBottom: '1rem', lineHeight: '1.5' }}>{item.description}</p>
                                        <div style={{ height: '4px', background: 'var(--color-slate-200)', borderRadius: '2px', overflow: 'hidden' }}>
                                            <div style={{ height: '100%', width: `${item.progress}%`, background: 'var(--color-primary)', transition: 'width 1s ease' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
