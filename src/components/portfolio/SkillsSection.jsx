import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain, Code2, Database, Globe,
  Palette, Server, Terminal, Zap,
  Star, Award, TrendingUp
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const SkillsSection = () => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'project-stack',
      title: 'This Project Built With',
      icon: Zap,
      gradient: 'from-primary to-accent',
      skills: ['Vite', 'JavaScript', 'React', 'shadcn-ui', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['FAISS', 'Llama 3', 'Computer Vision', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Palette,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      gradient: 'from-orange-500 to-red-500',
      skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL']
    },
    {
      id: 'networking',
      title: 'SDN & Networking',
      icon: Globe,
      gradient: 'from-indigo-500 to-purple-600',
      skills: ['Software-Defined Networking', 'OpenFlow', 'Mininet', 'RYU Controller', 'Heuristics']
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: Terminal,
      gradient: 'from-gray-500 to-gray-700',
      skills: ['Git', 'VS Code', 'Jupyter Notebook', 'Linux', 'Power BI']
    }
  ];

  const achievements = [
    { icon: Award, title: 'NPTEL Computer Vision', subtitle: 'Elite + Top 1% (IIT Kharagpur)' },
    { icon: Star, title: 'GATE CS Qualified', subtitle: '2025 & 2026' },
    { icon: TrendingUp, title: 'SIH Hackathon', subtitle: 'Team Lead (2024)' }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-nebula opacity-5" />
        {isDark && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            A comprehensive skillset spanning modern technologies, frameworks, and development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full glass border-primary/15 group hover:border-primary/35 transition-all duration-500 relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                  />

                  <CardContent className="p-6 h-full relative z-10">
                    <div className="mb-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-base font-poppins font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: (index * 0.08) + (skillIndex * 0.03),
                            duration: 0.4
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Badge
                            variant="secondary"
                            className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-default
                              ${hoveredSkill === skill
                                ? 'bg-primary/20 text-primary border-primary/40 shadow-md'
                                : 'bg-secondary/30 text-foreground/80 hover:bg-secondary/40'
                              }`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-10">
            Certifications & Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass p-6 border-primary/15 hover:border-primary/35 transition-all duration-300 group">
                    <CardContent className="p-0 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/15 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <IconComponent className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h4 className="font-poppins font-semibold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm font-inter">
                        {achievement.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;