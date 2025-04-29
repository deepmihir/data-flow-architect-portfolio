
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold flex items-center text-data-blue">
          <span className="text-gradient">DEEP.K</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-data-blue transition-colors">About</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-data-blue transition-colors">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-data-blue transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-data-blue transition-colors">Skills</button>
          <button onClick={() => scrollToSection('blogs')} className="hover:text-data-blue transition-colors">Blogs</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-data-blue transition-colors">Contact</button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} size="icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm p-4">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="py-2 hover:text-data-blue transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="py-2 hover:text-data-blue transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="py-2 hover:text-data-blue transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="py-2 hover:text-data-blue transition-colors">Skills</button>
            <button onClick={() => scrollToSection('blogs')} className="py-2 hover:text-data-blue transition-colors">Blogs</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-data-blue transition-colors">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
