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
                            Agentic AI Developer & Lead Software Engineer with over 7 years of experience driving the full product lifecycle of complex cybersecurity, SaaS, and AI-powered solutions. Specialized in building autonomous AI agents using <strong style={{ color: 'var(--color-slate-900)' }}>Google GenAI SDK</strong> and <strong style={{ color: 'var(--color-slate-900)' }}>Model Context Protocol (MCP)</strong> to automate enterprise workflows. Expert in LLM orchestration, RAG pipelines (LangChain), Proxmox virtualization, and security hardening. I bridge technical engineering and business strategy, leading cross-functional teams to deliver high-performance, AI-driven products while maintaining rigorous cybersecurity standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
