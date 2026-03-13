import React, { useState } from 'react';

const KeyProjects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 'docker-ai',
            title: 'Docker AI Agent (MCP-based)',
            category: 'ai',
            description: 'Developed an autonomous Docker management agent using Model Context Protocol (MCP) to control containers, debug logs, and manage lifecycles through natural language.',
            tags: ['MCP', 'Docker', 'Google GenAI', 'Node.js'],
            link: 'https://github.com/divyangmistry',
            featured: true
        },
        {
            id: 'n8n-automation',
            title: 'AI Workflow Automation (n8n)',
            category: 'ai',
            description: 'Architected self-healing server monitoring system using n8n and LLM agents to automatically detect service failures and execute recovery protocols.',
            tags: ['n8n', 'LLM Agents', 'Server Monitoring', 'Automation'],
            link: 'https://github.com/divyangmistry',
            featured: true
        },
        {
            id: 'cyber-kiosk',
            title: 'Advance Cyber Kiosk',
            category: 'security',
            description: 'hardware-integrated forensic tool for sanitizing mobile and storage devices in high-security environments. Designed custom Linux OS and UI.',
            tags: ['Yocto', 'Hardware Integration', "Delivery Management", "Devops"],
            link: '#',
            featured: true
        },
        {
            id: 'dorje',
            title: 'Dorje (OT SIEM)',
            category: 'security',
            description: 'Lead engineering for an Industrial SIEM system providing real-time traffic monitoring, asset detection for PLC/HMI, and deep packet inspection for OT protocols.',
            tags: ['Cybersecurity', 'SIEM', 'Networking', "hardware"],
            link: '#',
            featured: false
        },
        {
            id: 'multi-agent',
            title: 'Multi-Agent Orchestration',
            category: 'ai',
            description: 'Designed a multi-agent system using LangChain for distributed task execution and collaborative problem-solving across specialized LLM instances.',
            tags: ['Typescript', 'Multi-Agent Systems', "Google ADK"],
            link: 'https://github.com/divyangmistry',
            featured: false
        },
        // {
        //     id: 'fleet-mgmt',
        //     title: 'Smart Fleet Management',
        //     category: 'development',
        //     description: 'Built a real-time logistics tracking system with advanced route optimization and fleet health monitoring for commercial transport.',
        //     tags: ['React', 'Node.js', 'Maps API', 'IoT'],
        //     link: '#',
        //     featured: false
        // }
    ];

    const categories = [
        { id: 'all', name: 'All Work' },
        { id: 'ai', name: 'AI & Agents' },
        { id: 'security', name: 'Cybersecurity' },
        // { id: 'development', name: 'App Development' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="section" id="projects" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Key Projects</h2>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            style={{
                                padding: '0.625rem 1.5rem',
                                borderRadius: '999px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                border: '1px solid var(--border-color)',
                                backgroundColor: filter === cat.id ? 'var(--color-primary)' : 'var(--color-card-bg)',
                                color: filter === cat.id ? 'white' : 'var(--color-slate-600)',
                                cursor: 'pointer',
                                transition: 'all var(--transition-base)'
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-3 stagger-children" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            padding: '2rem',
                            border: project.featured ? '2px solid var(--color-primary-light)' : '1px solid var(--border-color)'
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1rem'
                                }}>
                                    <div style={{
                                        padding: '0.75rem',
                                        background: 'rgba(30, 58, 138, 0.05)',
                                        borderRadius: '0.75rem',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {project.category === 'ai' ? (
                                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        ) : project.category === 'security' ? (
                                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        )}
                                    </div>
                                    {project.featured && (
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            color: 'var(--color-primary)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    color: 'var(--color-slate-900)',
                                    marginBottom: '0.75rem'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.9375rem',
                                    color: 'var(--color-slate-600)',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: 'var(--color-slate-500)',
                                            background: 'var(--color-bg-primary)',
                                            padding: '0.25rem 0.625rem',
                                            borderRadius: '4px'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target={project.link === '#' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: '700',
                                        color: 'var(--color-primary)',
                                        textDecoration: 'none',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <span>View Project</span>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyProjects;
