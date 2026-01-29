import React, { useState } from 'react';

const CareerTimeline = () => {
    const [expandedCards, setExpandedCards] = useState([0]); // Current role expanded by default

    const timeline = [
        {
            year: '2023 - Present',
            title: 'Lead Product Engineer (Acting TPM) & DevOps Architect',
            company: 'Arishti Info Labs',
            type: 'current',
            highlights: [
                { label: 'Product Strategy & Execution:', text: 'Direct end-to-end product strategy for cybersecurity portfolio including "Advance Cyber Kiosk" and "Dorje" OT SIEM, ensuring alignment with market demands and business goals.' },
                { label: 'Infrastructure & Security:', text: 'Configure enterprise-grade routers, firewalls, and OpenSource VPN solutions; implement Snort-based intrusion detection and system hardening protocols.' },
                { label: 'Cross-Functional Leadership:', text: 'Lead and synchronize efforts across DevOps, Network Administration, Operations, and Customer Success teams; conduct Angular and .NET code reviews.' },
                { label: 'R&D & Custom Linux:', text: 'Spearheaded R&D of security products; developed custom Linux distributions using Yocto for embedded cybersecurity appliances.' }
            ]
        },
        {
            year: '2021 - 2023',
            title: 'Senior Software Engineer & Product Lead',
            company: 'Arishti Info Labs',
            type: 'milestone',
            highlights: [
                { label: 'DevOps Architecture:', text: 'Design and implement enterprise DevOps infrastructure using Proxmox virtualization, QEMU/KVM, and automated CI/CD pipelines with Jenkins and Docker orchestration.' },
                { label: 'Product Delivery (Cyber Kiosk):', text: 'Managed full lifecycle of hardware-integrated forensic kiosk for sanitizing mobile/storage devices with frontend UX and backend logic.' },
                { label: 'Product Delivery (Dorje SIEM):', text: 'Led engineering of OT traffic monitoring tool with backend logic and frontend asset detection for PLC and HMI management.' },
                { label: 'CI/CD Implementation:', text: 'Planned and created CI/CD pipelines for automated testing, building, and deployment of security applications.' }
            ]
        },
        {
            year: '2020 - 2021',
            title: 'Software Developer',
            company: 'TechAvidus',
            type: 'regular',
            highlights: [
                { text: 'Collaborated on scalable Node.js and Angular applications for enterprise clients with focus on performance optimization.' },
                { text: 'Provided technical mentorship to junior developers, improving team velocity and establishing code quality standards.' }
            ]
        },
        {
            year: '2019 - 2020',
            title: 'Frontend Developer',
            company: 'Nimblechapps',
            type: 'regular',
            highlights: [
                { text: 'Executed frontend development for diverse client projects using React and Node.js with modern tooling and best practices.' }
            ]
        },
        {
            year: '2018 - 2019',
            title: 'Frontend Developer',
            company: 'Webelight Solutions',
            type: 'start',
            highlights: [
                { text: 'Developed responsive web interfaces and optimized application performance using Angular frameworks for various client projects.' }
            ]
        }
    ];

    const toggleCard = (index) => {
        setExpandedCards(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="section" id="timeline">
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Career Journey</h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: '30px',
                        bottom: '30px',
                        width: '2px',
                        background: 'var(--color-slate-200)',
                        zIndex: 0
                    }} />

                    <div className="stagger-children">
                        {timeline.map((item, index) => {
                            const isExpanded = expandedCards.includes(index);

                            return (
                                <div key={index} style={{
                                    position: 'relative',
                                    paddingLeft: '60px',
                                    marginBottom: index === timeline.length - 1 ? 0 : '2rem'
                                }}>
                                    {/* Timeline dot */}
                                    <div style={{
                                        position: 'absolute',
                                        left: '11px',
                                        top: '8px',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: item.type === 'current'
                                            ? 'var(--color-primary)'
                                            : item.type === 'milestone'
                                                ? 'var(--color-primary-light)'
                                                : item.type === 'start'
                                                    ? 'var(--color-slate-400)'
                                                    : 'white',
                                        border: `3px solid ${item.type === 'current'
                                            ? 'var(--color-primary)'
                                            : item.type === 'milestone'
                                                ? 'var(--color-primary-light)'
                                                : 'var(--color-slate-300)'
                                            }`,
                                        zIndex: 1,
                                        boxShadow: '0 0 0 4px var(--color-bg-primary)'
                                    }} />

                                    <div className="card" style={{
                                        background: item.type === 'current'
                                            ? 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)'
                                            : 'var(--color-card-bg)',
                                        border: item.type === 'current'
                                            ? '2px solid var(--color-primary)'
                                            : '1px solid var(--border-color)',
                                        cursor: 'pointer'
                                    }}>
                                        {/* Header - Always visible */}
                                        <div
                                            onClick={() => toggleCard(index)}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                gap: '1rem'
                                            }}
                                        >
                                            <div style={{ flex: 1 }}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'baseline',
                                                    marginBottom: '0.5rem',
                                                    flexWrap: 'wrap',
                                                    gap: '0.5rem'
                                                }}>
                                                    <span style={{
                                                        fontSize: '0.875rem',
                                                        fontWeight: '700',
                                                        color: item.type === 'current' ? 'var(--color-primary)' : 'var(--color-slate-500)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em'
                                                    }}>
                                                        {item.year}
                                                    </span>
                                                    {item.type === 'current' && (
                                                        <span style={{
                                                            fontSize: '0.75rem',
                                                            fontWeight: '600',
                                                            color: 'white',
                                                            background: 'var(--color-primary)',
                                                            padding: '0.25rem 0.75rem',
                                                            borderRadius: '1rem'
                                                        }}>
                                                            Current
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 style={{
                                                    fontSize: '1.125rem',
                                                    fontWeight: '700',
                                                    color: 'var(--color-slate-900)',
                                                    margin: '0 0 0.25rem 0'
                                                }}>
                                                    {item.title}
                                                </h3>

                                                <p style={{
                                                    fontSize: '1rem',
                                                    fontWeight: '600',
                                                    color: 'var(--color-primary)',
                                                    margin: 0
                                                }}>
                                                    {item.company}
                                                </p>
                                            </div>

                                            {/* Expand/Collapse Icon */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleCard(index);
                                                }}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: '0.5rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'var(--color-primary)',
                                                    transition: 'all var(--transition-base)',
                                                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                            >
                                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Expandable Content */}
                                        <div style={{
                                            maxHeight: isExpanded ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out, margin-top 0.4s ease-in-out',
                                            marginTop: isExpanded ? '1rem' : '0'
                                        }}>
                                            <ul className="list-disc" style={{ margin: 0, paddingLeft: '1.5rem' }}>
                                                {item.highlights.map((highlight, hIndex) => (
                                                    <li key={hIndex} style={{
                                                        fontSize: '0.875rem',
                                                        color: 'var(--color-slate-700)',
                                                        marginBottom: '0.5rem',
                                                        lineHeight: '1.6'
                                                    }}>
                                                        {highlight.label && (
                                                            <strong style={{ color: 'var(--color-slate-800)' }}>
                                                                {highlight.label}{' '}
                                                            </strong>
                                                        )}
                                                        {highlight.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTimeline;
