"use client";

import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SectionShell } from "@/components/sections/SectionShell";
import { cn } from "@/lib/utils";
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
  Copy,
} from "lucide-react";
import { stats } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/toast";
import { getAllTeamMembers } from "@/lib/content";

const fadeDelayClasses = ["", "home-fade-in-delay-1", "home-fade-in-delay-2"] as const;

function getFadeClass(index: number) {
  return cn("home-fade-in", fadeDelayClasses[index % fadeDelayClasses.length]);
}

export default function AboutPage() {
  const { isZh } = useLanguage();
  const { showToast } = useToast();
  const teamMembers = getAllTeamMembers();

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    showToast(isZh ? "邮箱已复制" : "Email copied!", "success", { variant: "email-copy" });
  };

  const positions = [
    {
      icon: GraduationCap,
      title: isZh ? "博士研究生" : "PhD Students",
      description: isZh ? "加入博士项目进行深度研究训练" : "Join our PhD program for deep research training",
      color: "#3B82F6",
    },
    {
      icon: Briefcase,
      title: isZh ? "研究实习生" : "Research Interns",
      description: isZh ? "面向本科生和硕士生的短期实习" : "Short-term internships for undergraduates and masters",
      color: "#8B5CF6",
    },
    {
      icon: Award,
      title: isZh ? "博士后" : "Postdocs",
      description: isZh ? "面向有经验研究员的博士后职位" : "Postdoctoral positions for experienced researchers",
      color: "#10B981",
    },
    {
      icon: Users,
      title: isZh ? "访问学者" : "Visiting Scholars",
      description: isZh ? "作为访问研究员与我们合作" : "Collaborate with us as a visiting researcher",
      color: "#F59E0B",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <PageHero
          badge={isZh ? "关于我们" : "About Us"}
          badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
          heading={
            <>
              {isZh ? "关于" : "About"}
              <span className="gradient-text">Polaris Lab</span>
            </>
          }
          description={
            isZh
              ? "位于中国顶尖研究型大学的心脏地带，我们致力于推进人工智能的前沿研究。"
              : "Located at the heart of one of China’s leading research universities, we are dedicated to advancing the frontier of artificial intelligence."
          }
        />

        <SectionShell className="py-16" maxWidth="7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="home-fade-in">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 font-heading text-3xl font-bold">
                {isZh ? "我们的使命" : "Our Mission"}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {isZh
                  ? "开展世界一流的人工智能研究，推进科学发现，造福社会，塑造智能系统的未来。我们相信开放协作、严谨方法论和变革性应用。"
                  : "To conduct world-class AI research that advances scientific discovery, benefits society, and shapes the future of intelligent systems. We believe in open collaboration, rigorous methodology, and transformative applications."}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {isZh
                  ? "Polaris Lab 汇集了机器学习、自然语言处理、计算机视觉和机器人领域的研究人员，共同解决人工智能最具挑战性的问题。"
                  : "Polaris Lab brings together researchers from machine learning, natural language processing, computer vision, and robotics to tackle the most challenging problems in AI."}
              </p>
            </div>

            <div className="home-fade-in home-fade-in-delay-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
                  <div className="mb-2 text-4xl font-bold gradient-text">{stats.papers}+</div>
                  <div className="text-sm text-muted-foreground">{isZh ? "发表论文" : "Publications"}</div>
                </Card>
                <Card className="border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
                  <div className="mb-2 text-4xl font-bold gradient-text">{stats.patents}+</div>
                  <div className="text-sm text-muted-foreground">{isZh ? "专利授权" : "Patents"}</div>
                </Card>
                <Card className="border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
                  <div className="mb-2 text-4xl font-bold gradient-text">{stats.datasets}+</div>
                  <div className="text-sm text-muted-foreground">{isZh ? "开源数据集" : "Datasets"}</div>
                </Card>
                <Card className="border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
                  <div className="mb-2 text-4xl font-bold gradient-text">{stats.members}+</div>
                  <div className="text-sm text-muted-foreground">{isZh ? "研究人员" : "Researchers"}</div>
                </Card>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="bg-card/30 py-16" maxWidth="7xl">
          <SectionHeader
            align="center"
            badge={isZh ? "团队成员" : "Our Team"}
            badgeIcon={<Users className="mr-1 h-3 w-3" />}
            heading={
              <>
                {isZh ? "认识我们的" : "Meet the"}{" "}
                <span className="gradient-text">{isZh ? "研究者" : "Researchers"}</span>
              </>
            }
            description={
              isZh
                ? "我们的团队汇集了学术界和工业界的专业知识，推动人工智能研究的边界。"
                : "Our diverse team combines expertise from academia and industry to push the boundaries of AI research."
            }
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={getFadeClass(index)}>
                <Card className="group relative h-full border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-10"
                    style={{
                      backgroundColor:
                        member.role === "Director"
                          ? "#3B82F6"
                          : member.role === "Advisory"
                            ? "#8B5CF6"
                            : "#10B981",
                    }}
                  />
                  <div className="relative z-10 mb-4 flex items-start gap-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-2 border-border bg-muted object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="min-w-0">
                      <h3 className="line-clamp-1 font-heading font-semibold transition-colors group-hover:text-primary">
                        {member.name}
                      </h3>
                      <p className="line-clamp-1 text-sm text-muted-foreground">{member.title}</p>
                      <Badge variant="secondary" className="mt-1">
                        {member.role === "Director"
                          ? isZh
                            ? "主任"
                            : "Director"
                          : member.role === "Co-director"
                            ? isZh
                              ? "副主任"
                              : "Co-director"
                            : member.role === "Advisory"
                              ? isZh
                                ? "顾问"
                                : "Advisory"
                              : isZh
                                ? "成员"
                                : "Faculty"}
                      </Badge>
                    </div>
                  </div>

                  <p className="relative z-10 mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="relative z-10 mb-4 flex flex-wrap gap-2">
                    {member.research.slice(0, 3).map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="relative z-10 mt-auto flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <button
                      onClick={() => copyEmail(member.email)}
                      className="flex items-center gap-1 truncate transition-colors hover:text-foreground"
                    >
                      {member.email}
                      <Copy className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="py-16" maxWidth="7xl">
          <SectionHeader
            align="center"
            badge={isZh ? "加入我们" : "Join Us"}
            badgeIcon={<Heart className="mr-1 h-3 w-3" />}
            heading={
              <>
                {isZh ? "我们正在" : "We are"}{" "}
                <span className="gradient-text">{isZh ? "招聘" : "Hiring"}</span>
              </>
            }
            description={
              isZh
                ? "寻找优秀的研究人才加入我们的团队。我们提供有竞争力的薪酬、世界级的设施，以及参与前沿人工智能研究的机会。"
                : "Looking for talented researchers to join our team. We offer competitive compensation, world-class facilities, and the opportunity to work on cutting-edge AI research."
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {positions.map((position, index) => (
              <div key={position.title} className={getFadeClass(index)}>
                <Card className="group relative h-full border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: position.color }}
                  />
                  <div className="relative z-10 flex h-full flex-col">
                    <div
                      className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: `${position.color}20` }}
                    >
                      <position.icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6"
                        style={{ color: position.color }}
                      />
                    </div>
                    <h3 className="mb-2 line-clamp-1 font-heading font-semibold transition-colors group-hover:text-foreground">
                      {position.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">{position.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn mt-auto w-full transition-all duration-300 hover:border-primary/50"
                    >
                      {isZh ? "立即申请" : "Apply Now"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="bg-card/30 py-16" maxWidth="7xl">
          <SectionHeader
            align="center"
            badge={isZh ? "联系方式" : "Contact"}
            badgeIcon={<Mail className="mr-1 h-3 w-3" />}
            heading={
              <>
                {isZh ? "联系我们" : "Get in"}{" "}
                {!isZh ? <span className="gradient-text">Touch</span> : null}
              </>
            }
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="home-fade-in border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">contact@polarislab.ai</p>
            </Card>

            <Card className="home-fade-in home-fade-in-delay-1 border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 font-heading font-semibold">{isZh ? "地址" : "Address"}</h3>
              <p className="text-sm text-muted-foreground">
                {isZh ? "北京大学" : "Peking University"}
                <br />
                {isZh ? "中国北京" : "Beijing, China"}
              </p>
            </Card>

            <Card className="home-fade-in home-fade-in-delay-2 border border-border/45 bg-card/35 p-6 text-center transition-colors duration-200 hover:bg-card/55">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <ExternalLink className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 font-heading font-semibold">{isZh ? "关注我们" : "Follow Us"}</h3>
              <div className="mt-2 flex justify-center gap-2">
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  GitHub
                </a>
                <span className="text-muted-foreground">/</span>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Twitter
                </a>
              </div>
            </Card>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}
