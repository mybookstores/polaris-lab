"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase,
  Heart,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { teamMembers, stats } from "@/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-4">
                <Sparkles className="w-3 h-3 mr-1" />
                About Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
                About<span className="gradient-text">Polaris Lab</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Located at the heart of China&apos;s leading research university, we are dedicated to
                advancing the frontier of artificial intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To conduct world-class AI research that advances scientific discovery, benefits
                  society, and shapes the future of intelligent systems. We believe in open
                  collaboration, rigorous methodology, and transformative applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020, Polaris Lab brings together researchers from machine learning,
                  natural language processing, computer vision, and robotics to tackle the most
                  challenging problems in AI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                    <div className="text-4xl font-bold gradient-text mb-2">{stats.papers}+</div>
                    <div className="text-sm text-muted-foreground">Publications</div>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                    <div className="text-4xl font-bold gradient-text mb-2">{stats.patents}+</div>
                    <div className="text-sm text-muted-foreground">Patents</div>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                    <div className="text-4xl font-bold gradient-text mb-2">{stats.datasets}+</div>
                    <div className="text-sm text-muted-foreground">Datasets</div>
                  </Card>
                  <Card className="p-6 text-center bg-card/50 border-border/50">
                    <div className="text-4xl font-bold gradient-text mb-2">{stats.members}+</div>
                    <div className="text-sm text-muted-foreground">Researchers</div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 px-4">
                <Users className="w-3 h-3 mr-1" />
                Our Team
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4">
                Meet the <span className="gradient-text">Researchers</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team combines expertise from academia and industry to push the boundaries
                of AI research.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:bg-card/80 transition-colors border-border/50 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full bg-muted border-2 border-border"
                      />
                      <div>
                        <h3 className="font-heading font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                        <Badge
                          variant="secondary"
                          className={`mt-1 ${
                            member.role === "Director"
                              ? "bg-primary/20 text-primary"
                              : member.role === "Advisory"
                              ? "bg-secondary/20 text-secondary"
                              : ""
                          }`}
                        >
                          {member.role}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Research Areas */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.research.map((r) => (
                        <Badge key={r} variant="outline" className="text-xs">
                          {r}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-foreground transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment */}
        <section className="py-16 bg-card/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 px-4">
                <Heart className="w-3 h-3 mr-1" />
                Join Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4">
                We&apos;re <span className="gradient-text">Hiring</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Looking for talented researchers to join our team. We offer competitive compensation,
                world-class facilities, and the opportunity to work on cutting-edge AI research.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "PhD Students",
                  description: "Join our PhD program for deep research training",
                },
                {
                  icon: Briefcase,
                  title: "Research Interns",
                  description: "Short-term internships for undergraduates and masters",
                },
                {
                  icon: Award,
                  title: "Postdocs",
                  description: "Postdoctoral positions for experienced researchers",
                },
                {
                  icon: Users,
                  title: "Visiting Scholars",
                  description: "Collaborate with us as a visiting researcher",
                },
              ].map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:bg-card/80 transition-colors border-border/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <position.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{position.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{position.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 px-4">
                <Mail className="w-3 h-3 mr-1" />
                Contact
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  contact@polarislab.ai
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  Peking University
                  <br />
                  Beijing, China
                </p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Follow Us</h3>
                <div className="flex justify-center gap-2 mt-2">
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                  <span className="text-muted-foreground">/</span>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}