import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Passion = () => {
  const passionAreas = [
    {
      icon: Code,
      title: "Coding Excellence",
      description: "I pour my heart into writing clean, efficient code that solves real problems."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Every day is an opportunity to learn something new and expand my skill set."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "I'm driven to explore cutting-edge technologies and implement creative solutions."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link to="/about" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          ← Back to About
        </Link>

        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gradient-primary">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Passion</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My passion for development goes beyond just writing code—it's about creating meaningful solutions that make a difference.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">What Drives Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                I genuinely enjoy learning new skills and applying them to improve both myself and my workplace. 
                Development isn't just my career—it's my passion. I find excitement in tackling challenging problems, 
                exploring emerging technologies, and seeing projects come to life from concept to deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This passion translates into dedication and enthusiasm in everything I do. Whether it's staying late 
                to solve a complex bug or spending weekends learning a new framework, I approach my work with genuine 
                interest and commitment. This intrinsic motivation ensures that I consistently deliver high-quality results 
                and continuously push myself to grow.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {passionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-secondary">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">My Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                My passion ensures that I bring energy and enthusiasm to every project. I don't just complete tasks—I 
                invest myself in understanding the bigger picture, contributing ideas, and going the extra mile to ensure 
                success. This passion for development means I'm always motivated to deliver exceptional work and help 
                my team achieve their goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Passion;
