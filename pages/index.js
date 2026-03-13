import { useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import AboutSection from '../src/components/AboutSection';
import CoreCompetencies from '../src/components/CoreCompetencies';
import KeyProjects from '../src/components/KeyProjects';
import CareerTimeline from '../src/components/CareerTimeline';
import TechnicalSkills from '../src/components/TechnicalSkills';
import Certifications from '../src/components/Certifications';
import BlogSection from '../src/components/BlogSection';
import ContactSection from '../src/components/ContactSection';

const Index = () => {

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with animate-on-scroll or stagger-children class
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Divyang Mistry - AI Developer | Software Engineer</title>
        <meta name="description" content="AI Developer and Software Engineer with 6+ years of experience in cybersecurity, infrastructure, and product leadership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <AboutSection />
        <CoreCompetencies />
        <KeyProjects />
        <CareerTimeline />
        <TechnicalSkills />
        <Certifications />
        {/* <Education /> */}
        <BlogSection />
        <ContactSection />
      </main>

      <footer style={{
        background: 'var(--color-bg-secondary)',
        color: 'var(--color-slate-400)',
        padding: '0.5rem 0',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <div className="container">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Divyang Mistry. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default Index;