
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, GitHub } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <p className="text-lg mb-6">
              Feel free to reach out if you're looking for a data engineer, have questions, or just want to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <Mail className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:deepmihir@gmail.com" className="hover:text-data-blue">
                    deepmihir@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <Phone className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919924066755" className="hover:text-data-blue">
                    +91 9924066755
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <MapPin className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Ahmedabad, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <Linkedin className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-data-blue">
                    linkedin.com/in/deep-katbamna
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <GitHub className="text-data-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-data-blue">
                    github.com/deepkatbamna
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-data-blue hover:bg-data-blue/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
