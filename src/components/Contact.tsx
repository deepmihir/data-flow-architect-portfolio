
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <p className="text-lg mb-6">
              Feel free to reach out if you're looking for a data engineer, have questions, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 animate-pulse">
                  <Mail className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:deepmihir@gmail.com" className="hover:text-data-blue">
                    deepmihir@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 animate-pulse">
                  <Phone className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919924066755" className="hover:text-data-blue">
                    +91 9924066755
                  </a>
                </div>
              </div>
              
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 animate-pulse">
                  <MapPin className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Ahmedabad, India</p>
                </div>
              </div>
              
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 animate-pulse">
                  <Linkedin className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/deep-katbamna/" target="_blank" rel="noopener noreferrer" className="hover:text-data-blue">
                    linkedin.com/in/deep-katbamna
                  </a>
                </div>
              </div>
              
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 animate-pulse">
                  <Github className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/deepmihir" target="_blank" rel="noopener noreferrer" className="hover:text-data-blue">
                    github.com/deepmihir
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <div className="bg-secondary/50 rounded-lg p-6 shadow-lg relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-data-blue to-data-teal rounded-lg blur opacity-20"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                {submitted ? (
                  <div className="bg-green-50 text-green-700 p-4 rounded-md animate-fade-in">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-data-blue hover:bg-data-blue/90 text-white font-medium py-2 px-4 rounded-md transition-colors transform transition-transform duration-300 hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
