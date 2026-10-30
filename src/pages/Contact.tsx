/**
 * Contact Page
 * Contact form and studio details for Ayush Architects with full dark mode support
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactCards = [
  {
    icon: MapPin,
    title: 'Studio Location',
    lines: ['Ayush Architects Design Studio', 'Architecture & Planning Division'],
  },
  {
    icon: Phone,
    title: 'Direct Call',
    lines: ['+91 86858 45744'],
  },
  {
    icon: Mail,
    title: 'Email Inquiry',
    lines: ['ayusharchitects@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Consultation Hours',
    lines: ['Mon to Sat: 9:30 AM to 6:30 PM', 'Sunday: By Appointment'],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', 'eccf24e4-acfa-411e-939e-685bba8c6131');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: 'Consultation Request Sent!',
          description: "Ayush Architects will get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please check your connection.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Consultation | Ayush Architects</title>
        <meta
          name="description"
          content="Schedule a consultation with Ayush Architects. Contact our architecture and interior design studio for planning, 3D visualization, and execution."
        />
      </Helmet>

      <Layout>
        <PageHeader
          tagline="SPACES FOR BETTER TOMORROW"
          title="Contact & Consultation"
          description="Let's discuss your project. Schedule a consultation with Ayush Architects to turn your vision into reality."
        />

        <section className="py-20 lg:py-28 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Info Cards & Map */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="grid sm:grid-cols-2 gap-5">
                  {contactCards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="bg-card rounded-3xl p-6 border border-border/60 shadow-soft hover:shadow-medium transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                          <Icon size={22} />
                        </div>
                        <h3 className="font-serif text-lg font-medium mb-2 text-foreground">
                          {card.title}
                        </h3>
                        <div className="text-sm text-muted-foreground font-light space-y-1">
                          {card.lines.map((line, i) => {
                            if (card.icon === Phone) {
                              return (
                                <a
                                  key={i}
                                  href={`tel:${line.replace(/\s+/g, '')}`}
                                  className="block hover:text-accent transition-colors"
                                >
                                  {line}
                                </a>
                              );
                            }
                            if (card.icon === Mail) {
                              return (
                                <a
                                  key={i}
                                  href={`mailto:${line}`}
                                  className="block hover:text-accent transition-colors"
                                >
                                  {line}
                                </a>
                              );
                            }
                            return <p key={i}>{line}</p>;
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Map with rounded corners */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-md h-[280px] w-full border border-border/60"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    title="Office Location"
                  />
                </motion.div>
              </div>

              {/* Right Column: Contact Form with Dark Mode compatibility */}
              <motion.div
                className="order-1 lg:order-2 bg-card rounded-3xl p-8 lg:p-10 shadow-medium border border-border/60 h-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3 text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm font-light">
                    Share your requirements with Ayush Architects and our team will get back to you promptly.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Full Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 bg-secondary/30 dark:bg-muted/30 border-border/60 focus:border-accent text-base rounded-2xl transition-all duration-300"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Phone
                        </Label>
                        <Input
                          name="phone"
                          placeholder="+91 86858 45744"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 bg-secondary/30 dark:bg-muted/30 border-border/60 focus:border-accent text-base rounded-2xl transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Email <span className="text-accent">*</span>
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 bg-secondary/30 dark:bg-muted/30 border-border/60 focus:border-accent text-base rounded-2xl transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Project Details / Message <span className="text-accent">*</span>
                      </Label>
                      <Textarea
                        rows={5}
                        name="message"
                        required
                        placeholder="Tell us about your project location, scope, and requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-secondary/30 dark:bg-muted/30 border-border/60 focus:border-accent text-base rounded-2xl transition-all duration-300 resize-none p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      className="relative overflow-hidden w-full h-14 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-lg hover:shadow-gold mt-4 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending Request...'
                      ) : (
                        <>
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{
                              repeat: Infinity,
                              repeatDelay: 3.5,
                              duration: 1.5,
                              ease: 'easeInOut',
                            }}
                            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                          />
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            SUBMIT CONSULTATION REQUEST
                          </span>
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 bg-accent/15 text-accent rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle size={36} />
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-3 text-foreground">
                      Request Received
                    </h3>
                    <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed text-sm font-light">
                      Thank you for contacting Ayush Architects. We will review your project details and reach out within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 btn-outline-elegant text-xs tracking-widest uppercase"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
