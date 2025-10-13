import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Handshake, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPlayer = () => {
  const teamQualities = [
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "I express ideas clearly and listen actively to others"
    },
    {
      icon: Handshake,
      title: "Collaborative Spirit",
      description: "I work seamlessly with cross-functional teams"
    },
    {
      icon: GitBranch,
      title: "Knowledge Sharing",
      description: "I mentor others and share insights freely"
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
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Team Player</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building success through collaboration, communication, and mutual support.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">Collaboration First</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Strong communication skills allow me to work well in teams and collaborate effectively. I believe 
                  that the best solutions emerge when diverse perspectives come together, and I actively contribute 
                  to creating that collaborative environment.
                </p>
                <p>
                  I'm comfortable working with designers, product managers, QA engineers, and fellow developers. 
                  I can translate technical concepts for non-technical stakeholders and understand business 
                  requirements from a technical perspective. This bridge-building ability makes me valuable in 
                  cross-functional team settings.
                </p>
                <p>
                  While I've learned to overcome my tendency to tackle everything alone, I now actively seek input, 
                  delegate when appropriate, and ask for help when needed. This honest self-awareness and willingness 
                  to improve makes me a better team member every day.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {teamQualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift">
                  <CardContent className="p-0 space-y-4">
                    <div className="p-4 rounded-full bg-gradient-secondary inline-block">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{quality.title}</h3>
                    <p className="text-muted-foreground text-sm">{quality.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Supporting Others</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always ready to help teammates when they face challenges. Whether it's pair programming through 
                  a difficult problem, reviewing code thoroughly, or sharing knowledge about technologies I know well, 
                  I contribute to the team's collective success.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Constructive Feedback</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I provide thoughtful, constructive feedback in code reviews and discussions. I also welcome feedback 
                  on my own work, viewing it as an opportunity to learn and improve. This two-way communication builds 
                  trust and elevates the entire team's performance.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Team Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                My collaborative nature creates a positive team dynamic. I celebrate others' successes, contribute to 
                a supportive atmosphere, and help foster an environment where everyone can do their best work. Teams 
                I've worked with describe me as approachable, helpful, and easy to work with—qualities that make 
                projects more enjoyable and productive for everyone involved. I understand that great software isn't 
                built by individuals alone, but by teams working together toward shared goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamPlayer;
