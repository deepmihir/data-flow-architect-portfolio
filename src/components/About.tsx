import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
              I&apos;m Deep Katbamna, a Senior Data Engineer and Product Solution Architect in Kenexai&apos;s Product
              Solution Architect group in Ahmedabad. I combine platform architecture with hands-on engineering —
              leading Agentworkx while delivering production data platforms for regulated industries.
            </p>
            <p>
              At Kenexai, I lead architecture and engineering for{' '}
              <span className="font-medium">Agentworkx</span>, an accelerator that helps companies adopt AI agent
              capabilities through connectors, tools, RAG patterns, and a ready-to-extend framework. I also deliver
              internal training for teams adopting modern data and AI practices.
            </p>
            <p>
              On the client delivery side, I build Snowflake and dbt platforms for a UK consumer finance engagement —
              credit risk, affordability, and credit decisioning — handling bureau and card data with PCI/PII governance,
              dimensional modeling, Airflow orchestration, and data quality monitoring.
            </p>
            <p>
              Previously at Intellytics Solutions, I built enterprise pipelines across 800+ MLS sources, cataloged
              125K+ assets, and led GenAI governance initiatives. I write about data engineering and AI on{' '}
              <a
                href="https://medium.com/@deepmihir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-data-blue hover:underline"
              >
                Medium
              </a>
              .
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="data-card">
                <h4 className="font-semibold">Bachelor of Engineering - Computer Engineering</h4>
                <p className="text-muted-foreground">Vishwakarma Government Engineering College</p>
                <p className="text-muted-foreground">Ahmedabad, India • July 2019 - July 2023</p>
                <p className="mt-2">CPI: 8.35</p>
              </div>
            </div>
          </div>

          <div>
            <div className="data-card h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-muted-foreground">Experience</p>
                  <p className="text-xl font-medium">5+ Years</p>
                </div>

                <div>
                  <p className="text-muted-foreground">MLS Sources Integrated</p>
                  <p className="text-xl font-medium">800+</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Assets Cataloged</p>
                  <p className="text-xl font-medium">125K+</p>
                </div>

                <div>
                  <p className="text-muted-foreground">Corporate Hackathon</p>
                  <p className="text-xl font-medium">1st Place</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-2">Certifications</h4>
                <ul className="space-y-2">
                  <li className="data-dots pl-2">SnowPro Core Certification</li>
                  <li className="data-dots pl-2">Python - Programming for Everybody</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
