import React from 'react';

const BlogSection = () => {
    return (
        <section className="section" id="blog" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div className="animate-on-scroll" style={{ margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>My Blogs</h2>

                    <div className="card" style={{
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                        color: 'white',
                        padding: '3rem 2rem',
                        marginTop: '2rem'
                    }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                style={{ margin: '0 auto', display: 'block', marginBottom: '1rem' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                marginBottom: '0.75rem',
                                color: 'white'
                            }}>
                                Read My Articles
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: '1.7',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                I share insights on DevOps, Product Management, Infrastructure, and my experiences building complex systems.
                                Explore tutorials, architecture deep-dives, and lessons learned from real-world projects.
                            </p>
                        </div>

                        <a
                            href="https://blog.divyangmistry.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem 2rem',
                                background: 'var(--color-bg-primary)',
                                color: 'var(--color-primary)',
                                borderRadius: 'var(--border-radius)',
                                fontWeight: '600',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'transform var(--transition-base), box-shadow var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Visit My Blog
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <p style={{
                        marginTop: '1.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-slate-600)'
                    }}>
                        📝 Topics: DevOps • Cloud Architecture • Lifestyle • Proxmox • Product Management • CI/CD • Kubernetes • SaaS • Cybersecurity
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
