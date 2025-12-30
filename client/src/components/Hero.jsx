import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaYoutube } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { BsTwitterX, BsMoon, BsSun } from 'react-icons/bs';

const Hero = ({ setActiveSection, isDarkMode, setIsDarkMode }) => {
  const [contributionData, setContributionData] = useState(null);

  useEffect(() => {
    // Fetch GitHub contribution data
    fetch(`https://github-contributions-api.jogruber.de/v4/Deep-Dey1?y=last`)
      .then(res => res.json())
      .then(data => setContributionData(data))
      .catch(err => console.error('Error fetching contributions:', err));
  }, []);

  const experiences = [
    {
      company: "TDK Navitasys India Pvt. Ltd",
      location: "Gurugram",
      role: "Software Engineer Intern",
      period: "June 2025 – August 2025",
      certificate: "https://www.linkedin.com/in/deepdey0210/overlay/1756421323764/single-media-viewer/?profileId=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g",
      responsibilities: [
        "Developed InBrief, an Android application that provides daily updates on the company's internal affairs.",
        "Designed and deployed an intelligent chatbot to assist employees with machine breakdown issues, reducing downtime by over 95%.",
        "Created web-based dashboards using Python and Flask for production, asset, and business management."
      ]
    },
    {
      company: "Celebal Technologies",
      location: "Remote - Jaipur",
      role: "Data Science Intern",
      period: "May 2025 - July 2025",
      certificate: "https://www.linkedin.com/in/deepdey0210/overlay/1756421387487/single-media-viewer/?profileId=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g",
      responsibilities: [
        "Built machine learning models to find the effectiveness of courseworks and analyzing the performance of learners of an edtech platform.",
        "Handled data cleaning, EDA, and feature engineering to boost model performance."
      ]
    },
    {
      company: "Zidio Development",
      location: "Remote - Bengaluru",
      role: "Web Development Intern",
      period: "June 2024 – August 2024",
      certificate: "https://www.linkedin.com/posts/deepdey0210_webdevelopment-mernstack-internship-activity-7237835688883191809-fom8/?utm_source=share&utm_medium=member_desktop",
      responsibilities: [
        "Led a team of 7, ensuring seamless communication and collaboration and on time project delivery.",
        "Developed MERN based projects: Resume Builder and Job Finder web applications.",
        "Utilized React, Express, MongoDB, and Node.js.",
        "Implemented rate limiting using redis in the applications."
      ]
    },
    {
      company: "Damodar Valley Corporation",
      location: "Jharkhand",
      role: "Network Architecture Apprentice",
      period: "December 2023 - January 2024",
      certificate: "https://www.linkedin.com/posts/deepdey0210_vocationaltraining-computernetworking-networksecurity-activity-7199071087060520960-X_da/?utm_source=share&utm_medium=member_desktop",
      responsibilities: [
        "Built network prototypes using cisco packet tracer.",
        "Configured networking devices L2 Switches and Routers and tested networks using netsh.",
        "Built SCADA simulations using MaxDNA."
      ]
    },
    {
      company: "CodeSoft",
      location: "Kolkata",
      role: "Machine Learning Intern",
      period: "May 2023",
      certificate: "https://www.linkedin.com/in/deepdey0210/overlay/1721945626853/single-media-viewer/?profileId=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g",
      responsibilities: [
        "Built spam email detection model using Random forest algorithm.",
        "Built textual review analyzer using DistilBERT to analyze reviews as positive and negative."
      ]
    }
  ];
  const publications = [
    {
      title: "Enhanced Language Generation Capabilities of Mistral 7B using Quantized Parameter Efficient Fine-Tuning with LoRA and RAG",
      conference: "IEEE ICCTDC 2025 - International Conference on Computing Technologies and Data Communication",
      organizer: "Malnad College of Engineering",
      status: "Published in IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11158789",
      certificate: "https://www.linkedin.com/posts/deepdey0210_icctdc2025-research-llm-activity-7366952317348118529-3CUL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g",
      extra: "https://huggingface.co/deep0210/hybrid-finetuned-rag-mistral-llm",
      extraLabel: "Model on HuggingFace"
    },
    {
      title: "RTFD: Real-Time Fire Detection and Alert System using YOLOv11n and Raspberry Pi",
      conference: "16th ICCCNT 2025 - IEEE International Conference on Computing, Communication and Networking Technologies",
      organizer: "IIT Indore, India",
      status: "To be published in IEEE Xplore",
      certificate: "https://www.linkedin.com/posts/deepdey0210_ieee-icccnt2025-research-activity-7366913640987312128-TqSp/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g"
    },
    {
      title: "Self-Supervised Learning in Image Classification",
      conference: "SmartCom - 9th International Conference on Smart Trends in Computing and Communications",
      organizer: "Springer",
      status: "Published",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-7520-3_23",
      certificate: "https://www.linkedin.com/posts/deepdey0210_machinelearning-selfsupervisedlearning-imageclassification-activity-7324796417955254272--AYt/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJLGlUBVYPKyK_0JcjefQ4r2ZJaAHKju0g"
    },
    {
      title: "NavVoice: An AI based Assistive Device for visually challenged peoples",
      conference: "IEEE",
      organizer: "",
      status: "Under Review",
      description: "A wearable device which will assist visually challenged people with their day to day activities"
    }
  ];

  const education = [
    {
      institution: "Manipal University Jaipur",
      degree: "BTech (Honors) in Computer Science And Engineering",
      specialization: "Specialization in Intelligent Systems",
      grade: "CGPA: 9.21",
      period: "Sept 2022 - July 2026"
    },
    {
      institution: "Kendriya Vidyalaya Shahdol",
      degree: "XIIth (CBSE)",
      specialization: "Mathematics, Computer Science, Physics, Chemistry, English",
      grade: "Percentage: 84.6%",
      period: "April 2022"
    },
    {
      institution: "Kendriya Vidyalaya Shahdol, Madhya Pradesh",
      degree: "Xth (CBSE)",
      specialization: "",
      grade: "Percentage: 90.6%",
      period: "April 2020"
    }
  ];

  return (
    <section className={`h-full px-4 md:px-16 py-6 md:py-12 overflow-y-auto relative transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 right-4 p-2 md:p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 z-50 border border-gray-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <BsSun size={16} className="text-primary" /> : <BsMoon size={16} className="text-primary" />}
      </button>

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Column */}
        <div className="w-full md:w-[60%] flex flex-col gap-6 md:gap-8">
        {/* Introduction Card - Order 1 on mobile, stays in left column on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-lg p-6 md:p-12 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-primary">
            Hi, I'm Deep Dey
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-secondary">
            Software Engineer
          </h2>
          <p className="text-accent text-lg leading-relaxed mb-6">
            My expertise includes <span className="bg-primary text-white px-2 py-1 rounded">Full-Stack Development</span>, <span className="bg-primary text-white px-2 py-1 rounded">Machine Learning</span> and <span className="bg-primary text-white px-2 py-1 rounded">DevOps</span>.
          </p>
          <p className="text-accent text-lg leading-relaxed mb-8">
            I enjoy collaborating—let's build something together.
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center md:justify-start">
            <button
              onClick={() => setActiveSection('contact')}
              className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
            <a
              href="https://github.com/Deep-Dey1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepdey0210/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.codechef.com/users/deep_dey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="CodeChef"
            >
              <SiCodechef size={20} />
            </a>
            <a
              href="https://x.com/Deep_Dey_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="X"
            >
              <BsTwitterX size={20} />
            </a>
            <a
              href="https://www.youtube.com/@22ndofautumn71"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://huggingface.co/deep0210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              aria-label="Hugging Face"
              title="Hugging Face"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-3-8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm-3 1c-2.5 0-4.5 1.5-5 3.5.5 1.5 2.5 2.5 5 2.5s4.5-1 5-2.5c-.5-2-2.5-3.5-5-3.5z"/>
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1ZpmL8gk90Qjzv_jlqBIBxxZOxCp-UXvg/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
              aria-label="Resume"
            >
              <FaFileAlt size={20} />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-shrink-0 order-first md:order-last">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQG3exui6k5oqw/profile-displayphoto-scale_200_200/B4DZguA7WZGkAY-/0/1753118654294?e=1768435200&v=beta&t=9w76hiZ0k2HNuLwmqqxUuo889aaZO-n1gDTWShSmKn8"
            alt="Deep Dey"
            className="w-32 h-32 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
      </motion.div>

      {/* GitHub Contribution Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full"
      >
        <div className="mb-4">
          <span className="text-sm font-normal text-accent">
            {contributionData?.total?.lastYear || '0'} contributions in the last year
          </span>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://ghchart.rshah.org/0f172a/Deep-Dey1" 
            alt="Deep Dey's GitHub Contributions"
            className="w-full max-w-4xl"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Live Code Editor and Preview */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Code Editor Side */}
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden">
            <div className="bg-[#2d2d30] px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">Button.jsx</span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">SeeProjectsButton</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-yellow-300">()</span>{' '}
                <span className="text-purple-400">=&gt;</span>{' '}
                <span className="text-yellow-300">{'{'}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                className="ml-4"
              >
                <span className="text-purple-400">return</span>{' '}
                <span className="text-yellow-300">(</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="ml-8"
              >
                <span className="text-gray-400">&lt;</span>
                <span className="text-green-400">button</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="ml-12"
              >
                <span className="text-blue-300">className</span>
                <span className="text-white">=</span>
                <span className="text-orange-300">"animate-pulse..."</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.6 }}
                className="ml-8"
              >
                <span className="text-gray-400">&gt;</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                className="ml-12"
              >
                <span className="text-orange-300">See Projects</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.0 }}
                className="ml-8"
              >
                <span className="text-gray-400">&lt;/</span>
                <span className="text-green-400">button</span>
                <span className="text-gray-400">&gt;</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
                className="ml-4"
              >
                <span className="text-yellow-300">)</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.4 }}
              >
                <span className="text-yellow-300">{'}'}</span>
              </motion.div>
            </div>
          </div>

          {/* Live Preview Side */}
          <div className="bg-gray-50 rounded-xl border-2 border-gray-200 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Live Preview</p>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.6 }}
                onClick={() => setActiveSection('projects')}
                className="relative px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-secondary transition-all duration-300 cursor-pointer"
              >
                <motion.span
                  animate={{ 
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  See Projects
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-primary"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Work Experience - Mobile Only (shows in correct order on mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-3xl shadow-lg p-6 w-full md:hidden"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Work Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-6 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                  <p className="text-accent font-medium">{exp.company}, {exp.location}</p>
                </div>
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-secondary transition-all duration-300"
                >
                  Certificate
                </a>
              </div>
              <p className="text-sm text-accent mb-3">{exp.period}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-accent text-sm leading-relaxed flex">
                    <span className="mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Research Publications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Research Publications</h3>
        <div className="space-y-3">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-3 last:pb-0">
              <h4 className="text-base font-semibold text-primary mb-2">{pub.title}</h4>
              <p className="text-sm text-accent mb-2">
                {pub.conference}
                {pub.organizer && `, ${pub.organizer}`}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">
                  {pub.status}
                </span>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-secondary transition-all duration-300"
                  >
                    View Paper
                  </a>
                )}
                {pub.certificate && (
                  <a
                    href={pub.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-primary text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Certificate
                  </a>
                )}
                {pub.extra && (
                  <a
                    href={pub.extra}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-primary text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {pub.extraLabel}
                  </a>
                )}
              </div>
              {pub.description && (
                <p className="text-sm text-accent leading-relaxed">{pub.description}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-3 last:pb-0">
              <h4 className="text-lg font-semibold text-primary">{edu.institution}</h4>
              <p className="text-accent font-medium mb-1">{edu.degree}</p>
              {edu.specialization && (
                <p className="text-sm text-accent mb-2">{edu.specialization}</p>
              )}
              <div className="flex justify-between items-center">
                <p className="text-sm text-accent">{edu.period}</p>
                <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[40%] flex flex-col gap-6 md:gap-8">
      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full hidden md:block"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Work Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 pb-6 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                  <p className="text-accent font-medium">{exp.company}, {exp.location}</p>
                </div>
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary text-white px-3 py-1 rounded-full hover:bg-secondary transition-all duration-300"
                >
                  Certificate
                </a>
              </div>
              <p className="text-sm text-accent mb-3">{exp.period}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-accent text-sm leading-relaxed flex">
                    <span className="mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills and Tools */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Skills and Tools</h3>
        <div className="space-y-3">
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Languages</h4>
            <p className="text-sm text-accent">C++, Python, Java, JavaScript, C, HTML, CSS</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Frameworks</h4>
            <p className="text-sm text-accent">React, Node.js, Express, Flask, FastAPI, Pandas, NumPy, Matplotlib</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Databases</h4>
            <p className="text-sm text-accent">MySQL, MongoDB, PostgreSQL, Redis</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Tools</h4>
            <p className="text-sm text-accent">Git, Docker, Jenkins, Postman, Linux, Power BI</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Expertise</h4>
            <p className="text-sm text-accent">Full Stack, DevOps, ML/DL, NLP, DSA, OOP, APIs, DBMS</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h4 className="text-base font-semibold text-primary mb-1">Embedded</h4>
            <p className="text-sm text-accent">Raspberry Pi, Arduino</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 w-full flex flex-col justify-center"
      >
        <div className="flex flex-col items-center justify-center h-full py-8">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Let's Work Together</h3>
          <p className="text-accent text-center mb-8 text-lg max-w-md">
            Explore my projects or get in touch to discuss collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('projects')}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore My Projects
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
