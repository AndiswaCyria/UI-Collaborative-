
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="text-purple text-3xl">&#9632;</span>
              UI<span className="text-purple">Portfolio</span>
            </a>
            <p className="text-text-light mb-6 max-w-md">
              Creating beautiful digital experiences through thoughtful UI design and 
              development. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {["twitter", "dribbble", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-text-light hover:bg-purple hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-text-light hover:text-purple transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {["UI Design", "Web Development", "App Design", "Branding"].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-text-light hover:text-purple transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light text-sm">
              &copy; {new Date().getFullYear()} UIPortfolio. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-text-light text-sm hover:text-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-light text-sm hover:text-purple transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
