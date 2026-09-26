import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Bot, Brain, Database, FileText, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectProps {
  title: string;
  company: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, company, description, technologies, icon }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden">
      <CardHeader className="relative flex flex-row items-center gap-4 pb-2">
        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">{icon}</div>
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
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Agentworkx",
      company: "Kenexai · Product Solution Architect group",
      description: [
        "Lead architecture and hands-on engineering for an accelerator that helps companies adopt AI agent capabilities faster.",
        "Design connector and tool frameworks, RAG integration patterns, and a ready-to-extend platform teams can build on.",
        "Balance product solution architecture with production engineering — from reference implementations to client-ready delivery."
      ],
      technologies: ["Product Solution Architecture", "RAG", "LLMs", "Python", "AWS", "Connectors"],
      icon: <Bot size={24} className="text-data-blue" />
    },
    {
      title: "Credit Risk & Card Analytics Platform",
      company: "Kenexai · UK consumer finance delivery",
      description: [
        "Designed a cloud-based credit risk and card analytics platform supporting consumer lending operations with scalable ingestion and transformation pipelines.",
        "Processed bureau data, customer accounts, statement history, and card portfolio datasets while securely handling PCI and PII data.",
        "Built credit score calculation and customer risk segmentation workflows orchestrated end-to-end with Airflow and dbt Core on Snowflake."
      ],
      technologies: ["Snowflake", "dbt Core", "Apache Airflow", "Python", "SQL", "AWS"],
      icon: <Layers size={24} className="text-data-blue" />
    },
    {
      title: "QueryGuardAI / ZaneAI",
      company: "Intellytics Solutions",
      description: [
        "Led MVP development of a GenAI-powered data governance platform using LLMs and RAG to automate impact analysis and governance workflows.",
        "Built intelligent lineage generation and integrated GitHub App workflows to detect schema changes and analyze downstream dependencies.",
        "Reduced manual governance effort by enabling near real-time impact analysis across dbt models and Snowflake assets."
      ],
      technologies: ["OpenAI", "Python", "RAG", "Vector Search", "GitHub App", "dbt", "Snowflake", "AWS"],
      icon: <Brain size={24} className="text-data-blue" />
    },
    {
      title: "AI-Driven Scope Generation for BTR",
      company: "Intellytics Solutions · Hackathon winner",
      description: [
        "Built an AI-powered automation pipeline to generate and attach scope templates within Salesforce Budget Walk workflows for BTR acquisition projects.",
        "Fine-tuned Claude Sonnet on historical scope documents to identify community-specific patterns and eliminate repetitive manual drafting.",
        "Reduced scope creation effort from days to hours and won 1st place for highest operational impact solution in the corporate hackathon."
      ],
      technologies: ["AWS Bedrock", "Claude Sonnet", "Prompt Engineering", "Salesforce API", "Python"],
      icon: <Brain size={24} className="text-data-blue" />
    },
    {
      title: "DB-GPT for Datomica",
      company: "End-to-End Product Development",
      description: [
        "Built DB-GPT — an AI-powered chat interface for enterprise databases that enables business users to interact with complex datasets using natural language.",
        "Implemented intelligent context awareness, query history, and multi-turn dialogue for in-depth analysis, reducing dependency on technical teams.",
        "Accelerated decision-making by making data more accessible. Live deployment actively used by the Datomica team."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "ReactJS", "TypeScript", "Tailwind CSS", "Google Gemini", "MCP", "Langgraph"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "SSAS Cube to Snowflake Semantic Migration",
      company: "Intellytics Solutions",
      description: [
        "Modernized legacy SSAS cube architecture by migrating measures, dimensions, and calculated metrics into Snowflake schema-level objects.",
        "Designed semantic views replicating legacy cube functionality while improving flexibility and performance.",
        "Eliminated metric inconsistencies across BI reports and reduced dependency on cube-based infrastructure."
      ],
      technologies: ["Snowflake", "SQL", "Data Modeling", "Semantic View", "SSAS Cube"],
      icon: <Layers size={24} className="text-data-blue" />
    },
    {
      title: "MLS Data Pipeline",
      company: "Intellytics Solutions",
      description: [
        "Developed an end-to-end MLS data pipeline, integrating data from 800+ MLS sources for property acquisition and maintenance.",
        "Designed a standardized ingestion and transformation framework using dbt, ensuring schema adaptability and data consistency.",
        "Implemented Snowflake as the central repository for structured data, improving accessibility and governance."
      ],
      technologies: ["Python", "Snowflake", "dbt", "Airflow", "AWS Glue", "S3"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "Agile Data Ingestion & Reporting",
      company: "Intellytics Solutions",
      description: [
        "Automated data extraction from Jira via AWS Glue, staging it in S3 and transforming it using dbt for Agile reporting in Tableau.",
        "Developed Airflow DAGs to orchestrate ingestion and processing, ensuring a 12% efficiency improvement in Agile metric tracking.",
        "Delivered a unified reporting solution for 200+ Agile metrics, streamlining sprint tracking and KPI monitoring."
      ],
      technologies: ["Python", "Snowflake", "dbt", "Airflow", "AWS Glue", "S3"],
      icon: <FileText size={24} className="text-data-blue" />
    },
    {
      title: "Platform Usage Dashboard",
      company: "Intellytics Solutions",
      description: [
        "Designed an automated data pipeline to track usage metrics from 7+ sources, optimizing license management and usage tracking.",
        "Implemented structured ingestion and full reload strategies, reducing stale data occurrences and improving query performance by 30%.",
        "Built a real-time Usage Dashboard, empowering leadership with data insights and platform utilization analytics."
      ],
      technologies: ["Python", "Snowflake", "AWS Glue", "Airflow", "dbt"],
      icon: <FileText size={24} className="text-data-blue" />
    },
    {
      title: "Atlan Data Catalog Integration",
      company: "Intellytics Solutions",
      description: [
        "Integrated Atlan with Snowflake, Tableau, dbt, and Power BI, cataloging 125K+ assets and automating metadata ingestion for 1K+ assets.",
        "Developed custom workflows using APIs to extract, enrich, and sync metadata, improving data governance and accessibility.",
        "Implemented schema change alerts and failure monitoring, ensuring reliability and proactive issue resolution."
      ],
      technologies: ["Python", "Airflow", "AWS Glue"],
      icon: <Database size={24} className="text-data-blue" />
    },
    {
      title: "Healthcare MDM Integration",
      company: "Jupiter Healthcare (Freelance)",
      description: [
        "Integrated data from 300+ healthcare systems into a unified Master Data Management (MDM) system using Reltio MDM.",
        "Developed ETL pipelines to extract, transform, and load data from Reltio MDM into Snowflake using Kafka, ensuring real-time data consistency.",
        "Optimized data accessibility and governance, enhancing interoperability across healthcare data sources."
      ],
      technologies: ["Python", "Snowflake", "Kafka", "Reltio"],
      icon: <Database size={24} className="text-data-blue" />
    }
  ];

  const TOP_COUNT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, TOP_COUNT);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Key Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {visibleProjects.map((project, idx) => (
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

        {projects.length > TOP_COUNT && (
          <div className="flex justify-center mt-10">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="group gap-2">
              {showAll ? (
                <>
                  Show less <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Show {projects.length - TOP_COUNT} more projects{' '}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
