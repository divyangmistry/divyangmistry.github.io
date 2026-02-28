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
            title: 'Led Successful Product Launch',
            description: 'Delivered Advance Cyber Kiosk to government clients',
            year: '2023',
            icon: '🏆'
        },
        {
            title: 'Built Custom Linux Distribution',
            description: 'Architected and deployed Yocto-based systems',
            year: '2022',
            icon: '🐧'
        },
        {
            title: 'Established CI/CD Pipeline',
            description: 'Reduced deployment time by 70% with automated workflows',
            year: '2022',
            icon: '🚀'
        }
    ];

    const learning = [
        {
            title: 'Advanced Kubernetes',
            description: 'Deep diving into K8s operators, custom resources, and advanced networking',
            progress: 5,
            icon: '☸️',
            category: 'DevOps'
        },
        {
            title: 'Cyber Security Fundamentals',
            description: 'Learning the key concepts of cyber security',
            progress: 10,
            icon: '🔐',
            category: 'Security'
        }
    ];

    return (
        <section className="section" id="certifications">
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Growth &amp; Achievements</h2>
                    <p style={{
                        margin: '0 0 3rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem'
                    }}>
                        Continuous learning and proven accomplishments define my professional journey.
                    </p>
                </div>

                <div style={{ margin: '0 auto' }}>

                    {/* ── Professional Certifications ── */}
                    <div className="animate-on-scroll" style={{ marginBottom: '3rem' }}>
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
                                background: 'linear-gradient(135deg, rgba(30,58,138,0.06) 0%, rgba(59,130,246,0.06) 100%)',
                                border: '1px solid rgba(30,58,138,0.18)',
                                marginBottom: '1.5rem'
                            }}>
                                {/* Header row */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    gap: '1rem',
                                    flexWrap: 'wrap',
                                    marginBottom: '1.25rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ fontSize: '2.5rem' }}>{cert.icon}</span>
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '700',
                                                color: 'var(--color-slate-900)',
                                                margin: '0 0 0.2rem 0'
                                            }}>
                                                {cert.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.8rem',
                                                color: 'var(--color-slate-600)',
                                                margin: 0
                                            }}>
                                                {cert.issuer} · {cert.year}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Verified badge + links */}
                                    <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                        <a
                                            href={cert.credlyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View Credly Badge"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: '#ff690f',
                                                background: 'rgba(255,105,15,0.1)',
                                                border: '1px solid rgba(255,105,15,0.3)',
                                                padding: '0.375rem 0.75rem',
                                                borderRadius: '0.375rem',
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = '#ff690f';
                                                e.currentTarget.style.color = '#fff';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,105,15,0.1)';
                                                e.currentTarget.style.color = '#ff690f';
                                            }}
                                        >
                                            {/* Credly-style shield icon */}
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5l-9-4zm-1 14l-3-3 1.4-1.4 1.6 1.6 4.6-4.6L17 9l-6 6z"/>
                                            </svg>
                                            Credly Badge
                                        </a>
                                        <a
                                            href={cert.courseraUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="View Certificate on Coursera"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: 'var(--color-primary)',
                                                background: 'rgba(30,58,138,0.08)',
                                                border: '1px solid rgba(30,58,138,0.2)',
                                                padding: '0.375rem 0.75rem',
                                                borderRadius: '0.375rem',
                                                textDecoration: 'none',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'var(--color-primary)';
                                                e.currentTarget.style.color = '#fff';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(30,58,138,0.08)';
                                                e.currentTarget.style.color = 'var(--color-primary)';
                                            }}
                                        >
                                            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Certificate
                                        </a>
                                    </div>
                                </div>

                                {/* Course list */}
                                <div>
                                    <p style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: 'var(--color-slate-600)',
                                        margin: '0 0 0.75rem 0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        6-Course Specialisation
                                    </p>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                        gap: '0.5rem'
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
                                                    gap: '0.5rem',
                                                    padding: '0.5rem 0.75rem',
                                                    background: 'var(--color-bg-primary, #fff)',
                                                    border: '1px solid var(--color-slate-200)',
                                                    borderRadius: '0.375rem',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.18s ease'
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(30,58,138,0.12)';
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = 'var(--color-slate-200)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                {/* Checkmark */}
                                                <span style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(34,197,94,0.15)',
                                                    flexShrink: 0,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: '500',
                                                    color: 'var(--color-slate-800)',
                                                    lineHeight: '1.4'
                                                }}>
                                                    {course.title}
                                                </span>
                                                <svg width="10" height="10" fill="none" stroke="var(--color-slate-400)" viewBox="0 0 24 24" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Achievements + Currently Learning ── */}
                    <div className="grid grid-cols-2 stagger-children" style={{ marginBottom: '3rem' }}>

                        {/* Key Achievements */}
                        <div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '1.5rem'
                            }}>
                                Key Achievements
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="card" style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem'
                                    }}>
                                        <span style={{ fontSize: '2rem', marginTop: '0.25rem' }}>{achievement.icon}</span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'baseline',
                                                marginBottom: '0.5rem',
                                                gap: '0.5rem',
                                                flexWrap: 'wrap'
                                            }}>
                                                <h4 style={{
                                                    fontSize: '0.875rem',
                                                    fontWeight: '700',
                                                    color: 'var(--color-slate-900)',
                                                    margin: 0
                                                }}>
                                                    {achievement.title}
                                                </h4>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    color: 'var(--color-primary)',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {achievement.year}
                                                </span>
                                            </div>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--color-slate-700)',
                                                margin: 0,
                                                lineHeight: '1.6'
                                            }}>
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Currently Learning */}
                        <div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '1.5rem'
                            }}>
                                Currently Learning
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {learning.map((item, index) => (
                                    <div key={index} className="card" style={{
                                        background: 'var(--color-slate-50)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            marginBottom: '1rem'
                                        }}>
                                            <span style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                                            <div style={{ flex: 1 }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'baseline',
                                                    marginBottom: '0.5rem',
                                                    gap: '0.5rem'
                                                }}>
                                                    <h4 style={{
                                                        fontSize: '0.875rem',
                                                        fontWeight: '700',
                                                        color: 'var(--color-slate-900)',
                                                        margin: 0
                                                    }}>
                                                        {item.title}
                                                    </h4>
                                                    <span style={{
                                                        fontSize: '0.625rem',
                                                        fontWeight: '600',
                                                        color: 'var(--color-primary)',
                                                        background: 'rgba(30, 58, 138, 0.1)',
                                                        padding: '0.25rem 0.5rem',
                                                        borderRadius: '0.25rem',
                                                        whiteSpace: 'nowrap'
                                                    }}>
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <p style={{
                                                    fontSize: '0.75rem',
                                                    color: 'var(--color-slate-700)',
                                                    margin: '0 0 0.75rem 0',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {item.description}
                                                </p>

                                                {/* Progress bar */}
                                                <div>
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        marginBottom: '0.375rem'
                                                    }}>
                                                        <span style={{
                                                            fontSize: '0.625rem',
                                                            fontWeight: '600',
                                                            color: 'var(--color-slate-600)'
                                                        }}>
                                                            Progress
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.625rem',
                                                            fontWeight: '700',
                                                            color: 'var(--color-primary)'
                                                        }}>
                                                            {item.progress}%
                                                        </span>
                                                    </div>
                                                    <div style={{
                                                        height: '4px',
                                                        background: 'var(--color-slate-200)',
                                                        borderRadius: '2px',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <div style={{
                                                            height: '100%',
                                                            width: `${item.progress}%`,
                                                            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                                            borderRadius: '2px',
                                                            transition: 'width 0.6s ease'
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Reading List ── */}
                    <div className="animate-on-scroll">
                        <div className="card" style={{
                            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                            border: '1px solid rgba(30, 58, 138, 0.1)'
                        }}>
                            <h4 style={{
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Current Reading List
                            </h4>
                            <p style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-slate-700)',
                                margin: '0 0 1rem 0',
                                lineHeight: '1.6'
                            }}>
                                Explore the books and resources I'm currently reading to expand my knowledge in technology, leadership, and software engineering.
                            </p>
                            <a
                                href="https://blog.divyangmistry.com/list/reading-list"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.8125rem',
                                    fontWeight: '600',
                                    color: 'var(--color-primary)',
                                    textDecoration: 'none',
                                    padding: '0.625rem 1rem',
                                    background: 'rgba(30, 58, 138, 0.1)',
                                    borderRadius: '0.375rem',
                                    transition: 'all 0.2s ease',
                                    border: '1px solid rgba(30, 58, 138, 0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--color-primary)';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(30, 58, 138, 0.1)';
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                }}
                            >
                                <span>View My Reading List</span>
                                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
