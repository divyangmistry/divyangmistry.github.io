import React from 'react';

const CurrentlyLearning = () => {
    const learning = [
        {
            title: 'Advanced Kubernetes',
            description: 'Deep diving into K8s operators, custom resources, and advanced networking',
            progress: 65,
            icon: '☸️',
            category: 'DevOps'
        },
        {
            title: 'Rust Programming',
            description: 'Exploring systems programming and performance optimization',
            progress: 40,
            icon: '🦀',
            category: 'Development'
        },
        {
            title: 'Product Management Certifications',
            description: 'Working towards Professional Scrum Product Owner (PSPO) certification',
            progress: 80,
            icon: '📚',
            category: 'Leadership'
        },
        {
            title: 'Cloud Security Best Practices',
            description: 'AWS Security Specialty and Zero Trust Architecture',
            progress: 55,
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
        <section className="section" id="learning" style={{ background: 'var(--color-slate-50)' }}>
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Currently Learning</h2>
                    <p style={{
                        maxWidth: '800px',
                        margin: '0 0 2.5rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem'
                    }}>
                        Continuous learning is at the core of my professional growth. Here's what I'm currently exploring and developing.
                    </p>
                </div>

                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="grid grid-cols-2 stagger-children" style={{ marginBottom: '3rem' }}>
                        {learning.map((item, index) => (
                            <div key={index} className="card" style={{
                                background: 'white'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    marginBottom: '1rem'
                                }}>
                                    <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            marginBottom: '0.5rem',
                                            gap: '0.5rem'
                                        }}>
                                            <h3 style={{
                                                fontSize: '1rem',
                                                fontWeight: '700',
                                                color: 'var(--color-slate-900)',
                                                margin: 0
                                            }}>
                                                {item.title}
                                            </h3>
                                            <span style={{
                                                fontSize: '0.75rem',
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
                                            fontSize: '0.875rem',
                                            color: 'var(--color-slate-700)',
                                            margin: '0 0 1rem 0',
                                            lineHeight: '1.6'
                                        }}>
                                            {item.description}
                                        </p>

                                        {/* Progress bar */}
                                        <div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '0.5rem'
                                            }}>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    color: 'var(--color-slate-600)'
                                                }}>
                                                    Progress
                                                </span>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: '700',
                                                    color: 'var(--color-primary)'
                                                }}>
                                                    {item.progress}%
                                                </span>
                                            </div>
                                            <div style={{
                                                height: '6px',
                                                background: 'var(--color-slate-200)',
                                                borderRadius: '3px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    height: '100%',
                                                    width: `${item.progress}%`,
                                                    background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                                    borderRadius: '3px',
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
                    <div className="animate-on-scroll">
                        <div className="card" style={{
                            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                            border: '1px solid rgba(30, 58, 138, 0.1)'
                        }}>
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Current Reading List
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                {readingList.map((book, index) => (
                                    <li key={index} style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--color-slate-700)',
                                        paddingLeft: '1.5rem',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--color-primary)',
                                            fontWeight: '700'
                                        }}>
                                            📖
                                        </span>
                                        {book}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentlyLearning;
