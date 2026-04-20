import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail, Phone, MapPin, Send,
  Linkedin, Github,
  CheckCircle, ExternalLink
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import { useTheme } from '@/context/ThemeContext';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thanikarthik0@gmail.com',
      href: 'mailto:thanikarthik0@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76719 83598',
      href: 'tel:+917671983598',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: 'https://www.google.com/maps/place/Bengaluru',
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/thani-karthik', // Replace with your exact LinkedIn URL
      username: '@ThaniKarthik',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Thanikarthik1', // Replace with your exact GitHub URL
      username: '@Thanikarthik',
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_9uvozgd',
        'template_gtmz0v2',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'ANA9PmyxKBG68lgd8'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {isDark ? (
          <>
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
              style={{
                background: 'radial-gradient(circle, hsl(45 100% 75%), transparent 70%)',
                top: '-10%',
                right: '-5%',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </>
        ) : (
          <>
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full opacity-10 animate-blob"
              style={{
                background: 'radial-gradient(circle, hsl(16 80% 62% / 0.3), transparent 70%)',
                top: '5%',
                right: '-3%',
              }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full opacity-10 animate-blob"
              style={{
                background: 'radial-gradient(circle, hsl(174 60% 52% / 0.25), transparent 70%)',
                bottom: '10%',
                left: '-2%',
                animationDelay: '3s',
              }}
            />
          </>
        )}
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Let's discuss opportunities, collaborations, or just chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Contact Information</h3>
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="block"
                  >
                    <Card className="glass border-primary/15 hover:border-primary/35 transition-all group cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                              {contact.label}
                            </h4>
                            <p className="text-muted-foreground text-sm">{contact.value}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Connect With Me</h3>
              <div className="grid gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="block"
                    >
                      <div className="flex items-center gap-3 p-3 glass rounded-xl border-primary/15 hover:border-primary/35 transition-all group">
                        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{social.label}</h4>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-5 rounded-xl border-primary/15"
            >
              <h4 className="text-base font-poppins font-semibold text-primary mb-3">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-primary font-poppins">24/7</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent font-poppins">&lt;24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary font-poppins">Remote</div>
                  <div className="text-xs text-muted-foreground">Work Ready</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent font-poppins">Open</div>
                  <div className="text-xs text-muted-foreground">To Relocate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="glass border-primary/15">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-poppins font-bold text-primary mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1.5 block">Your Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/25 focus:border-primary bg-background/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/25 focus:border-primary bg-background/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass border-primary/25 focus:border-primary bg-background/50"
                      placeholder="Let's discuss a project"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="glass border-primary/25 focus:border-primary bg-background/50 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center mt-5 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-aurora-green" />
                    <span>Secure & encrypted communication</span>
                  </div>
                  <p>Your message will be answered within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;