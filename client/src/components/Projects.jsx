import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { BsMoon, BsSun } from 'react-icons/bs';

const Projects = ({ setActiveSection, isDarkMode, setIsDarkMode }) => {
  const projects = [
    {
      title: 'NavVoice – AI Assistive Device for Visually Impaired',
      description: 'Designed a wearable device built using Raspberry Pi 5 and deep learning (BLIP-Image Captioning, FaceNet, Tesseract-OCR, GTTS) for real-time environment knowledge, document reading, face recognition, and GPS-based emergency alerts.',
      tags: ['Raspberry Pi', 'Deep Learning', 'BLIP', 'FaceNet', 'Tesseract-OCR'],
      demo: 'https://www.youtube.com/watch?v=V9Kyx8cnkaY',
      code: 'https://github.com/Deep-Dey1/Nav-Voice-Assistive-Device',
      media: { type: 'youtube', url: 'https://www.youtube.com/embed/V9Kyx8cnkaY' },
      extra: [{ label: 'IEEE Conference', url: '#' }]
    },
    {
      title: 'Neural Radiance Fields (NeRF) Implementation',
      description: 'Implemented NeRF using PyTorch and CUDA to synthesize 3D scenes from sparse 2D images. Optimized volumetric rendering with positional encoding and ray marching, achieving realistic reconstructions with GPU acceleration.',
      tags: ['PyTorch', 'CUDA', 'NeRF', 'Computer Vision'],
      demo: 'https://www.linkedin.com/posts/deepdey0210_machinelearning-nerf-cuda-activity-7226890047755567106-WD-l',
      code: 'https://github.com/Deep-Dey1/NeRF-IMPLEMENTATION',
      media: { type: 'gif', url: 'https://raw.githubusercontent.com/Deep-Dey1/NeRF-IMPLEMENTATION/main/novel_views/novel_views.gif' }
    },
    {
      title: 'Chatbot – Fine-Tuned Mistral 7B LLM',
      description: 'Fine-tuned Mistral v0.1 7B language model using SFTL, PEFT and LORA techniques on Alpaca Dataset. Built RAG pipeline using FAISS and the fine-tuned Mistral-7B model; developed three model variants and deployed using Gradio.',
      tags: ['LLM', 'Mistral', 'LORA', 'RAG', 'FAISS', 'Gradio'],
      demo: 'https://www.youtube.com/watch?v=efYL0NAV1uY',
      code: 'https://github.com/Deep-Dey1/working-with-Large-Language-Models',
      media: { type: 'youtube', url: 'https://www.youtube.com/embed/efYL0NAV1uY' },
      extra: [
        { label: 'HuggingFace', url: 'https://huggingface.co/deep0210' },
        { label: 'IEEE Paper', url: 'https://ieeexplore.ieee.org/abstract/document/11158789/' }
      ]
    },
    {
      title: '3D Asset Manager',
      description: 'Developed a full-stack web platform for 3D artists and developers to upload, organize, and preview 3D models. Implemented RESTful API with interactive 3D previews powered by Three.js and model-viewer. Built using Flask, PostgreSQL, Tailwind CSS, and MongoDB.',
      tags: ['Flask', 'PostgreSQL', 'Three.js', 'MongoDB', 'Tailwind CSS'],
      demo: 'https://3d-asset-manager.deepdey.me/',
      demoLabel: 'Visit Site',
      code: 'https://github.com/Deep-Dey1/3D-asset-manager',
      media: { type: 'gif', url: '/3d-asset.gif' }
    },
    {
      title: 'goodForecast',
      description: 'An interactive weather forecasting web application built using Express, React and Node.js. Features interactive map to locate places and get weather information, plus air quality reports for any region.',
      tags: ['React', 'Express', 'Node.js', 'API Integration'],
      demo: 'https://goodforecast.deepdey.me/',
      demoLabel: 'Visit Site',
      code: 'https://github.com/Deep-Dey1/GoodForecast',
      media: { type: 'gif', url: '/forecast.gif' }
    },
    {
      title: 'notes – MERN Note Taking App',
      description: 'An interactive MERN-based note taking application. Implemented rate limiting using Upstash and Redis to control request limits. Features user verification via OTP using Resend API, and interactive password strength measurement.',
      tags: ['MERN', 'Redis', 'Upstash', 'Authentication', 'OTP'],
      demo: 'https://notes.deepdey.me/',
      demoLabel: 'Visit Site',
      code: 'https://github.com/Deep-Dey1/NoteBook-MernApp',
      media: { type: 'gif', url: '/notes.gif' }
    },
    {
      title: 'Real-Time Fire Detection and Alert System',
      description: 'An embedded device built using Raspberry Pi and YOLOv11n model to detect fire and send alerts via Twilio API. Sends real-time live footage for alarm verification. Remote camera control via mobile application.',
      tags: ['Raspberry Pi', 'YOLOv11', 'Twilio', 'Computer Vision', 'IoT'],
      code: 'https://github.com/Deep-Dey1/ML-Based-Fire-Detection-System',
      media: { type: 'image', url: 'https://raw.githubusercontent.com/Deep-Dey1/ML-Based-Fire-Detection-System/main/project%20images/poroject%20.jpg' },
      extra: [
        { label: 'IEEE Conference', url: 'https://www.linkedin.com/posts/deepdey0210_ieee-icccnt2025-research-activity-7366913640987312128-TqSp' },
        { label: 'Project EXPO Winner', url: 'https://www.linkedin.com/posts/deepdey0210_i-am-glad-to-share-that-i-secured-2nd-position-activity-7287110022491217920-_p1t' }
      ]
    },
    {
      title: 'Virtual Keyboard',
      description: 'A fun Windows application to simulate a mechanical keyboard and find your typing speed. Built using Python and Tkinter. Available for download on Windows platform.',
      tags: ['Python', 'Tkinter', 'Desktop App'],
      demo: 'https://github.com/Deep-Dey1/virtual-keyboard/releases/download/VirtualKeyboardv0.0.1/VirtualKeyboard.exe',
      code: 'https://github.com/Deep-Dey1/virtual-keyboard',
      media: { type: 'image', url: '/keyboard.png' }
    },
    {
      title: 'Let\'s Collaborate!',
      description: 'Interested in working together? I\'m always excited to collaborate on innovative projects and bring creative ideas to life. Let\'s build something amazing!',
      tags: ['Collaboration', 'Innovation', 'Team Work'],
      isCollaborationCard: true,
      media: { type: 'image', url: 'https://raw.githubusercontent.com/Deep-Dey1/virtual-keyboard/refs/heads/main/keycap.png' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`h-full flex flex-col overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Top Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md px-4 md:px-12 py-3 md:py-4 flex items-center justify-between"
      >
        {/* Left Side - Name and Image */}
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQG3exui6k5oqw/profile-displayphoto-scale_200_200/B4DZguA7WZGkAY-/0/1753118654294?e=1768435200&v=beta&t=9w76hiZ0k2HNuLwmqqxUuo889aaZO-n1gDTWShSmKn8"
            alt="Deep Dey"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary object-cover"
          />
          <h1 className="text-lg md:text-2xl font-bold text-primary">Deep Dey</h1>
        </div>

        {/* Right Side - Navigation Links */}
        <div className="flex items-center gap-2 md:gap-6">
          <button
            onClick={() => setActiveSection('home')}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white text-sm md:text-base rounded-lg hover:bg-secondary font-medium transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white text-sm md:text-base rounded-lg hover:bg-secondary font-medium transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </motion.div>

      {/* Projects Content */}
      <div className="flex-1 overflow-y-auto px-4 md:px-12 py-6 md:py-12">
        <div className="w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Media Section */}
                {project.media && (
                  <div className="w-full h-80 bg-gray-100">
                    {project.media.type === 'youtube' && (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`${project.media.url}?autoplay=1&mute=1&loop=1&playlist=${project.media.url.split('/').pop()}`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    )}
                    {project.media.type === 'gif' && (
                      <img
                        src={project.media.url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.media.type === 'image' && (
                      <img
                        src={project.media.url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
                  <p className="text-accent mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.isCollaborationCard ? (
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://github.com/Deep-Dey1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-3 bg-primary text-white text-sm rounded-lg hover:bg-secondary transition-all duration-300 font-semibold text-center"
                      >
                        Visit GitHub for More Projects
                      </a>
                      <button
                        onClick={() => setActiveSection('contact')}
                        className="w-full px-4 py-3 border-2 border-primary text-primary text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
                      >
                        Let's Build Something Together
                      </button>
                      <button
                        onClick={() => setActiveSection('home')}
                        className="w-full px-4 py-2 bg-gray-100 text-primary text-sm rounded-lg hover:bg-gray-200 transition-all duration-300"
                      >
                        Go Home
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-secondary transition-all duration-300"
                        >
                          <HiExternalLink size={16} />
                          {project.demoLabel || 'Demo'}
                        </a>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <HiCode size={16} />
                          Repository
                        </a>
                      )}
                      {project.extra && project.extra.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-primary text-sm rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 right-4 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 z-50 border border-gray-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <BsSun size={16} className="text-primary" /> : <BsMoon size={16} className="text-primary" />}
      </button>
    </section>
  );
};

export default Projects;
