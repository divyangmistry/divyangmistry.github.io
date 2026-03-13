import React, { useState } from 'react';

const TechnicalSkills = () => {
    const [activeCategory, setActiveCategory] = useState('ai-agentic');

    const skillCategories = [
        {
            id: 'ai-agentic',
            name: 'AI & Agentic Development',
            icon: '🤖',
            skills: [
                { name: 'Google GenAI SDK', level: 90 },
                { name: 'AI Agent Development', level: 85 },
                { name: 'LLM Integration & Orchestration', level: 85 },
                { name: 'LangChain & RAG Pipelines', level: 80 },
                { name: 'Vector DBs', level: 75 },
                { name: 'Workflow Automation (n8n)', level: 85 }
            ]
        },
        {
            id: 'infra-virt',
            name: 'Infrastructure & Virtualization',
            icon: '☁️',
            skills: [
                { name: 'Proxmox Virtualization', level: 90 },
                { name: 'QEMU/KVM & Hyper-V', level: 85 },
                { name: 'Yocto Project (Custom Linux)', level: 80 },
                { name: 'Docker & Kubernetes', level: 85 },
                { name: 'CI/CD (Jenkins, GitLab CI)', level: 85 },
                { name: 'Infrastructure as Code', level: 75 }
            ]
        },
        {
            id: 'networking-security',
            name: 'Networking & Security',
            icon: '🔒',
            skills: [
                { name: 'Enterprise Routers & Firewalls', level: 90 },
                { name: 'VPN Configuration', level: 85 },
                { name: 'Security Hardening', level: 85 },
                { name: 'Snort IDS/IPS', level: 80 },
                { name: 'SIEM Systems (Dorje)', level: 80 },
                { name: 'Network Architecture', level: 85 }
            ]
        },
        {
            id: 'product-mgmt',
            name: 'Product & Project Management',
            icon: '📊',
            skills: [
                { name: 'Agile/Scrum Leadership', level: 90 },
                { name: 'Product Lifecycle (SDLC)', level: 85 },
                { name: 'Roadmap Planning', level: 85 },
                { name: 'Stakeholder Management', level: 85 },
                { name: 'Technical Leadership', level: 90 },
                { name: 'Jira & Confluence', level: 90 }
            ]
        },
        {
            id: 'languages-dev',
            name: 'Languages & Development',
            icon: '💻',
            skills: [
                { name: 'JavaScript / TypeScript', level: 90 },
                { name: 'Python (AI & Automation)', level: 85 },
                { name: 'React / Angular / Node.js', level: 85 },
                { name: 'C++ / Qt Framework', level: 75 },
                { name: 'Bash / PowerShell', level: 85 },
                { name: 'SQL & NoSQL', level: 80 }
            ]
        }
    ];

    const toggleCategory = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };

    return (
        <section className="section" id="skills" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Technical Expertise</h2>
                    <p style={{
                        maxWidth: '900px',
                        margin: '0 0 3rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                    }}>
                        Bridging the gap between technical engineering and business strategy with a comprehensive skill set across AI development, DevOps infrastructure, and product leadership.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {skillCategories.map((category) => (
                        <div key={category.id} className="stagger-children">
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="card"
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    border: activeCategory === category.id ? '2px solid var(--color-primary)' : '1px solid var(--border-color)',
                                    background: activeCategory === category.id ? 'var(--color-primary)' : 'var(--color-card-bg)',
                                    color: activeCategory === category.id ? 'white' : 'var(--color-slate-800)',
                                    transition: 'all var(--transition-base)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.25rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{
                                        fontSize: '0.925rem',
                                        fontWeight: '700',
                                        margin: 0,
                                        color: activeCategory === category.id ? 'white' : 'var(--color-slate-900)'
                                    }}>
                                        {category.name}
                                    </h4>
                                </div>
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{
                                        transform: activeCategory === category.id ? 'rotate(180deg)' : 'rotate(0)',
                                        transition: 'transform var(--transition-base)'
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                style={{
                                    maxHeight: activeCategory === category.id ? '500px' : '0',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease-in-out',
                                    opacity: activeCategory === category.id ? 1 : 0,
                                    padding: activeCategory === category.id ? '0.5rem 0 1.5rem' : '0'
                                }}
                            >
                                <div style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '1.25rem',
                                    padding: '1rem',
                                    background: 'var(--color-card-bg)',
                                    borderRadius: 'var(--border-radius)',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    {category.skills.map((skill, index) => (
                                        <div key={index}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '0.5rem'
                                            }}>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600',
                                                    color: 'var(--color-slate-800)'
                                                }}>
                                                    {skill.name}
                                                </span>
                                                <span style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: '700',
                                                    color: 'var(--color-primary)'
                                                }}>
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div style={{
                                                height: '4px',
                                                background: 'var(--color-slate-100)',
                                                borderRadius: '2px',
                                                overflow: 'hidden'
                                            }}>
                                                <div style={{
                                                    height: '100%',
                                                    width: `${skill.level}%`,
                                                    background: `var(--color-primary)`,
                                                    borderRadius: '2px',
                                                    transition: 'width 1s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                                                }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
