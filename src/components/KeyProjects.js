import React from 'react';

const KeyProjects = () => {
    const projects = [
        {
            title: 'Advance Cyber Kiosk',
            description: 'Led development and delivery as Product Lead for hardware-integrated forensic kiosk, managing full-stack development, UI/UX design, and deployment to government and enterprise clients.'
        },
        {
            title: 'Custom Linux Distribution',
            description: 'Developed customized Linux distributions using Yocto for embedded cybersecurity appliances with hardware-level security hardening.'
        },
        {
            title: 'Private Network Infrastructure',
            description: 'Architected secure internal networking using Keycloak authentication, and OpenSource VPN solutions.'
        },
        {
            title: 'Enterprise Virtualization On-Prem Server',
            description: 'Deployed Proxmox-based virtualization infrastructure with QEMU/KVM for scalable development and production environments.'
        },
        {
            title: 'CI/CD Automation Platform',
            description: 'Designed and implemented end-to-end CI/CD pipelines with Jenkins, Docker, and Package Mirror for automated deployment workflows.'
        },
        {
            title: 'EPR Waste Management Portal',
            description: 'Managed planning and full-stack development of portal tracing product lifecycles from manufacturing to recycling.'
        }
    ];

    return (
        <section className="section" id="projects" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <div className="animate-on-scroll">
                    <h2 className="section-title">Key Projects & Initiatives</h2>
                </div>

                <div className="grid grid-cols-3 stagger-children">
                    {projects.map((project, index) => (
                        <div key={index} className="card">
                            <h4 style={{
                                color: 'var(--color-slate-800)',
                                marginBottom: '0.75rem',
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em'
                            }}>
                                {project.title}
                            </h4>
                            <p style={{
                                fontSize: '0.875rem',
                                lineHeight: '1.6',
                                color: 'var(--color-slate-600)',
                                margin: 0
                            }}>
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyProjects;
