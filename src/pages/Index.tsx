
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Deep Katbamna | Data Engineer";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll(".section-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deep Katbamna",
    jobTitle: "Data Engineer",
    url: "https://deepkatbamna-portfolio.lovable.app/",
    email: "mailto:deepmihir@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/deep-katbamna/",
      "https://medium.com/@deepmihir",
      "https://github.com/deepmihir",
    ],
    knowsAbout: [
      "Data Engineering",
      "Snowflake",
      "dbt",
      "Apache Airflow",
      "AWS Glue",
      "ETL Pipelines",
      "Python",
      "SQL",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deep Katbamna | Data Engineer Portfolio",
    url: "https://deepkatbamna-portfolio.lovable.app/",
    description:
      "Professional portfolio of Deep Katbamna, a Data Engineer specializing in data pipelines, integration, and modern data architecture.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Deep Katbamna | Data Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Deep Katbamna — Data Engineer building scalable pipelines with Snowflake, dbt, Airflow, and AWS for enterprise data platforms."
        />
        <link rel="canonical" href="https://deepkatbamna-portfolio.lovable.app/" />
        <meta property="og:url" content="https://deepkatbamna-portfolio.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

