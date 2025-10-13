import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, CheckCircle2, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Reliability = () => {
  const reliabilityMetrics = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Consistently meeting deadlines without compromising quality"
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Every deliverable meets the highest standards of excellence"
    },
    {
      icon: Shield,
      title: "Dependability",
      description: "You can count on me to follow through on commitments"
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
            <div className="p-6 rounded-full bg-gradient-secondary">
              <Target className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Reliability</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consistency and dependability are at the core of everything I deliver.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">My Promise</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Reliability is one of my main strengths. I always complete my work on time and with quality. 
                  When I commit to a deadline, you can trust that I'll deliver—not just on time, but with the level 
                  of quality that meets or exceeds expectations.
                </p>
                <p>
                  This reliability stems from careful planning, realistic time estimation, and proactive communication. 
                  If I foresee any challenges that might impact delivery, I communicate early and work with the team 
                  to find solutions. I take ownership of my responsibilities and see them through to completion.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {reliabilityMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift">
                  <CardContent className="p-0 space-y-4">
                    <div className="p-4 rounded-full bg-gradient-accent inline-block">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{metric.title}</h3>
                    <p className="text-muted-foreground text-sm">{metric.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Track Record</h3>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my 5+ years of experience, I've built a reputation for being someone teams can count on. 
                Whether it's a critical bug fix, a feature launch, or a complex refactoring project, I ensure that 
                my work is completed thoroughly and on schedule. This consistency has made me a trusted member of 
                every team I've worked with.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-secondary/10 to-accent/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Why It Matters</h3>
              <p className="text-muted-foreground leading-relaxed">
                In fast-paced development environments, having reliable team members is crucial. My dependability 
                means project managers can plan with confidence, stakeholders can trust commitments, and teammates 
                can focus on their own work knowing their dependencies will be met. This reliability creates a 
                positive ripple effect across the entire project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reliability;
