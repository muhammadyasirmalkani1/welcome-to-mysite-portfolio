import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Rocket, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PricingEnterprise = () => {
  const features = [
    "Everything in Professional",
    "Unlimited Pages",
    "Custom Backend Development",
    "API Integration",
    "Advanced Security",
    "Database Design",
    "6 Months Support",
    "Priority Support",
    "Dedicated Project Manager",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Bank-level encryption and security protocols",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      desc: "Built to handle millions of users",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      desc: "Personal project manager and dev team",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Optimized for peak performance",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Premium Hero Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold gradient-text">
                Enterprise-Grade Solution
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">Enterprise Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Custom solutions built for scale. Perfect for complex applications that demand the highest level of performance, security, and support.
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-bold gradient-text">$2,999</span>
                <span className="text-2xl text-muted-foreground">/project</span>
              </div>
              <span className="text-sm text-primary font-medium">Full-service development + 6 months premium support</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Enterprise Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <Card
                key={idx}
                className="glass-card p-6 hover-lift text-center group cursor-pointer"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Showcase */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="glass-card p-10 shadow-glow">
            <h2 className="text-4xl font-bold mb-8 text-center">Everything You Need</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-all group animate-slide-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Custom Development Process */}
        <Card className="glass-card p-10 max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Tailored Development Journey</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our enterprise process is fully customizable to match your organization's needs and timeline
          </p>
          <div className="space-y-6">
            {[
              {
                phase: "Strategy & Planning",
                duration: "1-2 weeks",
                details: "Deep dive into your business goals, technical requirements, and success metrics",
              },
              {
                phase: "Architecture Design",
                duration: "2 weeks",
                details: "System architecture, database schema, API design, and security protocols",
              },
              {
                phase: "Agile Development",
                duration: "6-12 weeks",
                details: "Iterative development with weekly demos and continuous feedback",
              },
              {
                phase: "Testing & QA",
                duration: "2 weeks",
                details: "Comprehensive testing including security audits and performance optimization",
              },
              {
                phase: "Deployment & Training",
                duration: "1 week",
                details: "Seamless launch with team training and documentation",
              },
              {
                phase: "Ongoing Support",
                duration: "6 months",
                details: "Dedicated support team with priority response and monthly reviews",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{step.phase}</h3>
                    <span className="text-sm text-primary font-medium">{step.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Premium CTA */}
        <div className="text-center space-y-8">
          <Card className="glass-card p-12 max-w-3xl mx-auto shadow-glow">
            <h3 className="text-3xl font-bold mb-4">Let's Build Something Extraordinary</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our enterprise team to discuss your project requirements and get a custom proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-lg px-12 py-6 h-auto">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-12 py-6 h-auto">
                Download Case Studies
              </Button>
            </div>
          </Card>
          <p className="text-sm text-muted-foreground">
            <Link to="/pricing" className="text-primary hover:underline">
              ← Compare all pricing plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingEnterprise;
