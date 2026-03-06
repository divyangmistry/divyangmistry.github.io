import React, { useState } from 'react';

const TechnicalSkills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const skillCategories = [
        {
            id: 'frameworks',
            name: 'Development Frameworks',
            icon: '⚛️',
            skills: [
                { name: 'React', level: 85 },
                { name: 'Angular', level: 80 },
                { name: 'Node.js', level: 85 },
                { name: '.NET Core', level: 65 },
                { name: 'C++', level: 70 },
                { name: 'Qt Framework', level: 65 },
                { name: 'Ionic', level: 75 },
                { name: 'Flutter', level: 50 }
            ]
        },
        {
            id: 'languages',
            name: 'Development Languages',
            icon: '💻',
            skills: [
                { name: 'JavaScript/TypeScript', level: 90 },
                { name: 'Python', level: 75 },
                { name: 'C/C++', level: 70 },
                { name: 'C#', level: 65 },
                { name: 'Bash/Shell', level: 80 },
                { name: 'SQL', level: 70 }
            ]
        },
        {
            id: 'automation',
            name: 'Automation & Scripting',
            icon: '🤖',
            skills: [
                { name: 'Bash Scripting', level: 85 },
                { name: 'PowerShell Scripting', level: 75 },
                { name: 'Ansible', level: 70 },
                { name: 'Python Automation', level: 80 },
                { name: 'Yocto Project', level: 75 },
                { name: 'Build Systems', level: 70 }
            ]
        },
        {
            id: 'devops',
            name: 'DevOps & Cloud',
            icon: '☁️',
            skills: [
                { name: 'Docker', level: 85 },
                { name: 'Kubernetes', level: 75 },
                { name: 'ArgoCD', level: 70 },
                { name: 'Jenkins', level: 80 },
                { name: 'GitLab CI/CD', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'Azure', level: 65 },
                { name: 'Proxmox', level: 80 },
                { name: 'QEMU/KVM', level: 75 },
                { name: 'Hyper-V', level: 70 }
            ]
        },
        {
            id: 'networking',
            name: 'Networking & Security',
            icon: '🔒',
            skills: [
                { name: 'Enterprise Routers & Firewalls', level: 85 },
                { name: 'VPN Configuration', level: 80 },
                { name: 'Network Architecture', level: 85 },
                { name: 'Snort IDS/IPS', level: 75 },
                { name: 'Security Hardening', level: 80 },
                { name: 'SIEM Systems', level: 70 }
            ]
        },
        {
            id: 'project-mgmt',
            name: 'Project Management',
            icon: '📊',
            skills: [
                { name: 'Agile/Scrum', level: 85 },
                { name: 'Jira', level: 90 },
                { name: 'Confluence', level: 85 },
                { name: 'Roadmap Planning', level: 80 },
                { name: 'Stakeholder Management', level: 75 },
                { name: 'Team Leadership', level: 80 }
            ]
        },
        {
            id: 'creative',
            name: 'Creative Tools & Design',
            icon: '🎨',
            skills: [
                { name: 'Figma', level: 85 },
                { name: 'Adobe XD', level: 80 },
                { name: 'Photoshop', level: 75 },
                { name: 'Illustrator', level: 70 },
                { name: 'UI/UX Design', level: 80 }
            ]
        },
        {
            id: 'ai-agentic',
            name: 'AI & Agentic Development',
            icon: '🤖',
            skills: [
                { name: 'Agentic Development', level: 75 },
                { name: 'AI Agent Development & Deployment', level: 70 },
                { name: 'LLM Integration & Orchestration', level: 70 },
                { name: 'Workflow Automation (n8n)', level: 75 }
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
                    <h2 className="section-title">Technical Skills</h2>
                    <p style={{
                        maxWidth: '900px',
                        margin: '0 0 2rem 0',
                        color: 'var(--color-slate-700)',
                        fontSize: '1rem'
                    }}>
                        With a robust blend of technical expertise and project management acumen, I bring a comprehensive skill set covering development, DevOps, networking, security, and product leadership.
                    </p>
                </div>

                <div className="grid grid-cols-2 stagger-children" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {skillCategories.map((category) => (
                        <div key={category.id}>
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
                                    gap: '1rem'
                                }}
                            >
                                <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        margin: 0,
                                        color: activeCategory === category.id ? 'white' : 'var(--color-slate-900)'
                                    }}>
                                        {category.name}
                                    </h4>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.875rem',
                                        opacity: 0.7
                                    }}>
                                        {category.skills.length} skills
                                    </p>
                                </div>
                                <svg
                                    width="20"
                                    height="20"
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

                            {activeCategory === category.id && (
                                <div
                                    style={{
                                        marginTop: '1rem',
                                        padding: '1.5rem',
                                        background: 'var(--color-card-bg)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: 'var(--border-radius)',
                                        animation: 'fadeIn 0.3s ease'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {category.skills.map((skill, index) => (
                                            <div key={index}>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '0.5rem'
                                                }}>
                                                    <span style={{
                                                        fontSize: '0.875rem',
                                                        fontWeight: '600',
                                                        color: 'var(--color-slate-800)'
                                                    }}>
                                                        {skill.name}
                                                    </span>
                                                    <span style={{
                                                        fontSize: '0.875rem',
                                                        fontWeight: '600',
                                                        color: 'var(--color-primary)'
                                                    }}>
                                                        {skill.level}%
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
                                                        width: `${skill.level}%`,
                                                        background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%)`,
                                                        borderRadius: '3px',
                                                        transition: 'width 0.6s ease'
                                                    }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;
