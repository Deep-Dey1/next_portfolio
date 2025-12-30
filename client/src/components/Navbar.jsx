import React from 'react';
import { HiHome, HiUser, HiCode, HiBriefcase, HiMail } from 'react-icons/hi';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', id: 'home', icon: HiHome },
    { name: 'About', id: 'about', icon: HiUser },
    { name: 'Skills', id: 'skills', icon: HiCode },
    { name: 'Projects', id: 'projects', icon: HiBriefcase },
    { name: 'Contact', id: 'contact', icon: HiMail },
  ];

  return (
    <nav className="h-screen bg-light flex flex-col w-64 relative">
      {/* Navigation Items */}
      <div className="flex-1 py-8">{navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-4 px-8 py-4 transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-primary text-white border-r-4 border-primary'
                : 'text-accent hover:bg-gray-50 hover:text-primary'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>
      
      {/* Separation Line */}
      <div className="absolute right-0 top-8 bottom-8 w-0.5 bg-primary"></div>
    </nav>
  );
};

export default Navbar;
