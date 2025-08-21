
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 space-y-5">
          <h1 className="opacity-0 animate-fade-in">
            <span className="text-gray-600 text-xl md:text-2xl block mb-2">Hello, I'm</span>
            <span className="text-gradient">DEEP KATBAMNA</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-0 animate-fade-in animate-delay-100">
            Lead Data Stack Developer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl opacity-0 animate-fade-in animate-delay-200">
            Specializing in building end-to-end data pipelines, optimizing data integration, 
            and implementing modern data architecture for enterprise solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in animate-delay-300">
            <a href="#contact">
              <Button className="bg-data-blue hover:bg-data-blue/90 transform transition-transform duration-300 hover:scale-105">Get In Touch</Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="border-data-blue text-data-blue hover:bg-data-blue/10 transform transition-transform duration-300 hover:scale-105">View Projects</Button>
            </a>
          </div>
          
          <div className="flex space-x-4 pt-6 opacity-0 animate-fade-in animate-delay-400">
            <a href="https://www.linkedin.com/in/deep-katbamna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-data-blue transition-colors transform hover:scale-125 duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/deepmihir" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-data-blue transition-colors transform hover:scale-125 duration-300">
              <Github size={20} />
            </a>
            <a href="mailto:deepmihir@gmail.com" aria-label="Email" className="hover:text-data-blue transition-colors transform hover:scale-125 duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-500">
          <div className="relative hover:transform hover:scale-105 transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-data-blue to-data-teal rounded-lg blur opacity-30 animate-pulse"></div>
            <div className="relative bg-card rounded-lg p-6 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">data_pipeline.py</div>
              </div>
              <pre className="text-xs md:text-sm font-mono overflow-x-auto p-2 bg-gray-900 text-gray-100 rounded">
                <code className="typing-animation">{`# Data pipeline orchestration
import snowflake.connector
import airflow
from airflow import DAG
from airflow.operators.python_operator import PythonOperator

def extract_mls_data():
    # Extract from 800+ MLS sources
    print("Extracting MLS data...")
    
def transform_data():
    # Standardize and normalize data
    print("Transforming with DBT...")
    
def load_to_snowflake():
    # Load to Snowflake warehouse
    print("Loading to Snowflake...")

# DAG definition
dag = DAG(
    'mls_data_pipeline',
    schedule_interval='0 */6 * * *',
    catchup=False
)

# Task definitions
extract_task = PythonOperator(
    task_id='extract_mls_data',
    python_callable=extract_mls_data,
    dag=dag
)

transform_task = PythonOperator(
    task_id='transform_data',
    python_callable=transform_data,
    dag=dag
)

load_task = PythonOperator(
    task_id='load_to_snowflake',
    python_callable=load_to_snowflake,
    dag=dag
)

# Task dependencies
extract_task >> transform_task >> load_task`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 md:mt-28">
        <div className="flex justify-center">
          <div className="animate-bounce hover:animate-pulse cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
