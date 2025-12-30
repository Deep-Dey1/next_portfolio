import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <p className="text-accent text-center mb-2">
            Built with React, Tailwind CSS, and Node.js
          </p>
          
          <p className="text-accent text-center">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
