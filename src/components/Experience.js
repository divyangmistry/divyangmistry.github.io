import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Arishti Info Labs',
            position: 'Lead Product Engineer (Acting TPM) & DevOps Architect',
            period: 'June 2023 – Present',
            responsibilities: [
                { label: 'Product Strategy & Execution:', text: 'Direct end-to-end product strategy for cybersecurity portfolio including "Advance Cyber Kiosk" and "Dorje" OT SIEM, ensuring alignment with market demands and business goals.' },
                { label: 'DevOps Architecture:', text: 'Design and implement enterprise DevOps infrastructure using Proxmox virtualization, QEMU/KVM, and automated CI/CD pipelines with Jenkins and Docker orchestration.' },
                { label: 'Infrastructure & Security:', text: 'Configure enterprise-grade routers, firewalls, and OpenSource VPN solutions; implement Snort-based intrusion detection and system hardening protocols.' },
                { label: 'Cross-Functional Leadership:', text: 'Lead and synchronize efforts across DevOps, Network Administration, Operations, and Customer Success teams; conduct Angular and .NET code reviews.' }
            ]
        },
        {
            company: 'Arishti Info Labs',
            position: 'Senior Software Engineer & Product Lead',
            period: 'June 2021 – June 2023',
            responsibilities: [
                { label: 'R&D & Custom Linux:', text: 'Spearheaded R&D of security products; developed custom Linux distributions using Yocto for embedded cybersecurity appliances.' },
                { label: 'Product Delivery (Cyber Kiosk):', text: 'Managed full lifecycle of hardware-integrated forensic kiosk for sanitizing mobile/storage devices with frontend UX and backend logic.' },
                { label: 'Product Delivery (Dorje SIEM):', text: 'Led engineering of OT traffic monitoring tool with backend logic and frontend asset detection for PLC and HMI management.' },
                { label: 'CI/CD Implementation:', text: 'Planned and created CI/CD pipelines for automated testing, building, and deployment of security applications.' }
            ]
        },
        {
            company: 'TechAvidus',
            position: 'Software Developer',
            period: 'Feb 2020 – June 2021',
            responsibilities: [
                { text: 'Collaborated on scalable Node.js and Angular applications for enterprise clients with focus on performance optimization.' },
                { text: 'Provided technical mentorship to junior developers, improving team velocity and establishing code quality standards.' }
            ]
        },
        {
            company: 'Nimblechapps',
            position: 'Frontend Developer',
            period: 'Oct 2019 – Feb 2020',
            responsibilities: [
                { text: 'Executed frontend development for diverse client projects using React and Node.js with modern tooling and best practices.' }
            ]
        },
        {
            company: 'Webelight Solutions',
            position: 'Frontend Developer',
            period: 'July 2018 – Oct 2019',
            responsibilities: [
                { text: 'Developed responsive web interfaces and optimized application performance using Angular frameworks for various client projects.' }
            ]
        }
    ];

    return (
        <section className="section bg-white" id="experience">
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Professional Experience</h2>
                </div>

                <div className="stagger-children" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="card" style={{ marginBottom: '1.5rem' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                marginBottom: '0.5rem',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            }}>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    color: 'var(--color-slate-900)',
                                    margin: 0
                                }}>
                                    {exp.company}
                                </h4>
                                <span style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: 'var(--color-slate-500)'
                                }}>
                                    {exp.period}
                                </span>
                            </div>

                            <div style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: 'var(--color-primary)',
                                fontStyle: 'italic',
                                marginBottom: '1rem'
                            }}>
                                {exp.position}
                            </div>

                            <ul className="list-disc" style={{ margin: 0 }}>
                                {exp.responsibilities.map((resp, respIndex) => (
                                    <li key={respIndex} style={{
                                        fontSize: '0.9375rem',
                                        lineHeight: '1.6',
                                        color: 'var(--color-slate-700)'
                                    }}>
                                        {resp.label && (
                                            <strong style={{ color: 'var(--color-slate-800)' }}>
                                                {resp.label}{' '}
                                            </strong>
                                        )}
                                        {resp.text}
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

export default Experience;
