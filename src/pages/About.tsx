import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "I enjoy learning new skills and applying them to improve both myself and the workplace."
    },
    {
      icon: Target,
      title: "Reliability", 
      description: "I always complete my work on time and with quality - it's one of my main strengths."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "I'm a quick learner who adapts to new challenges easily and sees weaknesses as opportunities to grow."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication skills allow me to work well in teams and collaborate effectively."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">About Me</h1>
          <p className="text-xl text-muted-foreground">From lavish coffee table volumes filled with stunning photography to scholarly works documenting individual carvers, the world of carousel literature is as rich and varied as the carousels themselves.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-right">
            <Card className="glass-card p-8 hover-lift">
              <CardContent className="p-0 space-y-6">
                <h2 className="text-2xl font-semibold gradient-text-secondary">My Journey</h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-semibold">full-stack developer with over 5 years of professional experience</span> in building modern, scalable web applications. My expertise spans across frontend technologies like React, TypeScript, and modern CSS frameworks, as well as backend development with Node.js, databases, and cloud infrastructure.
                  </p>
                  
                  <p>
                    What sets me apart is my ability to see the complete picture — from user interface design to server architecture. I've successfully delivered projects for startups, agencies, and enterprise clients, always focusing on writing clean, maintainable code that stands the test of time.
                  </p>
                  
                  <p>
                    As a <span className="text-foreground font-semibold">dedicated team player</span>, I thrive in collaborative environments where communication and knowledge-sharing drive success. I believe the best solutions come from diverse perspectives working together, and I'm always eager to learn from my colleagues while contributing my expertise to help the team grow.
                  </p>
                  
                  <p>
                    Whether it's architecting a complex backend system, crafting an intuitive user interface, or mentoring junior developers, I approach every challenge with enthusiasm and a commitment to excellence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gradient-primary text-white">Full Stack Developer</Badge>
                  <Badge variant="secondary" className="bg-gradient-secondary text-white">5+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-gradient-accent text-white">Team Player</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Growth Philosophy */}
            <Card className="glass-card p-8 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Are you still willing to do it?</h3>
                <p className="text-muted-foreground">
                  I’ll create a realistic, actionable roadmap that balances aggressive wealth-building with sustainable growth. This assumes you’re starting with minimal capital but have time, energy, and willingness to learn.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values & Strengths */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-semibold gradient-text-secondary">Core Values</h2>
            
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                const links = ['/about/passion', '/about/reliability', '/about/growth-mindset', '/about/team-player'];
                return (
                  <Link key={index} to={links[index]}>
                    <Card className="glass-card p-6 hover-lift cursor-pointer transition-all hover:scale-105">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-full bg-gradient-primary">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;