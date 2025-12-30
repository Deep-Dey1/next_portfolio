import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="h-full flex items-center justify-center px-12">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">About Me</h2>
          <div className="space-y-6">
            <p className="text-accent text-lg leading-relaxed">
              I'm a passionate software developer with expertise in building modern web applications. 
              I specialize in creating elegant, efficient, and scalable solutions that solve real-world problems.
            </p>
            <p className="text-accent text-lg leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy working on 
              challenging projects that push the boundaries of what's possible on the web.
            </p>
            <p className="text-accent text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
