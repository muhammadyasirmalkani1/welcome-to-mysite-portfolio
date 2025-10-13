import { Card, CardContent } from "@/components/ui/card";
import { Code2, Award, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Experience5Years = () => {
  const milestones = [
    {
      year: "2019-2020",
      title: "Junior Developer",
      description: "Started career building responsive web applications and learning modern frameworks"
    },
    {
      year: "2020-2022",
      title: "Mid-Level Developer",
      description: "Led feature development, mentored juniors, and architected scalable solutions"
    },
    {
      year: "2022-2024",
      title: "Senior Developer",
      description: "Full-stack leadership, system architecture, and cross-team collaboration"
    }
  ];

  const achievements = [
    {
      icon: Building2,
      title: "Multiple Industries",
      description: "Worked across startups, agencies, and enterprise clients"
    },
    {
      icon: Award,
      title: "Successful Projects",
      description: "Delivered 50+ projects ranging from MVPs to enterprise systems"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Evolved from junior to senior, expanding skills constantly"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/skills" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          ← Back to Skills
        </Link>

        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gradient-primary">
              <Code2 className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">5+ Years Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Half a decade of professional development building production-ready applications
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">Professional Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Over 5 years of hands-on experience in full-stack development has given me deep expertise across 
                the entire software development lifecycle. I've worked on diverse projects—from MVPs for fast-moving 
                startups to complex enterprise systems serving millions of users. This extensive experience means 
                I can quickly understand requirements, anticipate challenges, and deliver robust solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans multiple domains including e-commerce, fintech, healthcare, and SaaS platforms. 
                I've seen what works and what doesn't in real-world production environments, giving me the practical 
                wisdom to make smart architectural decisions and avoid common pitfalls.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold gradient-text-secondary">Career Timeline</h2>
            {milestones.map((milestone, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-secondary">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What This Means for Your Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                With 5+ years of experience, I bring battle-tested expertise to every project. I can hit the ground 
                running, require minimal onboarding, and contribute meaningfully from day one. I've debugged countless 
                production issues, optimized performance bottlenecks, and built systems that scale. This experience 
                translates to faster development cycles, fewer bugs, and more reliable solutions. You're not just 
                getting a developer—you're getting years of accumulated knowledge and best practices applied to your 
                specific needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience5Years;
