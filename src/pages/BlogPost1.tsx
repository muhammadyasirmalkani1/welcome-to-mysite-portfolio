import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="space-y-8 animate-fade-in">
          {/* Category Badge */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Career
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">My Journey as a Full Stack Developer</span>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">Portfolio Owner</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-glow">
            <img
              src="/img/Apple-Store.jpg"
              alt="Full Stack Developer Journey"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Article Content */}
          <Card className="glass-card p-8 md:p-12 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                After 5 years in the industry, I've learned that being a full stack developer is more than just knowing multiple technologies—it's about understanding how all pieces fit together.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">The Beginning</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I started my career, I was fascinated by how a simple HTML page could transform into interactive experiences. My first project was a basic todo app, but it opened my eyes to the endless possibilities of web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The learning curve was steep, but every challenge taught me something valuable. From understanding the DOM to mastering asynchronous JavaScript, each concept built upon the last.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Key Learnings</h2>
              
              <Card className="glass-card p-6 my-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Frontend Evolution</h3>
                <p className="text-muted-foreground">
                  From jQuery to React, I've witnessed the rapid evolution of frontend frameworks. Each iteration brought new paradigms and better developer experiences.
                </p>
              </Card>

              <Card className="glass-card p-6 my-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4">Backend Mastery</h3>
                <p className="text-muted-foreground">
                  Understanding server architecture, databases, and APIs has been crucial. The backend is where business logic lives, and getting it right is essential for scalable applications.
                </p>
              </Card>

              <Card className="glass-card p-6 my-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4">DevOps Integration</h3>
                <p className="text-muted-foreground">
                  Learning deployment, CI/CD, and cloud services rounds out the full stack experience. Being able to ship code confidently is a superpower.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-12 mb-6">Current Focus</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, I focus on creating scalable applications that provide excellent user experiences while maintaining clean, maintainable code. Performance optimization and accessibility have become priorities in every project I work on.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The journey continues, and I'm excited about what's next! With AI tools, new frameworks, and evolving best practices, there's always something new to learn and master.
              </p>

              <Card className="glass-card p-8 my-12 bg-gradient-primary/10 text-center">
                <p className="text-xl font-semibold mb-4">
                  "The best developers never stop learning. Stay curious, stay humble, and keep building."
                </p>
              </Card>
            </div>
          </Card>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-6">
            {["career", "development", "full-stack"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium hover:bg-accent/70 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <Card className="glass-card p-8 mt-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                PO
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">About the Author</h3>
                <p className="text-muted-foreground mb-4">
                  Full Stack Developer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and continuous learning.
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-primary">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-border">
            <Link to="/blog">
              <Button variant="ghost" className="hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" />
                All Posts
              </Button>
            </Link>
            <Link to="/blog/How-Freelancers-Get-Paid">
              <Button variant="ghost" className="hover:gap-3 transition-all">
                Next Article
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost1;
