
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg">
              I'm Deep Katbamna, a Lead Data Stack Developer with expertise in building robust data pipelines and 
              implementing modern data architecture solutions for enterprise organizations.
            </p>
            <p>
              With experience at companies like Intellytics Solutions and Jupiter Healthcare, I've
              specialized in designing and optimizing data pipelines that handle large volumes of data
              from diverse sources. I have a strong focus on data quality, governance, and building
              scalable solutions using cloud technologies.
            </p>
            <p>
              My technical expertise includes Snowflake, Python, DBT, Airflow, and AWS services like 
              Glue and S3. I'm passionate about solving complex data challenges and delivering 
              data solutions that drive business value.
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
                  <p className="text-xl font-medium">4+ Years</p>
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
                  <p className="text-muted-foreground">Healthcare Systems Unified</p>
                  <p className="text-xl font-medium">300+</p>
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
