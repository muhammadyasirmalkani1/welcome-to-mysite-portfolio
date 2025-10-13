import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost3 = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-Width Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
        <img
          src="/api/placeholder/1920/1080"
          alt="Performance Matters"
          className="w-full h-full object-cover"
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center space-y-6 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-semibold border border-primary/30">
              Design
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
              Why Performance Matters
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - Floating */}
        <Link to="/blog">
          <Button
            variant="ghost"
            className="absolute top-8 left-8 z-30 bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 max-w-4xl -mt-32 relative z-30">
        <article className="space-y-12">
          {/* Lead Paragraph */}
          <Card className="glass-card p-10 shadow-glow">
            <p className="text-2xl leading-relaxed text-muted-foreground">
              In today's competitive digital landscape, application performance directly impacts user satisfaction and business metrics. A slow application can lead to higher bounce rates, lower conversion rates, and frustrated users.
            </p>
          </Card>

          {/* Performance Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                stat: "100ms faster",
                desc: "1% increase in conversions",
                color: "text-yellow-500",
              },
              {
                icon: TrendingUp,
                stat: "3 seconds",
                desc: "32% bounce rate increase",
                color: "text-red-500",
              },
              {
                icon: Clock,
                stat: "53%",
                desc: "Mobile users abandon slow sites",
                color: "text-blue-500",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="glass-card p-6 text-center hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                <div className="text-3xl font-bold gradient-text mb-2">{item.stat}</div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          {/* Section: Event Loop */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">1. Event Loop Optimization</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding the Node.js event loop is crucial. Never block it with synchronous operations. Use async/await patterns and worker threads for CPU-intensive tasks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card p-6 border-red-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">❌</span>
                  <h3 className="font-bold text-lg">Bad: Blocking the event loop</h3>
                </div>
                <pre className="bg-accent/50 p-4 rounded-lg overflow-x-auto text-sm">
{`function processData(data) {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}`}
                </pre>
              </Card>

              <Card className="glass-card p-6 border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✅</span>
                  <h3 className="font-bold text-lg">Good: Using Worker Threads</h3>
                </div>
                <pre className="bg-accent/50 p-4 rounded-lg overflow-x-auto text-sm">
{`const { Worker } = require('worker_threads');

function processDataAsync(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js');
    worker.postMessage(data);
    worker.on('message', resolve);
  });
}`}
                </pre>
              </Card>
            </div>
          </div>

          {/* Section: Database Optimization */}
          <Card className="glass-card p-8 space-y-6">
            <h2 className="text-4xl font-bold">2. Database Query Optimization</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Database queries are often the biggest performance bottleneck. Implement connection pooling, use indexes effectively, and consider caching frequently accessed data.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Connection Pooling",
                  desc: "Reuse database connections instead of creating new ones for each query.",
                },
                {
                  title: "Index Optimization",
                  desc: "Properly indexed columns can speed up queries by orders of magnitude.",
                },
                {
                  title: "Query Caching",
                  desc: "Cache frequently accessed data to reduce database load.",
                },
              ].map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Section: Memory Management */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">3. Memory Management</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Monitor memory usage and prevent memory leaks. Use tools like clinic.js and Chrome DevTools to profile your application and identify memory issues.
            </p>

            <Card className="glass-card p-8 bg-gradient-primary/10">
              <h3 className="text-2xl font-bold mb-4">Pro Tips for Memory Optimization</h3>
              <ul className="space-y-3">
                {[
                  "Use WeakMap and WeakSet for temporary object storage",
                  "Clean up event listeners when components unmount",
                  "Implement pagination for large data sets",
                  "Use lazy loading for images and components",
                  "Profile regularly with Chrome DevTools",
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Conclusion Quote */}
          <Card className="glass-card p-12 text-center shadow-glow">
            <blockquote className="space-y-4">
              <p className="text-3xl font-bold italic">
                "Performance is not just a technical concern—it's a user experience imperative."
              </p>
              <footer className="text-muted-foreground">— Portfolio Owner</footer>
            </blockquote>
          </Card>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 py-8 border-t border-border">
            {["design", "ui-ux", "systems", "performance"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium hover:bg-accent/70 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Posts CTA */}
          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Read More Articles</h3>
            <p className="text-muted-foreground mb-6">
              Explore more insights on development, design, and career growth
            </p>
            <Link to="/blog">
              <Button className="bg-gradient-primary" size="lg">
                View All Posts
              </Button>
            </Link>
          </Card>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center py-12 border-t border-border">
            <Link to="/blog/How-Freelancers-Get-Paid">
              <Button variant="ghost" className="hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" />
                Previous Article
              </Button>
            </Link>
            <Link to="/blog/career-growth-tips">
              <Button variant="ghost" className="hover:gap-3 transition-all">
                Next Article
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </article>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default BlogPost3;
