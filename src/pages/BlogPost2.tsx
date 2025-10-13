import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Hash, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost2 = () => {
  const [activeSection, setActiveSection] = useState("");

  const tableOfContents = [
    { id: "payment-methods", title: "Payment Methods on Platforms" },
    { id: "processing-options", title: "Payment Processing Options" },
    { id: "payment-terms", title: "Setting Up Payment Terms" },
    { id: "platform-specific", title: "Platform-Specific Processes" },
    { id: "payment-security", title: "Protecting Yourself" },
    { id: "payment-issues", title: "Handling Payment Issues" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="space-y-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold inline-block">
                Technology
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">
                  How Freelancers Get Paid: A Complete Payment Guide
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>7 min read</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img
                src="/img/Freelancer.jpeg"
                alt="Freelancer Payment Guide"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Introduction */}
            <Card className="glass-card p-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Getting paid properly and securely is one of the most important aspects of freelancing. This comprehensive guide covers everything you need to know about receiving payments as a freelancer.
              </p>
            </Card>

            {/* Section 1 */}
            <div id="payment-methods" className="scroll-mt-24">
              <Card className="glass-card p-8 space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Hash className="h-8 w-8 text-primary" />
                  Payment Methods on Freelance Platforms
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Platform Escrow Systems</h3>
                    <p className="text-muted-foreground mb-4">
                      Most reputable freelance websites use escrow protection to ensure both parties are protected:
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Client deposits money into escrow when hiring you",
                        "You complete the work and submit it",
                        "Client reviews and approves the work",
                        "Platform releases payment to you",
                        "You withdraw funds to your bank account",
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
                    <h4 className="font-bold mb-2">Popular platforms with escrow:</h4>
                    <p className="text-muted-foreground">Upwork, Fiverr, Freelancer.com, Toptal</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Section 2 */}
            <div id="processing-options" className="scroll-mt-24">
              <Card className="glass-card p-8 space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Hash className="h-8 w-8 text-primary" />
                  Payment Processing Options
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "PayPal",
                      features: ["Fast, globally accepted", "2.9% + $0.30 per transaction", "Instant transfers available", "Good for international clients"],
                    },
                    {
                      name: "Wise (TransferWise)",
                      features: ["Excellent for international", "Lower conversion fees", "Competitive exchange rates", "Popular among freelancers"],
                    },
                    {
                      name: "Payoneer",
                      features: ["Specialized for freelancers", "Platform integration", "Prepaid debit card", "Multi-country support"],
                    },
                    {
                      name: "Cryptocurrency",
                      features: ["Bitcoin, Ethereum, USDC", "Lower transaction fees", "Faster processing", "Requires crypto knowledge"],
                    },
                  ].map((option) => (
                    <Card key={option.name} className="p-6 hover-lift cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">{option.name}</h3>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            {/* Section 3 */}
            <div id="payment-security" className="scroll-mt-24">
              <Card className="glass-card p-8 space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Hash className="h-8 w-8 text-primary" />
                  Protecting Yourself: Payment Security
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-red-500">Red Flags to Avoid</h3>
                    <div className="space-y-3">
                      {[
                        "Pay outside the platform initially",
                        "Start work before payment secured",
                        "Vague payment terms",
                        "Requests for bank login info",
                        "Complex payment schemes",
                      ].map((flag, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
                          <span className="text-red-500 font-bold">❌</span>
                          <span className="text-sm">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-500">Best Practices</h3>
                    <div className="space-y-3">
                      {[
                        "Use platform escrow for new clients",
                        "Get 30-50% upfront",
                        "Document all work",
                        "Use time-tracking tools",
                        "Keep detailed records",
                      ].map((practice, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                          <span className="text-green-500 font-bold">✅</span>
                          <span className="text-sm">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Conclusion */}
            <Card className="glass-card p-8 bg-gradient-primary/10">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Getting paid as a freelancer involves choosing the right payment methods, setting clear terms upfront, and protecting yourself with proper contracts and documentation.
              </p>
              <p className="text-lg font-semibold">
                Pro Tip: Never start significant work without payment security in place. Your time and skills are valuable—treat them that way!
              </p>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-border">
              <Link to="/blog/full-stack-journey">
                <Button variant="ghost">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              </Link>
              <Link to="/blog/why-performance-matters">
                <Button variant="ghost">
                  Next
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`block p-3 rounded-lg transition-all text-sm hover:bg-accent ${
                      activeSection === item.id ? "bg-accent font-semibold" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="font-bold text-lg mb-3">Share this article</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
