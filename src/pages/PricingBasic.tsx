import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PricingBasic = () => {
  const features = [
    "Responsive Design",
    "Up to 5 Pages",
    "Basic SEO Optimization",
    "Contact Form",
    "1 Month Support",
    "Source Code Included",
  ];

  const deliverables = [
    "Mobile-First Design",
    "Cross-Browser Compatible",
    "Fast Loading Speed",
    "Clean & Modern UI",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Perfect for Starters
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="gradient-text">Basic Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your professional web presence established with our streamlined package designed for small projects and landing pages.
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold gradient-text">$499</span>
            <span className="text-2xl text-muted-foreground">/project</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Features Card */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">What's Included</h2>
            </div>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Deliverables Card */}
          <Card className="glass-card p-8 hover-lift">
            <h2 className="text-3xl font-bold mb-6">You'll Get</h2>
            <div className="space-y-6">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Timeline Card */}
        <Card className="glass-card p-8 max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { week: "Week 1", task: "Planning & Design" },
              { week: "Week 2", task: "Development" },
              { week: "Week 3", task: "Testing & Review" },
              { week: "Week 4", task: "Launch & Support" },
            ].map((phase, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-bold">{phase.week}</h3>
                <p className="text-sm text-muted-foreground">{phase.task}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary text-lg px-12 py-6 h-auto">
              Get Started with Basic Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            Or{" "}
            <Link to="/pricing" className="text-primary hover:underline">
              compare all plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingBasic;
