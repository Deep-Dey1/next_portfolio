import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql,
  SiGit, SiDocker 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="h-full flex items-center justify-center px-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Skills & Technologies</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="card flex flex-col items-center justify-center p-8 hover:scale-105 cursor-pointer"
              >
                <skill.icon size={48} style={{ color: skill.color }} className="mb-4" />
                <p className="text-primary font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
