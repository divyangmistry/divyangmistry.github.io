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
                            <strong style={{ color: 'var(--color-slate-900)' }}>Lead Product Engineer</strong>,{' '}
                            <strong style={{ color: 'var(--color-slate-900)' }}>DevOps Architect</strong>, and{' '}
                            <strong style={{ color: 'var(--color-slate-900)' }}>AI Solutions Consultant</strong> with over{' '}
                            <strong>7 years of experience</strong> driving the full product lifecycle of complex cybersecurity,
                            SaaS, and AI-powered solutions. Currently operating as an independent consultant, bridging technical
                            engineering and business strategy — leading cross-functional teams across{' '}
                            <strong>DevOps</strong>, <strong>Agentic AI Development</strong>,{' '}
                            <strong>Network Administration</strong>, and <strong>Customer Success</strong>.
                        </p>
                        <p>
                            Specialized in enterprise-grade infrastructure, virtualization (Proxmox, QEMU, Hyper-V), custom Linux
                            distribution development (Yocto), and security hardening. Expert in CI/CD automation, AI agent
                            development & deployment, Kubernetes orchestration, and establishing cybersecurity standards while
                            delivering high-performance products. Certified in{' '}
                            <strong>Google Project Management</strong> with a proven track record of on-time, on-budget delivery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
