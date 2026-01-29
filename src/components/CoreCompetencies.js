import React from 'react';

const CoreCompetencies = () => {
    const competencies = [
        {
            title: 'Product & Leadership',
            skills: [
                'Agile/Scrum & Roadmap Planning',
                'Cross-functional Team Leadership',
                'Client Meeting & Deployment Handling',
                'Customer Success & Vendor Management',
                'Revenue & Resource Optimization'
            ]
        },
        {
            title: 'Infrastructure & DevOps',
            skills: [
                'Cloud (AWS / Azure) & On Premises Server',
                'Virtualization (Proxmox, QEMU, Hyper-V)',
                'Containerization (Docker, LXC)',
                'CI/CD Planning & Implementation',
                'Automation & Bash Scripting'
            ]
        },
        {
            title: 'Security & Networking',
            skills: [
                'Enterprise Router & Firewall Setup',
                'SIEM & OT Security (Snort, Dorje)',
                'OpenSource VPN Configuration',
                'System Hardware/Software Hardening',
                'Cybersecurity Standards & Policies'
            ]
        },
        {
            title: 'Development & Tools',
            skills: [
                'Node.js, Angular, React, .NET',
                'C++, Qt Framework',
                'Code Reviews (Angular & .NET)',
                'Jira, Confluence, Git'
            ]
        },
        {
            title: 'Monitoring & Analytics',
            skills: [
                'Grafana & Prometheus',
                'Infrastructure Monitoring',
                'Performance Optimization',
                'Alert Management'
            ]
        },
        {
            title: 'Embedded & Systems',
            skills: [
                'Yocto Project Development',
                'Custom Linux Distribution',
                'Embedded Systems Architecture',
                'System-level Programming'
            ]
        }
    ];

    return (
        <section className="section" id="competencies" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Core Competencies</h2>
                </div>

                <div className="grid grid-cols-3 stagger-children">
                    {competencies.map((competency, index) => (
                        <div key={index} className="card" style={{
                            background: 'var(--color-slate-50)',
                            border: '1px solid var(--color-slate-100)'
                        }}>
                            <h4 style={{
                                color: 'var(--color-primary)',
                                marginBottom: '1rem',
                                fontSize: '1rem',
                                fontWeight: '700'
                            }}>
                                {competency.title}
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {competency.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} style={{
                                        fontSize: '0.875rem',
                                        color: 'var(--color-slate-700)',
                                        marginBottom: '0.5rem',
                                        paddingLeft: '1rem',
                                        position: 'relative',
                                        lineHeight: '1.4'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--color-primary)'
                                        }}>•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCompetencies;
