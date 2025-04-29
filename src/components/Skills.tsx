
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="data-card h-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx} 
            className="bg-secondary px-3 py-1.5 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Platforms & Warehouses",
      skills: ["Snowflake", "AWS Redshift", "Google BigQuery", "Azure Synapse"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "Scala", "Java", "Bash"]
    },
    {
      title: "Data Processing & ETL",
      skills: ["Airflow", "DBT", "AWS Glue", "Kafka", "Spark", "Databricks"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud Platform"]
    },
    {
      title: "Data Modeling & Design",
      skills: ["Star Schema", "Snowflake Schema", "Data Vault", "Kimball", "ERD"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jira", "Confluence"]
    }
  ];

  const certifications = [
    {
      name: "SnowPro Core Certification",
      issuer: "Snowflake",
      date: "Dec 2024",
      logo: "snowflake-logo"
    },
    {
      name: "Python - Programming for Everybody",
      issuer: "University of Michigan",
      date: "April 2021",
      logo: "python-logo"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, idx) => (
            <SkillCategory 
              key={idx}
              title={category.title}
              skills={category.skills}
            />
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
