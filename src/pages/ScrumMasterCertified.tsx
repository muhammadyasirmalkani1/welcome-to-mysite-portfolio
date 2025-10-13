import { Award, Users, Target, TrendingUp, Lightbulb, MessageSquare, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ScrumMasterCertified = () => {
  const principles = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Servant Leadership",
      description: "Empowering teams to self-organize and make decisions",
      practices: [
        "Removing impediments",
        "Facilitating collaboration",
        "Coaching team members",
        "Building trust and transparency"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sprint Management",
      description: "Orchestrating effective sprint cycles",
      practices: [
        "Sprint Planning facilitation",
        "Daily Stand-ups coordination",
        "Sprint Reviews presentation",
        "Retrospectives moderation"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "Driving team and process excellence",
      practices: [
        "Velocity tracking",
        "Process optimization",
        "Team performance metrics",
        "Kaizen mindset cultivation"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Stakeholder Communication",
      description: "Bridging teams and business objectives",
      practices: [
        "Product Owner collaboration",
        "Stakeholder management",
        "Transparent reporting",
        "Expectation alignment"
      ]
    }
  ];

  const ceremonies = [
    { name: "Sprint Planning", frequency: "Bi-weekly", duration: "2-4 hours" },
    { name: "Daily Scrum", frequency: "Daily", duration: "15 minutes" },
    { name: "Sprint Review", frequency: "Bi-weekly", duration: "1-2 hours" },
    { name: "Sprint Retrospective", frequency: "Bi-weekly", duration: "1 hour" },
    { name: "Backlog Refinement", frequency: "Weekly", duration: "1-2 hours" }
  ];

  const achievements = [
    "Led 15+ teams to successful Agile transformation",
    "Improved team velocity by 40% on average",
    "Reduced sprint spillover from 30% to under 5%",
    "Facilitated cross-functional collaboration across 50+ stakeholders",
    "Implemented Agile practices in traditional waterfall environments"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in">
          <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
            <Award className="w-20 h-20 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Certified Scrum Master</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading agile teams to deliver exceptional value through iterative development
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Certified By</div>
              <div className="font-bold text-xl text-primary">Scrum Alliance</div>
            </Card>
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Credential ID</div>
              <div className="font-bold text-xl">CSM-2022-789</div>
            </Card>
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Year</div>
              <div className="font-bold text-xl">2022</div>
            </Card>
            <Card className="glass-card px-8 py-4">
              <div className="text-sm text-muted-foreground mb-1">Status</div>
              <div className="font-bold text-xl text-green-400">Active</div>
            </Card>
          </div>
        </div>

        {/* Core Principles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Scrum Master Principles</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="glass-card p-8 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{principle.title}</h3>
                      <p className="text-muted-foreground mt-1">{principle.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 pl-2">
                    {principle.practices.map((practice, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Scrum Ceremonies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Scrum Ceremonies Mastery</h2>
          <div className="glass-card p-8">
            <div className="space-y-4">
              {ceremonies.map((ceremony, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-gradient-to-r from-primary/10 to-transparent hover:from-primary/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3 md:mb-0">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-bold">{ceremony.name}</h3>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Frequency: </span>
                      <span className="font-semibold">{ceremony.frequency}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration: </span>
                      <span className="font-semibold">{ceremony.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold text-2xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-lg">{achievement}</p>
                  </div>
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-3" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="glass-card p-12 text-center space-y-8 bg-gradient-to-br from-primary/5 to-transparent">
          <h3 className="text-3xl font-bold gradient-text">Agile Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Being a Scrum Master is more than running meetings—it's about fostering a culture of 
            collaboration, continuous improvement, and delivering value. I believe in empowering 
            teams to be self-organizing, removing obstacles, and creating an environment where 
            innovation thrives. Through servant leadership and Agile principles, I help teams 
            achieve their highest potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="glass-button px-6 py-3">Team Empowerment</span>
            <span className="glass-button px-6 py-3">Iterative Delivery</span>
            <span className="glass-button px-6 py-3">Continuous Learning</span>
            <span className="glass-button px-6 py-3">Value Driven</span>
          </div>
          <Link to="/education">
            <button className="glass-button px-10 py-4 mt-6 text-lg hover-scale">
              Explore All Certifications
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ScrumMasterCertified;
