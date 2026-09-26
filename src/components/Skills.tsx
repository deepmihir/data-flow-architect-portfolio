import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  featured?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, featured = false }) => {
  return (
    <div className={`data-card h-full ${featured ? 'border-data-blue/30 bg-data-blue/5' : ''}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              featured ? 'bg-data-blue/10 text-data-blue' : 'bg-secondary'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const featuredSkills = [
    'Snowflake',
    'dbt',
    'Airflow',
    'AWS',
    'Python',
    'SQL',
    'RAG / LLMs',
    'Product Solution Architecture',
  ];

  const skillCategories = [
    {
      title: 'Data Platforms & Orchestration',
      skills: ['Snowflake', 'dbt', 'Apache Airflow', 'AWS Glue', 'Kafka', 'Spark'],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'S3', 'Lambda', 'Fargate', 'Docker', 'CI/CD'],
    },
    {
      title: 'AI & Agent Platforms',
      skills: ['RAG', 'LLMs', 'Vector Search', 'MCP', 'Prompt Engineering', 'LangGraph'],
    },
    {
      title: 'Programming & Modeling',
      skills: ['Python', 'SQL', 'Data Modeling', 'Dimensional Modeling', 'Semantic Layers'],
    },
    {
      title: 'Governance & Quality',
      skills: ['Data Quality', 'Lineage', 'PCI/PII Controls', 'Metadata Catalogs', 'Monitoring'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Jira', 'Tableau', 'Atlan', 'Terraform'],
    },
  ];

  const certifications = [
    {
      name: 'SnowPro Core Certification',
      issuer: 'Snowflake',
      date: 'Dec 2024',
      logo: 'snowflake-logo',
    },
    {
      name: 'Python - Programming for Everybody',
      issuer: 'University of Michigan',
      date: 'April 2021',
      logo: 'python-logo',
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Certifications</h2>

        <div className="mt-12">
          <SkillCategory title="Core Stack" skills={featuredSkills} featured />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} title={category.title} skills={category.skills} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="data-card flex">
                <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <span className="text-lg font-medium text-primary">{cert.logo.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm mt-1">Issued: {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
