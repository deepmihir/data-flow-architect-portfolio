
import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Database, FileText } from 'lucide-react';

interface ProjectProps {
  title: string;
  company: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  company,
  description,
  technologies,
  icon
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden">
      <CardHeader className="relative flex flex-row items-center gap-4 pb-2">
        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{company}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="mt-2 text-sm space-y-2 mb-4">
          {description.map((desc, idx) => (
            <li key={idx} className="data-dots pl-2">
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DB-GPT for Datomica",
      company: "End-to-End Product Development",
      description: [
        "Built a SaaS product DB-GPT for Datomica - a powerful AI-powered chat interface for enterprise databases that enables business users to interact with complex datasets using natural language.",
        "Implemented intelligent context awareness, query history, and multi-turn dialogue for in-depth analysis, reducing dependency on technical teams for ad-hoc data needs.",
        "Accelerated decision-making by making data more accessible and enhanced data literacy across departments. Live deployment actively used by the Datomica team."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "ReactJS", "TypeScript", "Tailwind CSS", "Google Gemini", "MCP", "Langgraph"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "MLS Data Pipeline",
      company: "Invitation Homes",
      description: [
        "Developed an end-to-end MLS data pipeline, integrating data from 800+ MLS sources for property acquisition and maintenance.",
        "Designed a standardized ingestion and transformation framework using DBT, ensuring schema adaptability and data consistency.",
        "Implemented Snowflake as the central repository for structured data, improving accessibility and governance."
      ],
      technologies: ["Python", "Snowflake", "DBT", "Airflow", "AWS Glue", "S3"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "Agile Data Ingestion & Reporting",
      company: "Invitation Homes",
      description: [
        "Automated data extraction from Jira via AWS Glue, staging it in S3 and transforming it using DBT for Agile reporting in Tableau.",
        "Developed Airflow DAGs to orchestrate ingestion and processing, ensuring a 12% efficiency improvement in Agile metric tracking.",
        "Delivered a unified reporting solution for 200+ Agile metrics, streamlining sprint tracking and KPI monitoring."
      ],
      technologies: ["Python", "Snowflake", "DBT", "Airflow", "AWS Glue", "S3"],
      icon: <FileText size={24} className="text-data-blue" />
    },
    {
      title: "Platform Usage Dashboard",
      company: "Invitation Homes",
      description: [
        "Designed an automated data pipeline to track usage metrics from 7+ sources, optimizing license management and usage tracking.",
        "Implemented structured ingestion and full reload strategies, reducing stale data occurrences and improving query performance by 30%.",
        "Built a real-time Usage Dashboard, empowering leadership with data insights and platform utilization analytics."
      ],
      technologies: ["Python", "Snowflake", "AWS Glue", "Airflow", "DBT"],
      icon: <FileText size={24} className="text-data-blue" />
    },
    {
      title: "Atlan Data Catalog Integration",
      company: "Invitation Homes",
      description: [
        "Integrated Atlan with Snowflake, Tableau, DBT, and Power BI, cataloging 125K+ assets and automating metadata ingestion for 1K+ assets.",
        "Developed custom workflows using APIs to extract, enrich, and sync metadata, improving data governance and accessibility.",
        "Implemented schema change alerts and failure monitoring, ensuring reliability and proactive issue resolution."
      ],
      technologies: ["Python", "Airflow", "AWS Glue"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "Healthcare MDM Integration",
      company: "Jupyter Healthcare (Freelance)",
      description: [
        "Integrated data from 300+ healthcare systems into a unified Master Data Management (MDM) system using Reltio MDM.",
        "Developed ETL pipelines to extract, transform, and load data from Reltio MDM into Snowflake using Kafka, ensuring real-time data consistency.",
        "Optimized data accessibility and governance, enhancing interoperability across healthcare data sources."
      ],
      technologies: ["Python", "Snowflake", "Kafka", "Reltio"],
      icon: <Database size={24} className="text-data-blue" />
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Key Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              company={project.company}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
