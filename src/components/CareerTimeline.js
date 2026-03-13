import React, { useState } from 'react';

const CareerTimeline = () => {
    const [expandedCards, setExpandedCards] = useState([0]); // Current role expanded by default

    const timeline = [
        {
            year: 'Feb 2026 - Present',
            title: 'Independent Consultant',
            company: 'Self-Employed / Freelance',
            type: 'current',
            highlights: [
                { label: 'Agentic AI Strategy:', text: 'Developing custom AI agents using Google GenAI SDK and Model Context Protocol (MCP) for enterprise automation.' },
                { label: 'Technical Consultancy:', text: 'Advising on DevOps Engineering, Proxmox virtualization, and secure infrastructure design.' },
                { label: 'Workflow Engineering:', text: 'Designing self-healing monitoring systems and complex automations using n8n and LLM orchestration.' }
            ]
        },
        {
            year: 'June 2023 - Feb 2026',
            title: 'Lead Software Engineer',
            company: 'Arishti Info Labs',
            type: 'milestone',
            highlights: [
                { label: 'Product Leadership:', text: 'Directed the full SDLC for "Dorje" OT SIEM and cybersecurity product portfolio, aligning engineering with business strategy.' },
                { label: 'DevOps & Infrastructure:', text: 'Architected enterprise virtualization solutions using Proxmox and hardended Linux environments.' },
                { label: 'R&D Innovation:', text: 'Spearheaded development of custom cybersecurity appliances using the Yocto Project for embedded Linux.' }
            ]
        },
        {
            year: 'June 2021 - June 2023',
            title: 'Senior Software Engineer',
            company: 'Arishti Info Labs',
            type: 'milestone',
            highlights: [
                { label: 'Advance Cyber Kiosk:', text: 'Led the delivery of a hardware-integrated forensic kiosk for secure data sanitization in restricted environments.' },
                { label: 'CI/CD Maturity:', text: 'Implemented mature CI/CD pipelines using Jenkins and Docker to automate security testing and deployment.' },
                { label: 'Networking & Security:', text: 'Configured enterprise firewalls and Snort-based IDS to protect critical product infrastructure.' }
            ]
        },
        {
            year: 'Feb 2021 - June 2021',
            title: 'Software Developer',
            company: 'TechAvidus',
            type: 'regular',
            highlights: [
                { text: 'Developed scalable Node.js and Angular applications with a focus on multi-tenant architecture and performance.' }
            ]
        },
        {
            year: 'Oct 2019 - Feb 2021',
            title: 'Frontend Developer',
            company: 'Nimblechapps',
            type: 'regular',
            highlights: [
                { text: 'Built modern web interfaces using React and Node.js for international clients, adhering to high-quality code standards.' }
            ]
        },
        {
            year: 'July 2018 - Oct 2019',
            title: 'Frontend Developer',
            company: 'Webelight Solutions',
            type: 'start',
            highlights: [
                { text: 'Started professional journey by creating responsive Angular applications and optimizing frontend performance.' }
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
                    <h2 className="section-title">Professional Journey</h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
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
                                    marginBottom: index === timeline.length - 1 ? 0 : '2.5rem'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '11px',
                                        top: '8px',
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        background: item.type === 'current' ? 'var(--color-primary)' : 'white',
                                        border: `3px solid var(--color-primary)`,
                                        zIndex: 1,
                                        boxShadow: '0 0 0 4px var(--color-bg-primary)'
                                    }} />

                                    <div className="card"
                                        onClick={() => toggleCard(index)}
                                        style={{
                                            padding: '1.5rem 2rem',
                                            cursor: 'pointer',
                                            border: item.type === 'current' ? '2px solid var(--color-primary)' : '1px solid var(--border-color)',
                                            background: item.type === 'current' ? 'rgba(30, 58, 138, 0.02)' : 'var(--color-card-bg)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            marginBottom: '0.5rem',
                                            gap: '1rem',
                                            flexWrap: 'wrap'
                                        }}>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                fontWeight: '800',
                                                color: 'var(--color-primary)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            }}>
                                                {item.year}
                                            </span>
                                            {item.type === 'current' && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    fontWeight: '700',
                                                    color: 'white',
                                                    background: 'var(--color-primary)',
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '4px'
                                                }}>
                                                    ACTIVE
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
                                            fontSize: '0.925rem',
                                            fontWeight: '600',
                                            color: 'var(--color-slate-600)',
                                            margin: 0
                                        }}>
                                            {item.company}
                                        </p>

                                        <div style={{
                                            maxHeight: isExpanded ? '1000px' : '0',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s ease-in-out',
                                            marginTop: isExpanded ? '1.25rem' : '0',
                                            opacity: isExpanded ? 1 : 0
                                        }}>
                                            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                                {item.highlights.map((highlight, hIndex) => (
                                                    <li key={hIndex} style={{
                                                        fontSize: '0.875rem',
                                                        color: 'var(--color-slate-700)',
                                                        marginBottom: '0.75rem',
                                                        display: 'flex',
                                                        gap: '0.75rem'
                                                    }}>
                                                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                                                        <span>
                                                            {highlight.label && (
                                                                <strong style={{ color: 'var(--color-slate-900)', fontWeight: '700' }}>
                                                                    {highlight.label}{' '}
                                                                </strong>
                                                            )}
                                                            {highlight.text}
                                                        </span>
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
