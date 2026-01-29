import React from 'react';

const Education = () => {
    return (
        <section className="section" id="education" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <div className="animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 className="section-title">Education</h2>

                    <div className="card">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <h4 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '700',
                                    color: 'var(--color-slate-900)',
                                    margin: '0 0 0.25rem 0'
                                }}>
                                    B.E. Information Technology
                                </h4>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-slate-700)',
                                    margin: 0
                                }}>
                                    Saffrony Institute of Technology
                                </p>
                            </div>
                            <span style={{
                                fontSize: '0.9375rem',
                                fontWeight: '600',
                                color: 'var(--color-slate-500)'
                            }}>
                                2014 – 2018
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
