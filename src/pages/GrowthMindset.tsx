import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Brain, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthMindset = () => {
  const growthPrinciples = [
    {
      icon: Brain,
      title: "Fast Learner",
      description: "I quickly absorb new concepts and technologies"
    },
    {
      icon: Target,
      title: "Adaptable",
      description: "I thrive in changing environments and new challenges"
    },
    {
      icon: Sparkles,
      title: "Opportunity Seeker",
      description: "I see weaknesses as chances to improve and grow"
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
            <div className="p-6 rounded-full bg-gradient-accent">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Growth Mindset</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Embracing challenges and transforming obstacles into opportunities for development.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">Learning & Adapting</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a quick learner who adapts to new challenges easily. When faced with unfamiliar technologies 
                  or complex problems, I don't shy away—I dive in with curiosity and determination. My ability to 
                  rapidly understand new concepts has allowed me to work across diverse tech stacks and contribute 
                  meaningfully to projects from day one.
                </p>
                <p>
                  What truly defines my growth mindset is how I view weaknesses and failures. Rather than seeing 
                  them as limitations, I recognize them as opportunities to grow. Every bug is a lesson in better 
                  coding practices. Every project challenge is a chance to develop new skills. This perspective 
                  keeps me motivated and continuously improving.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {growthPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-primary">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Continuous Improvement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I actively seek feedback and use it constructively to improve my work. Code reviews aren't just 
                  formalities—they're learning opportunities. I regularly reflect on my projects to identify what 
                  went well and what could be better next time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Embracing Challenges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complex problems excite me rather than intimidate me. I view difficult tasks as chances to stretch 
                  my abilities and learn something new. This mindset has helped me tackle projects that initially 
                  seemed beyond my capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-accent/10 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Impact on Teams</h3>
              <p className="text-muted-foreground leading-relaxed">
                My growth mindset benefits not just me, but the entire team. I bring a positive, can-do attitude to 
                challenges. I'm not afraid to try new approaches, and I encourage experimentation and learning. This 
                creates an environment where innovation thrives and the team collectively grows stronger. My adaptability 
                means I can pivot quickly when project needs change, keeping momentum going even in uncertain situations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrowthMindset;
