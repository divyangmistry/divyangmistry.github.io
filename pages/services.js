import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Services = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            animatedElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const services = [
        {
            category: 'AI Agents',
            title: 'Agentic AI Development',
            description: 'Custom autonomous AI agents tailored for your business workflows. From customer support to automated data analysis.',
            features: [
                'Multi-Agent Systems (LangGraph, CrewAI)',
                'RAG-enhanced Knowledge Bases',
                'Tool Use & Function Calling',
                'Performance Optimization'
            ],
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            category: 'MCP Servers',
            title: 'MCP Server Ecosystem',
            description: 'Building bridges between AI models and your internal tools through the Model Context Protocol (MCP).',
            features: [
                'Custom Dockerized MCP Servers',
                'Database Connectors',
                'API Bridging',
                'Security Hardening'
            ],
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            category: 'Consultancy',
            title: 'Technical Consultancy',
            description: 'High-level strategic advice and hands-on implementation for complex technical challenges.',
            features: [
                'Networking & Infrastructure',
                'DevOps Engineering',
                'AI Adoption Strategy',
                'Software Audit & Refactoring'
            ],
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <Head>
                <title>Services | Divyang Mistry - AI & DevOps Solutions</title>
                <meta name="description" content="Explore my specialized services in AI Agent development, MCP servers, and comprehensive technical consultancy." />
            </Head>

            <main style={{ background: 'var(--color-bg-primary)', minHeight: '100vh', paddingTop: '100px' }}>
                {/* Hero Section */}
                <section className="section">
                    <div className="container">
                        <div className="animate-on-scroll text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}>
                                Innovative <span style={{ color: 'var(--color-primary)' }}>Solutions</span> for the AI Era
                            </h1>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-slate-600)' }}>
                                Leveraging deep expertise in DevOps, Infrastructure, and AI to build future-ready agents and architectures.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 stagger-children">
                            {services.map((service, index) => (
                                <div key={index} className="card service-card" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '2.5rem',
                                    height: '100%'
                                }}>
                                    <div style={{
                                        color: 'var(--color-primary)',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {service.icon}
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--color-primary)',
                                        marginBottom: '0.5rem'
                                    }}>{service.category}</span>
                                    <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                                    <p style={{
                                        fontSize: '0.9375rem',
                                        color: 'var(--color-slate-600)',
                                        marginBottom: '1.5rem',
                                        flexGrow: 1
                                    }}>{service.description}</p>
                                    <ul style={{ marginBottom: '2rem' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--color-text-secondary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginBottom: '0.5rem'
                                            }}>
                                                <svg width="16" height="16" fill="var(--color-primary)" viewBox="0 0 20 20" style={{ marginRight: '0.75rem', flexShrink: 0 }}>
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
                    <div className="container">
                        <div className="card animate-on-scroll text-center" style={{
                            padding: '4rem 2rem',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                            color: 'white',
                            border: 'none'
                        }}>
                            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to build something extraordinary?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.125rem' }}>
                                Whether you need a simple AI tool or a complex infrastructure overhaul, I'm here to help you scale.
                            </p>
                            <Link href="/#contact" className="btn" style={{
                                background: 'white',
                                color: 'var(--color-primary)',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem'
                            }}>
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{
                background: 'var(--color-bg-secondary)',
                color: 'var(--color-slate-400)',
                padding: '1.5rem 0',
                textAlign: 'center',
                fontSize: '0.875rem'
            }}>
                <div className="container">
                    <p style={{ margin: 0 }}>
                        © {new Date().getFullYear()} Divyang Mistry. All rights reserved.
                    </p>
                </div>
            </footer>

            <style jsx>{`
                .service-card {
                    background: var(--color-card-bg);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .service-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
            `}</style>
        </>
    );
};

export default Services;
