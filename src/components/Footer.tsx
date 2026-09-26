import React from 'react';
import { SITE_TITLE } from '@/lib/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="font-semibold text-data-blue text-gradient">DEEP KATBAMNA</p>
              <p className="text-sm text-muted-foreground max-w-md">{SITE_TITLE}</p>
            </div>

            <div className="text-sm text-muted-foreground">
              © {currentYear} Deep Katbamna. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
