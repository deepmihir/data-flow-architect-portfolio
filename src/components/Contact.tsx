import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import {
  CALENDLY_URL,
  ENQUIRY_TYPES,
  EnquiryFormData,
  FORMSPREE_ID,
  getBookCallHref,
  submitEnquiry,
  WEB3FORMS_KEY,
} from '@/lib/site';

const initialFormState: EnquiryFormData = {
  name: '',
  email: '',
  company: '',
  enquiryType: 'Hiring',
  message: '',
};

const Contact = () => {
  const [formState, setFormState] = useState<EnquiryFormData>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formConfigured = Boolean(FORMSPREE_ID || WEB3FORMS_KEY);
  const bookCallHref = getBookCallHref();
  const calendlyConfigured = Boolean(CALENDLY_URL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitEnquiry(formState);
      setSubmitted(true);
      setFormState(initialFormState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mt-4">
          Book a call or send an enquiry — hiring, consulting, Agentworkx, or training.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div id="contact-book" className="bg-secondary/50 rounded-lg p-6 shadow-lg relative h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-data-blue to-data-teal rounded-lg blur opacity-20"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-data-blue" size={20} />
                <h3 className="text-xl font-semibold">Book a call</h3>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                Prefer a live conversation? Schedule a 30-minute intro to discuss hiring, consulting, Agentworkx, or
                training.
              </p>

              {calendlyConfigured ? (
                <>
                  <div className="rounded-md overflow-hidden border bg-background mb-4 min-h-[420px]">
                    <iframe
                      title="Schedule a call with Deep Katbamna"
                      src={`${CALENDLY_URL}${CALENDLY_URL.includes('?') ? '&' : '?'}hide_gdpr_banner=1`}
                      className="w-full h-[420px] border-0"
                      loading="lazy"
                    />
                  </div>
                  <Button asChild className="bg-data-blue hover:bg-data-blue/90 w-full sm:w-auto">
                    <a href={bookCallHref} target="_blank" rel="noopener noreferrer" className="gap-2">
                      Open in Calendly
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground bg-background/80 border rounded-md p-4">
                    Calendly is not configured yet. Add <code className="text-xs">VITE_CALENDLY_URL</code> to your{' '}
                    <code className="text-xs">.env</code> file, then restart the dev server.
                  </p>
                  <Button asChild variant="outline" className="border-data-blue text-data-blue hover:bg-data-blue/10">
                    <a href="#contact-enquiry">Send an enquiry instead</a>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div id="contact-enquiry" className="bg-secondary/50 rounded-lg p-6 shadow-lg relative h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-data-teal to-data-blue rounded-lg blur opacity-20"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Send className="text-data-blue" size={20} />
                <h3 className="text-xl font-semibold">Send an enquiry</h3>
              </div>

              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md animate-fade-in">
                  Thanks — I usually reply within 1–2 business days.
                </div>
              ) : (
                <>
                  {!formConfigured && (
                    <p className="text-sm text-muted-foreground bg-background/80 border rounded-md p-4 mb-4">
                      Form backend not configured. Set <code className="text-xs">VITE_FORMSPREE_ID</code> or{' '}
                      <code className="text-xs">VITE_WEB3FORMS_KEY</code> in your <code className="text-xs">.env</code>{' '}
                      file.
                    </p>
                  )}

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all bg-background"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all bg-background"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company <span className="text-muted-foreground">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all bg-background"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="enquiryType" className="block text-sm font-medium mb-1">
                          Enquiry type
                        </label>
                        <select
                          id="enquiryType"
                          value={formState.enquiryType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all bg-background"
                          required
                        >
                          {ENQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-data-blue transition-all bg-background"
                        placeholder="Tell me about your project, role, or question."
                        required
                      />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <Button
                      type="submit"
                      disabled={!formConfigured || isSubmitting}
                      className="w-full bg-data-blue hover:bg-data-blue/90 gap-2"
                    >
                      <Send size={16} />
                      {isSubmitting ? 'Sending…' : 'Send enquiry'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="flex items-center gap-3 data-card p-4">
            <Mail className="text-data-blue shrink-0" size={18} />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <a href="mailto:deepmihir@gmail.com" className="text-sm hover:text-data-blue">
                deepmihir@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 data-card p-4">
            <MapPin className="text-data-blue shrink-0" size={18} />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm">Ahmedabad, India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 data-card p-4">
            <Linkedin className="text-data-blue shrink-0" size={18} />
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/deep-katbamna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-data-blue"
              >
                linkedin.com/in/deep-katbamna
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 data-card p-4">
            <Github className="text-data-blue shrink-0" size={18} />
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <a
                href="https://github.com/deepmihir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-data-blue"
              >
                github.com/deepmihir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
