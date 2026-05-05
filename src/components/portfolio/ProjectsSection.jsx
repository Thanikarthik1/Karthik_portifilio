import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink, Github, Play,
  MessageCircle, Brain, Target, Layers, ShieldAlert, Mic
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'multilingual-rag',
      title: 'Smart Multilingual Assistant',
      category: 'intelligent-systems',
      description: 'Multilingual RAG Chatbot using FAISS, Llama 3, and SERP API.',
      longDescription: 'Developed a robust backend with document-aware, multilingual, and image-capable conversations across 20+ Indian languages using a RAG architecture.',
      tech: ['FAISS', 'Llama 3', 'FastAPI', 'Python', 'MongoDB'],
      features: ['Hybrid RAG architecture', '20+ languages support', 'Web-search integration'],
      metrics: { capability: '20+ Languages', architecture: 'RAG Pipeline' },
      github: 'https://github.com/Thanikarthik1/smart-multilingual-assistant',
      icon: Brain,
      status: 'Completed'
    },
    {
      id: 'signature-recognition',
      title: 'Computer Vision Signature Verification',
      category: 'vision-media',
      description: 'Automated signature recognition and forgery detection system.',
      longDescription: 'Leveraged Computer Vision expertise to build a pipeline that preprocesses scanned documents, extracts structural features, and classifies signatures to prevent identity fraud.',
      tech: ['Python', 'OpenCV', 'Scikit-Image', 'NumPy'],
      features: ['Image preprocessing', 'Feature extraction (HOG)', 'Forgery detection'],
      metrics: { domain: 'Computer Vision', processing: 'Automated Pipeline' },
      demo:'NULL',
      github: 'https://github.com/Thanikarthik1/Signature-recognition',
      icon: Target,
      status: 'Live'
    },
    {
      id: 'deepfake-audio',
      title: 'Deepfake Audio Detection',
      category: 'vision-media',
      description: 'AI-generated audio classification using Mel-spectrograms and ResNet-18.',
      longDescription: 'Leverages computer vision techniques on audio signals to distinguish between human speech and AI-generated spoofed audio.',
      tech: ['ResNet-18', 'ASVspoof', 'Mel-Spectrograms', 'PyTorch'],
      features: ['Signal-to-image conversion', 'Spoof detection'],
      metrics: { technique: 'Spectral Analysis', model: 'ResNet-18' },
      demo:'https://huggingface.co/spaces/karthik-the-great/deepfake-audio-detector',
      github: 'https://github.com/Thanikarthik1/Deepfake-Audio-Detection',
      icon: Mic,
      status: 'Live'
    },
    {
      id: 'toxic-detection',
      title: 'Toxic Comment Classifier',
      category: 'intelligent-systems',
      description: 'Efficient transformer-based classifier for online content moderation.',
      longDescription: 'Built using DistilBERT, this model implements dynamic class weighting to effectively identify rare, critical toxicity categories.',
      tech: ['DistilBERT', 'PyTorch', 'Jigsaw Dataset'],
      features: ['Dynamic class weighting', 'Real-time classification'],
      metrics: { model: 'DistilBERT', accuracy: 'Robust' },
      demo : 'https://huggingface.co/spaces/karthik-the-great/toxic_word_predection',
      github: 'https://github.com/Thanikarthik1/Toxic_comments_detection',
      icon: ShieldAlert,
      status: 'Live'
    },
    {
      id: 'job-portal',
      title: 'Job Portal Management System',
      category: 'web-platforms',
      description: 'Comprehensive web platform for job seekers and employers.',
      longDescription: 'Designed a responsive portal for filtering job listings, submitting applications, and managing employer dashboards.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
      features: ['Role-based auth', 'Dynamic filtering', 'Application dashboard'],
      metrics: { backend: 'RESTful API', frontend: 'Mobile-First' },
      github: 'https://github.com/Thanikarthik1/Online-Job-Portal-Management-System',
      icon: Layers,
      status: 'Completed'
    },
    {
      id: 'movie-recommender',
      title: 'ML Movie Recommender',
      category: 'web-platforms',
      description: 'Collaborative filtering engine for personalized film suggestions.',
      longDescription: 'Built a pipeline using neural network embedding layers to predict user-item interaction scores based on historical preferences.',
      tech: ['Python', 'Neural Networks', 'Pandas'],
      features: ['50-dim embeddings', 'User/Item mapping'],
      metrics: { architecture: 'Neural Collaborative', accuracy: 'High' },
      demo : 'https://huggingface.co/spaces/karthik-the-great/Movie-Recommender',
      github: 'https://github.com/Thanikarthik1/Movie_Recommendation_System',
      icon: Play,
      status: 'Live'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'vision-media', label: 'Computer Vision & Media', count: projects.filter(p => p.category === 'vision-media').length },
    { id: 'intelligent-systems', label: 'Intelligent Systems & RAG', count: projects.filter(p => p.category === 'intelligent-systems').length },
    { id: 'web-platforms', label: 'Web Platforms & Tools', count: projects.filter(p => p.category === 'web-platforms').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  return (
    <section id="projects" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 border border-primary/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ left: '5%', top: '15%' }}
        />
        <motion.div
          className="absolute w-60 h-60 border border-accent/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ right: '10%', bottom: '20%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Innovative solutions spanning AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`
                relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer
                border overflow-hidden
                ${activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-lg'
                  : 'glass text-foreground border-primary/20 hover:border-primary/40'
                }
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${activeFilter === category.id
                    ? 'bg-white/20'
                    : 'bg-primary/15 text-primary'
                  }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="glass h-full border-primary/15 hover:border-primary/35 transition-all duration-500 overflow-hidden hover:shadow-lg">
                    <CardContent className="p-6">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${project.status === 'Live'
                                    ? 'bg-aurora-green/15 text-aurora-green border-aurora-green/25'
                                    : 'bg-primary/15 text-primary border-primary/25'
                                  }`}
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {hoveredProject === project.id ? project.longDescription : project.description}
                      </p>

                      {/* Features on hover */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mb-4"
                          >
                            <div className="grid grid-cols-1 gap-1.5">
                              {project.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <div className="w-1 h-1 bg-primary rounded-full" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2.5 glass rounded-lg">
                            <div className="text-base font-bold text-primary font-poppins">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/30 text-foreground/80 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="bg-primary/15 text-primary text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1 cyber-button text-xs"
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <Play className="w-3.5 h-3.5 mr-1.5" />
                            Live Demo
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass border-primary/25 hover:border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="glass border-primary/40 hover:border-primary hover:bg-primary/10 px-8 py-3"
            onClick={() => window.open('https://github.com/Thanikarthik1', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
