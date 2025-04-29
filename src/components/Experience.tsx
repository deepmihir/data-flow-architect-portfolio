
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  isLast = false
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
        
        <div>
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
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Intellytics Solutions",
      location: "Ahmedabad, India",
      period: "Feb 2023 - Present",
      description: [
        "Engineered an MLS data pipeline aggregating data from 800+ MLS sources, optimizing property acquisition and maintenance for Invitation Homes.",
        "Integrated Atlan data catalog, organizing 125K+ assets and automating metadata ingestion for 1K+ assets, enhancing data governance and reliability.",
        "Streamlined Agile data ingestion, transformation, and reporting, enhancing tracking for 200+ Agile metrics and sprint reporting."
      ]
    },
    {
      title: "Freelance Data Engineer",
      company: "Jupiter Healthcare",
      location: "Remote",
      period: "May 2022 - Jan 2023",
      description: [
        "Collaborated with Jupyter Healthcare to unify data from 300+ healthcare systems using Reltio MDM.",
        "Designed ETL pipelines to extract, transform, and load data from Reltio MDM into Snowflake using Kafka, ensuring real-time data consistency."
      ]
    },
    {
      title: "Data Engineer",
      company: "Quickpik",
      location: "Ahmedabad, India",
      period: "Nov 2020 - April 2022",
      description: [
        "Spearheaded the development of retail solutions at QuickPik (Startup incubated at GUSEC), integrating cross-platform apps with data analytics, increasing sales efficiency by 15%.",
        "Architected a scalable data infrastructure for 500+ users, enhancing storage efficiency, accessibility, and user-specific analytics dashboards."
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
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
