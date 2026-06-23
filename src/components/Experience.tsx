
import React from 'react';
import { Briefcase, Calendar, ExternalLink, Trophy } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  isLast?: boolean;
  hackathon?: {
    title: string;
    tech: string;
    points: string[];
    link?: string;
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  isLast = false,
  hackathon
}) => {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>
      )}
      
      <div className="flex gap-x-6">
        <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-data-blue/10">
          <Briefcase className="h-5 w-5 text-data-blue" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{company}</span>
            <span className="mx-2">•</span>
            <span>{location}</span>
          </div>
          
          <div className="mt-1 flex items-center gap-x-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{period}</span>
          </div>
          
          <div className="mt-3">
            <ul className="space-y-2">
              {description.map((item, index) => (
                <li key={index} className="data-dots pl-2 text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {hackathon && (
            <div className="mt-6 p-4 bg-data-blue/5 rounded-lg border border-data-blue/20">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h4 className="font-semibold text-data-blue">{hackathon.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{hackathon.tech}</p>
              <ul className="space-y-1">
                {hackathon.points.map((point, index) => (
                  <li key={index} className="data-dots pl-2 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              {hackathon.link && (
                <a 
                  href={hackathon.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm text-data-blue hover:underline"
                >
                  View Project <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Kenexai",
      location: "Ahmedabad, India",
      period: "May 2026 - Present",
      description: [
        "Designed and implemented enterprise-scale credit risk and card analytics platform using Snowflake, DBT Core, Airflow, and AWS.",
        "Built automated ingestion pipelines for bureau data, customer accounts, statement history, and card portfolio datasets from multiple external providers.",
        "Developed scalable ELT frameworks processing sensitive PCI and PII data while ensuring governance, security, and compliance standards.",
        "Engineered credit score calculation and customer risk segmentation models supporting lending and portfolio management decisions.",
        "Designed dimensional and analytical data models for own-brand and co-brand card products, enabling downstream reporting and risk analytics.",
        "Orchestrated end-to-end data workflows using Apache Airflow and DBT Core, improving reliability and reducing manual intervention.",
        "Optimized Snowflake storage and compute performance for large-scale financial datasets and operational reporting workloads.",
        "Implemented data quality validation, monitoring, and reconciliation frameworks to ensure accuracy across critical financial data pipelines."
      ]
    },
    {
      title: "Senior Data Engineer",
      company: "Intellytics Solutions",
      location: "Ahmedabad, India",
      period: "Feb 2023 - Apr 2026",
      description: [
        "Built scalable data pipelines for 800+ MLS sources using AWS Glue, Airflow, DBT and Snowflake to support property acquisition and maintenance workflows.",
        "Designed API-based ingestion systems for JSON/metadata from distributed MLS feeds, enabling standardized downstream processing and schema harmonization.",
        "Developed DBT-based transformation frameworks to normalize schema variations and ensure clean, tabular output across 1M+ daily records for analytical consumption.",
        "Implemented Snowflake as the central enterprise DWH, improving compute efficiency, accessibility and governance for business and data science teams.",
        "Automated Agile & Jira metrics ingestion (200+ KPIs) with AWS Glue → S3 → Snowflake → Tableau, improving sprint reporting efficiency by 12%.",
        "Integrated Atlan Data Catalog with Snowflake, Tableau, Power BI & DBT, cataloging 125K+ assets and automating metadata enrichment for 1K+ assets with proactive schema-change alerts.",
        "Designed platform usage & license analytics pipelines across 7 Atlan telemetry sources, improving query latency and reducing stale metadata by 30%.",
        "Modernized a legacy SSAS cube through semantic-layer migration, transforming measure groups into Snowflake semantic views and implementing equivalent metric logic.",
        "Led the MVP of QueryGuardAI — a GenAI-powered governance product, implementing LLM + RAG pipelines, lineage builder and GitHub App integration to detect schema changes and auto-generate impact analysis summaries.",
        "Drove the \"Secure Snowflake\" governance initiative, introducing Snowflake network policies & access controls to enforce zero-trust principles and secure multi-region access."
      ],
      hackathon: {
        title: "AI-Driven Scope Generation for BTR Acquisition - Hackathon Winner",
        tech: "Bedrock, Claude Sonnet, Prompt Engineering, Salesforce API, ETL Automation",
        points: [
          "Developed an AI-powered BTR scoping pipeline to auto-generate and attach scope templates to Salesforce Budget Walk workflows.",
          "Fine-tuned Claude Sonnet on historical BW documents to recognize community patterns and automate repetitive scope creation.",
          "Eliminated regional/national approval delays and duplicate manual labor — reduced scope creation effort from days to hours and accelerated rehab kickoff.",
          "Awarded 1st place for delivering the most impactful operational automation solution in the corporate hackathon."
        ],
        link: "https://github.com/deepmihir/2025Hackathon-Team-11"
      }
    },

    {
      title: "Freelance Data Engineer",
      company: "Jupiter Healthcare",
      location: "Remote",
      period: "May 2022 - Jan 2023",
      description: [
        "Integrated data from 300+ healthcare systems into Reltio MDM, improving interoperability, patient identity resolution and regulatory compliance.",
        "Designed real-time Kafka → Snowflake streaming pipelines to process millions of patient and provider records daily with high availability and minimal latency.",
        "Built automated ingestion workflows for extraction, transformation and load, reducing manual reconciliation efforts by 40% and improving SLA adherence.",
        "Improved data governance and lineage visibility by enforcing structured ingestion frameworks, reducing stale data occurrences by ~35%.",
        "Delivered a centralized healthcare data hub that reduced patient record validation turnaround time from days to hours, enabling faster clinical and operational insights.",
        "Collaborated with healthcare stakeholders to define data quality KPIs, strengthening trust in enterprise reporting and compliance-driven audits."
      ]
    },
    {
      title: "Data Engineer",
      company: "Quickpik",
      location: "Ahmedabad, India",
      period: "Nov 2020 - April 2022",
      description: [
        "Architected scalable data infrastructure for 500+ users, integrating cross-platform applications and dashboards.",
        "Developed data pipelines for retail analytics, boosting sales efficiency by 15%.",
        "Designed user-specific analytics dashboards, enhancing decision-making with real-time insights."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12 space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              hackathon={exp.hackathon}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
