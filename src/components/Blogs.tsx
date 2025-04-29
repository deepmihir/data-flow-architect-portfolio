
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

interface Blog {
  title: string;
  description: string;
  url: string;
  date: string;
}

const Blogs = () => {
  const blogs: Blog[] = [
    {
      title: "Understanding MCP (Model Context Protocol) by simple example",
      description: "Exploring the Model Context Protocol concept through practical examples and implementation details, making complex AI interactions more accessible.",
      url: "https://medium.com/@deepmihir/understanding-mcp-model-context-protocol-by-simple-example-c6cefa4c18d9",
      date: "March 15, 2024"
    },
    {
      title: "Leveraging AWS Fargate for Scalable and Serverless Data Engineering",
      description: "How to implement efficient, scalable data pipelines using AWS Fargate's serverless computing platform for modern data engineering workflows.",
      url: "https://medium.com/@deepmihir/leveraging-aws-fargate-for-scalable-and-server-less-data-engineering-56fb6c021183",
      date: "February 22, 2024"
    },
    {
      title: "Unveiling Snowflake Cortex: Bringing AI and ML Capabilities to Snowflake Data Cloud",
      description: "An in-depth look at how Snowflake Cortex integrates AI and machine learning capabilities into the Snowflake Data Cloud ecosystem.",
      url: "https://medium.com/@deepmihir/unveiling-snowflake-cortex-bringing-ai-and-ml-capabilities-to-snowflake-data-cloud-9cb9b8505485",
      date: "January 10, 2024"
    }
  ];

  return (
    <section id="blogs" className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Recent Articles</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Insights and explorations on data engineering, cloud technologies, and AI implementations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BookOpen size={18} className="text-data-blue mr-2" />
                    <CardDescription>{blog.date}</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2 h-14">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 line-clamp-3 h-18">
                  {blog.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-data-blue hover:text-white group"
                  onClick={() => window.open(blog.url, '_blank')}
                >
                  Read on Medium
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
