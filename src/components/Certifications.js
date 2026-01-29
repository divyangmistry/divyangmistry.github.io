import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: '2023',
            icon: '☁️'
        },
        {
            title: 'Certified Kubernetes Administrator (CKA)',
            issuer: 'Cloud Native Computing Foundation',
            year: '2023',
            icon: '⚙️'
        },
        {
            title: 'Agile Certified Practitioner',
            issuer: 'PMI',
            year: '2022',
            icon: '📊'
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
            title: 'Google Project Management Certifications',
            description: 'Working towards Professional Project Management certification provided by Coursera',
            progress: 80,
            icon: '📚',
            category: 'Leadership'
        },
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

    const readingList = [
        'The Phoenix Project - Gene Kim',
        'Accelerate - Nicole Forsgren',
        'Site Reliability Engineering - Google'
    ];

    return (
        <section className="section" id="certifications">
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Growth & Achievements</h2>
                    <p style={{
                        margin: '0 0 3rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem'
                    }}>
                        Continuous learning and proven accomplishments define my professional journey.
                    </p>
                </div>

                <div style={{ margin: '0 auto' }}>
                    {/* Two column layout for Certifications and Achievements */}
                    <div className="grid grid-cols-2 stagger-children" style={{ marginBottom: '3rem' }}>
                        {/* Left column - Certifications */}
                        <div>
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '1.5rem'
                            }}>
                                Professional Certifications
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {/* {certifications.map((cert, index) => (
                                    <div key={index} className="card" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        background: 'var(--color-slate-50)'
                                    }}>
                                        <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{
                                                fontSize: '0.875rem',
                                                fontWeight: '700',
                                                color: 'var(--color-slate-900)',
                                                margin: '0 0 0.25rem 0'
                                            }}>
                                                {cert.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--color-slate-600)',
                                                margin: 0
                                            }}>
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: 'var(--color-primary)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {cert.year}
                                        </span>
                                    </div>
                                ))} */}
                            </div>
                        </div>

                        {/* Right column - Achievements */}
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
                    </div>

                    {/* Currently Learning Section */}
                    <div className="animate-on-scroll" style={{ marginBottom: '2rem' }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'var(--color-primary)',
                            marginBottom: '1.5rem'
                        }}>
                            Currently Learning
                        </h3>
                        <div className="grid grid-cols-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
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

                        {/* Reading List */}
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
                            {/* <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.75rem'
                            }}>
                                {readingList.map((book, index) => (
                                    <li key={index} style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-slate-700)',
                                        paddingLeft: '1.25rem',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            fontSize: '1rem'
                                        }}>
                                            📖
                                        </span>
                                        {book}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
