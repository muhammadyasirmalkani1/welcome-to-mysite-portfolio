import { Card, CardContent } from "@/components/ui/card";
import { Zap, BookOpen, Rocket, Target } from "lucide-react";
import { Link } from "react-router-dom";

const QuickLearner = () => {
  const learningApproaches = [
    {
      icon: BookOpen,
      title: "Self-Directed Learning",
      description: "I proactively research and master new technologies independently"
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "I quickly move from learning to building functional solutions"
    },
    {
      icon: Target,
      title: "Focused Practice",
      description: "I learn by doing, building real projects to solidify understanding"
    }
  ];

  const recentLearnings = [
    "Mastered React Server Components in 2 weeks for a production project",
    "Learned GraphQL and implemented a complete API in 10 days",
    "Picked up Terraform for infrastructure-as-code within a sprint",
    "Adopted new CI/CD tools and built pipelines within days"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/skills" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          ← Back to Skills
        </Link>

        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gradient-accent">
              <Zap className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Quick Learner</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rapidly adapting to new technologies and challenges with ease
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">Learning Agility</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In the fast-paced world of web development, the ability to learn quickly is crucial. I excel at 
                  rapidly understanding and implementing new technologies, frameworks, and paradigms. When faced with 
                  unfamiliar tools or concepts, I don't hesitate—I dive in, learn what's needed, and start applying 
                  it effectively.
                </p>
                <p>
                  My learning approach is practical and hands-on. I read documentation thoroughly, experiment with 
                  code examples, and build small projects to solidify my understanding. This method allows me to 
                  move from "learning" to "productive contributor" faster than most developers.
                </p>
                <p>
                  This quick learning ability means I can adapt to your tech stack regardless of what it is. Whether 
                  you're using cutting-edge frameworks or established technologies I haven't worked with extensively, 
                  I'll get up to speed quickly and contribute meaningfully.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {learningApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-primary">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{approach.title}</h3>
                    <p className="text-muted-foreground text-sm">{approach.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Recent Learning Achievements</h3>
              <ul className="space-y-3">
                {recentLearnings.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{learning}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Pattern Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My experience across multiple technologies helps me identify patterns and concepts that transfer 
                  between frameworks. This means I can learn new tools faster by connecting them to what I already know.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Documentation Mastery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I've developed the skill of reading technical documentation efficiently, extracting what matters, 
                  and applying it immediately. This accelerates my learning and makes me productive quickly.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-accent/10 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Impact on Your Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                My quick learning ability means reduced onboarding time and faster time-to-productivity. If your 
                project uses specialized tools or unique workflows, I'll adapt quickly. If requirements change and 
                new technologies are needed, I'll learn and implement them without slowing down the project. This 
                flexibility makes me a valuable asset in dynamic, fast-moving environments where technology decisions 
                evolve rapidly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickLearner;
