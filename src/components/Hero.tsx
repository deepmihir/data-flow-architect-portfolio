import React from 'react';
import { Calendar, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { CALENDLY_URL, getBookCallHref, SITE_TITLE } from '@/lib/site';

const Hero = () => {
  const bookCallHref = getBookCallHref();
  const calendlyConfigured = Boolean(CALENDLY_URL);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 md:pt-28 md:pb-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h1 className="opacity-0 animate-fade-in">
              <span className="text-gray-500 text-lg md:text-xl font-medium block mb-3 tracking-wide">
                Hello, I&apos;m
              </span>
              <span className="text-gradient">DEEP KATBAMNA</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-foreground/90 opacity-0 animate-fade-in animate-delay-100">
              {SITE_TITLE}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed opacity-0 animate-fade-in animate-delay-200">
            At Kenexai&apos;s Product Solution Architect group, I lead architecture and hands-on engineering for{' '}
            <span className="text-foreground font-medium">Agentworkx</span> — an accelerator for companies adopting AI
            agent capabilities — while delivering Snowflake and dbt platforms on AWS for UK consumer finance and credit
            card analytics.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5 pt-2 opacity-0 animate-fade-in animate-delay-300">
            <a
              href={bookCallHref}
              target={calendlyConfigured ? '_blank' : undefined}
              rel={calendlyConfigured ? 'noopener noreferrer' : undefined}
            >
              <Button
                size="lg"
                className="bg-data-blue hover:bg-data-blue/90 text-white shadow-lg shadow-data-blue/25 h-12 px-8 text-base gap-2"
              >
                <Calendar size={18} />
                Book a call
              </Button>
            </a>
            <a href="#contact-enquiry" className="inline-flex">
              <Button
                variant="ghost"
                className="text-data-blue hover:text-data-blue hover:bg-data-blue/5 h-11 px-3 gap-2 font-medium"
              >
                <Send size={16} />
                Send an enquiry
              </Button>
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline px-1"
            >
              View work
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 opacity-0 animate-fade-in animate-delay-400">
            <a
              href="https://www.linkedin.com/in/deep-katbamna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground/70 hover:text-data-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/deepmihir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground/70 hover:text-data-blue transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:deepmihir@gmail.com"
              aria-label="Email"
              className="text-muted-foreground/70 hover:text-data-blue transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-500">
          <div className="space-y-8">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              End-to-end data platforms, AI agent frameworks, and governed analytics — from architecture through
              production delivery.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <p className="text-2xl font-semibold text-data-blue tracking-tight">800+</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-snug">MLS sources integrated</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-data-blue tracking-tight">125K+</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-snug">Assets cataloged</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-data-blue tracking-tight">5+</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-snug">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-data-blue tracking-tight">1st</p>
                <p className="text-xs text-muted-foreground mt-1.5 leading-snug">Hackathon place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
