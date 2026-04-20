import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const AboutSection = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { label: "Years Experience", value: "1+", color: "primary" },
    { label: "Projects Completed", value: "15+", color: "accent" },
    { label: "CGPA", value: "8.01", color: "primary" },
    { label: "Certifications", value: "3+", color: "accent" },
  ];

  const experiences = [
  {
    company: "Premade Innovations Pvt Ltd",
    role: "AI & ML Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    highlights: [
      "Built a hybrid multilingual RAG chatbot using FAISS, Llama 3 GGUF, and SERP API",
      "Developed a FastAPI backend with MongoDB persistence and translation pipelines",
      "Enabled document-aware, multilingual, and image-capable conversations"
    ]
  },
  {
    company: "FOXAISR",
    role: "Full Stack Web Development Intern",
    period: "Jan 2025 – Mar 2025",
    location: "Remote",
    highlights: [
      "Developed and maintained responsive front-end components using HTML, CSS, and JavaScript",
      "Collaborated within an Agile team to ship features and participate in code reviews",
      "Ensured cross-browser compatibility and a mobile-first design"
    ]
  },
  {
    company: "SIH Hackathon",
    role: "Team Lead",
    period: "2024",
    location: "Ravangla, India",
    highlights: [
      "Led a team to develop a multi-modal travel recommendation system",
      "Architected core logic to process user inputs and output optimal, cost-efficient routes"
    ]
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background-secondary relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle, hsl(45 100% 75%) 1px, transparent 1px)'
              : 'radial-gradient(circle, hsl(220 30% 40%) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Passionate about creating intelligent solutions that bridge AI and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-poppins font-semibold mb-1">
                        National Institute Of Technology Sikkim
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        B.Tech — Computer Science & Engineering
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          Nov 2022 – Jun 2026
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          Ravangla, Sikkim
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          CGPA: 8.01
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-5 font-inter text-base leading-relaxed">
              <p className="text-foreground">
                I'm a passionate <span className="text-primary font-semibold">AI & Full-Stack Developer</span> pursuing
                my B.Tech at NIT Sikkim. My journey in technology is driven by a deep fascination
                with how artificial intelligence and robust software can solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                With hands-on experience in <span className="text-primary font-semibold">machine learning</span>,{' '}
                <span className="text-accent font-semibold">computer vision</span>, and{' '}
                <span className="text-primary font-semibold">full-stack development</span>, I've worked on projects
                ranging from multilingual RAG chatbots to comprehensive online job portal systems.
              </p>
              <p className="text-muted-foreground">
                Skilled in building scalable web applications and predictive models, I am passionate about
                applying AI to real-world challenges in Computer Vision, Software-Defined Networking (SDN), and user-centric software.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`text-2xl font-bold text-${stat.color} font-poppins mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-poppins font-bold text-primary mb-8">Experience</h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-14 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-1 w-4 h-4 bg-primary rounded-full border-[3px] border-background shadow-md" />

                  <Card className="glass border-primary/15 hover:border-primary/35 transition-all duration-300 group">
                    <CardContent className="p-5">
                      <h4 className="text-base font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                          {exp.period}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      <ul className="space-y-1.5 mt-3 text-sm text-muted-foreground">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;