import { Award, Zap, Component, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ReactCertified = () => {
  const expertise = [
    {
      icon: <Component className="w-8 h-8" />,
      title: "Component Architecture",
      description: "Building reusable, maintainable component libraries",
      highlights: ["Functional Components", "Custom Hooks", "Component Composition", "Props & State Management"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Creating lightning-fast React applications",
      highlights: ["React.memo", "useMemo & useCallback", "Code Splitting", "Lazy Loading"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Advanced Patterns",
      description: "Implementing complex application architectures",
      highlights: ["Context API", "Redux/Zustand", "Server Components", "Suspense & Error Boundaries"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Modern Ecosystem",
      description: "Leveraging the latest React technologies",
      highlights: ["React 18 Features", "TypeScript Integration", "Testing Library", "Next.js Framework"]
    }
  ];

  const achievements = [
    "Developed 20+ production React applications",
    "Contributed to open-source React libraries",
    "Mentored junior developers in React best practices",
    "Implemented state-of-the-art performance optimizations",
    "Built complex dashboards with real-time data visualization"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
            <Award className="w-20 h-20 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">React Developer</span>
            <br />
            <span className="text-3xl md:text-4xl">Certified Professional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meta Certified - Mastering the world's most popular UI library
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Issued By</div>
              <div className="font-bold text-xl text-primary">Meta (Facebook)</div>
            </Card>
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Year</div>
              <div className="font-bold text-xl">2023</div>
            </Card>
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Credential</div>
              <div className="font-bold text-xl">META-REACT-2023</div>
            </Card>
          </div>
        </div>

        {/* Expertise Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="glass-card p-8 hover-lift" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{area.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Achievements</h2>
          <div className="glass-card p-10">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-lg pt-2">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="glass-card p-10 text-center space-y-8 bg-gradient-to-br from-primary/5 to-transparent">
          <h3 className="text-3xl font-bold gradient-text">Building the Future with React</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            React isn't just a framework—it's a philosophy of building user interfaces. 
            This certification represents my commitment to mastering modern web development 
            and delivering exceptional user experiences.
          </p>
          <Link to="/education">
            <button className="glass-button px-10 py-4 text-lg hover-scale">
              Explore All Certifications
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ReactCertified;
