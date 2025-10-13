import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PricingProfessional = () => {
  const features = [
    "Everything in Basic",
    "Up to 15 Pages",
    "Advanced SEO Optimization",
    "CMS Integration",
    "E-commerce Functionality",
    "3 Months Support",
    "Performance Optimization",
    "Analytics Integration",
  ];

  const addons = [
    { title: "CMS Dashboard", desc: "Easy content management system" },
    { title: "Payment Gateway", desc: "Secure online transactions" },
    { title: "Email Automation", desc: "Automated customer emails" },
    { title: "Advanced Analytics", desc: "Detailed user insights" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section with Gradient Background */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
          <div className="relative text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2">
              <Crown className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Most Popular Choice
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="gradient-text">Professional Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The perfect solution for growing businesses and e-commerce. Advanced features that scale with your success.
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold gradient-text">$1,299</span>
                <span className="text-2xl text-muted-foreground">/project</span>
              </div>
              <span className="text-sm text-primary">Save $500 vs Basic + Add-ons</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Features */}
            <div className="space-y-8">
              <Card className="glass-card p-8 shadow-glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Premium Features</h2>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1">
                        <Check className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right: Add-ons Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Included Premium Add-ons</h2>
              <div className="grid gap-4">
                {addons.map((addon, idx) => (
                  <Card
                    key={idx}
                    className="glass-card p-6 hover-lift cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{addon.title}</h3>
                        <p className="text-sm text-muted-foreground">{addon.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <Card className="glass-card p-8 max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Development Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { phase: "Discovery", time: "1 week" },
              { phase: "Design", time: "2 weeks" },
              { phase: "Development", time: "4 weeks" },
              { phase: "Testing", time: "1 week" },
              { phase: "Launch", time: "Support included" },
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                    {idx + 1}
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>
                <h3 className="font-bold text-lg">{step.phase}</h3>
                <p className="text-sm text-muted-foreground">{step.time}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful businesses using our Professional plan
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-lg px-12 py-6 h-auto">
                Start Your Professional Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
          <p className="text-sm text-muted-foreground">
            <Link to="/pricing" className="text-primary hover:underline">
              ← Back to all plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingProfessional;
