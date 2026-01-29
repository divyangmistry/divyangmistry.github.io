import React from 'react';

const AboutSection = () => {
    return (
        <section className="section" id="about" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div className="animate-on-scroll" style={{ margin: '0 auto' }}>
                    <h2 className="section-title">Professional Summary</h2>

                    <div style={{
                        fontSize: '1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-slate-700)',
                        textAlign: 'justify'
                    }}>
                        <p>
                            <strong style={{ color: 'var(--color-slate-900)' }}>Lead Product Engineer</strong> and{' '}
                            <strong style={{ color: 'var(--color-slate-900)' }}>DevOps Architect</strong> with over{' '}
                            <strong>6+ years of experience</strong> driving the full product lifecycle of complex cybersecurity
                            and SaaS solutions. Proven expertise in bridging technical engineering and business strategy, with a
                            track record of leading cross-functional teams across{' '}
                            <strong>DevOps</strong>, <strong>Network Administration</strong>, and{' '}
                            <strong>Customer Success</strong>.
                        </p>
                        <p>
                            Specialized in enterprise-grade infrastructure, virtualization (Proxmox, QEMU, Hyper-V), custom Linux
                            distribution development (Yocto), and security hardening. Expert in CI/CD automation, client
                            deployments, and establishing cybersecurity standards and policies while delivering high-performance
                            security products.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
