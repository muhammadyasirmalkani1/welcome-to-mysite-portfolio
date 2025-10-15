import { useState, useRef, useEffect } from "react";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  Star, 
  Link as LinkIcon,
  Zap,
  Cpu,
  Cloud,
  Code2,
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  Bookmark,
  Share2,
  Download,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Education = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedYear, setSelectedYear] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Tech University",
      year: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Web Development. Graduated Magna Cum Laude with honors in Artificial Intelligence.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development", "Machine Learning"],
      achievements: ["Dean's List", "Research Scholarship", "Hackathon Winner"],
      logo: "🎓"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy Pro",
      year: "2020",
      gpa: "Top 5%",
      description: "Intensive 6-month program covering modern web development technologies and best practices. Focus on real-world projects and agile methodologies.",
      courses: ["React", "Node.js", "MongoDB", "DevOps", "Agile Development", "System Design"],
      achievements: ["Capstone Project Excellence", "Peer Mentor", "Technical Interview Prep"],
      logo: "⚡"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-CDA-2023-001",
      status: "Active",
      link: "/education/aws-certified",
      badge: "🏆",
      level: "Professional",
      skills: ["Cloud Architecture", "Lambda", "DynamoDB", "API Gateway"]
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "META-REACT-2023",
      status: "Active",
      link: "/education/react-certified",
      badge: "⚛️",
      level: "Advanced",
      skills: ["Hooks", "Context API", "Performance", "Testing"]
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PRO-2022",
      status: "Active",
      link: "/education/google-cloud",
      badge: "🔧",
      level: "Professional",
      skills: ["GCP Services", "Kubernetes", "BigQuery", "Cloud Functions"]
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2022",
      credential: "CSM-2022-789",
      status: "Active",
      link: "/education/scrum-master",
      badge: "🔄",
      level: "Foundation",
      skills: ["Agile", "Sprint Planning", "Team Leadership", "Process Improvement"]
    }
  ];

  const courses = [
    {
      name: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      completed: "2024",
      duration: "8 hours",
      rating: 5,
      progress: 100,
      projects: ["Compound Components", "State Machine", "Performance Optimization"],
      certificate: true
    },
    {
      name: "System Design Interview",
      platform: "Educative",
      instructor: "Grokking Team",
      completed: "2023",
      duration: "12 hours",
      rating: 5,
      progress: 100,
      projects: ["URL Shortener", "Twitter Clone", "Video Streaming"],
      certificate: true
    },
    {
      name: "Docker & Kubernetes",
      platform: "Udemy",
      instructor: "Stephane Maarek",
      completed: "2023",
      duration: "16 hours",
      rating: 4,
      progress: 100,
      projects: ["Multi-container App", "CI/CD Pipeline", "Production Deployment"],
      certificate: true
    },
    {
      name: "TypeScript Masterclass",
      platform: "Pluralsight",
      instructor: "Brice Wilson",
      completed: "2022",
      duration: "6 hours",
      rating: 5,
      progress: 100,
      projects: ["Type-safe API", "Generic Components", "Advanced Types"],
      certificate: true
    }
  ];

  const skills_learned = [
    { 
      category: "Frontend Technologies", 
      icon: "🎨",
      description: "Modern web interfaces and user experiences",
      color: "from-purple-500 to-pink-500",
      skills: [
        { 
          name: "React", 
          link: "https://react.dev/", 
          level: "Advanced", 
          years: 4,
          projects: 24,
          proficiency: 95,
          lastUsed: "2024",
          tags: ["Hooks", "Context", "Suspense"]
        },
        { 
          name: "TypeScript", 
          link: "https://www.typescriptlang.org/", 
          level: "Advanced", 
          years: 3,
          projects: 18,
          proficiency: 90,
          lastUsed: "2024",
          tags: ["Generics", "Types", "Decorators"]
        },
        { 
          name: "Next.js", 
          link: "https://nextjs.org/", 
          level: "Advanced", 
          years: 3,
          projects: 12,
          proficiency: 88,
          lastUsed: "2024",
          tags: ["SSR", "SSG", "API Routes"]
        },
        { 
          name: "Vue.js", 
          link: "https://vuejs.org/", 
          level: "Intermediate", 
          years: 2,
          projects: 6,
          proficiency: 75,
          lastUsed: "2023",
          tags: ["Composition API", "Vuex", "Vue Router"]
        },
        { 
          name: "Tailwind CSS", 
          link: "https://tailwindcss.com/", 
          level: "Advanced", 
          years: 3,
          projects: 20,
          proficiency: 92,
          lastUsed: "2024",
          tags: ["Utility-first", "Responsive", "Plugins"]
        }
      ]
    },
    { 
      category: "Backend Development", 
      icon: "⚙️",
      description: "Server-side logic and database management",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "Node.js", 
          link: "https://nodejs.org/", 
          level: "Advanced", 
          years: 4,
          projects: 16,
          proficiency: 90,
          lastUsed: "2024",
          tags: ["Express", "Streams", "Cluster"]
        },
        { 
          name: "Python", 
          link: "https://www.python.org/", 
          level: "Intermediate", 
          years: 3,
          projects: 8,
          proficiency: 80,
          lastUsed: "2024",
          tags: ["FastAPI", "Pandas", "Automation"]
        },
        { 
          name: "PostgreSQL", 
          link: "https://www.postgresql.org/", 
          level: "Intermediate", 
          years: 3,
          projects: 10,
          proficiency: 78,
          lastUsed: "2024",
          tags: ["Indexing", "Transactions", "JSONB"]
        },
        { 
          name: "MongoDB", 
          link: "https://www.mongodb.com/", 
          level: "Intermediate", 
          years: 2,
          projects: 6,
          proficiency: 72,
          lastUsed: "2023",
          tags: ["Aggregation", "Sharding", "Atlas"]
        },
        { 
          name: "Redis", 
          link: "https://redis.io/", 
          level: "Intermediate", 
          years: 2,
          projects: 5,
          proficiency: 70,
          lastUsed: "2024",
          tags: ["Caching", "Pub/Sub", "Data Structures"]
        }
      ]
    },
    { 
      category: "Cloud & DevOps", 
      icon: "☁️",
      description: "Infrastructure and deployment automation",
      color: "from-orange-500 to-red-500",
      skills: [
        { 
          name: "AWS", 
          link: "https://aws.amazon.com/", 
          level: "Intermediate", 
          years: 2,
          projects: 8,
          proficiency: 75,
          lastUsed: "2024",
          tags: ["EC2", "S3", "Lambda", "RDS"]
        },
        { 
          name: "Google Cloud", 
          link: "https://cloud.google.com/", 
          level: "Beginner", 
          years: 1,
          projects: 3,
          proficiency: 60,
          lastUsed: "2023",
          tags: ["GKE", "BigQuery", "Cloud Run"]
        },
        { 
          name: "Docker", 
          link: "https://www.docker.com/", 
          level: "Advanced", 
          years: 3,
          projects: 15,
          proficiency: 85,
          lastUsed: "2024",
          tags: ["Containers", "Compose", "Multi-stage"]
        },
        { 
          name: "Kubernetes", 
          link: "https://kubernetes.io/", 
          level: "Intermediate", 
          years: 2,
          projects: 6,
          proficiency: 72,
          lastUsed: "2024",
          tags: ["Pods", "Services", "Helm", "Ingress"]
        },
        { 
          name: "Terraform", 
          link: "https://www.terraform.io/", 
          level: "Intermediate", 
          years: 2,
          projects: 4,
          proficiency: 68,
          lastUsed: "2024",
          tags: ["IaC", "Modules", "State Management"]
        }
      ]
    },
    { 
      category: "Tools & Methods", 
      icon: "🛠️",
      description: "Development workflow and collaboration",
      color: "from-green-500 to-emerald-500",
      skills: [
        { 
          name: "Git", 
          link: "https://git-scm.com/", 
          level: "Advanced", 
          years: 5,
          projects: 50,
          proficiency: 95,
          lastUsed: "2024",
          tags: ["Rebase", "Hooks", "Workflows"]
        },
        { 
          name: "Jenkins", 
          link: "https://www.jenkins.io/", 
          level: "Intermediate", 
          years: 2,
          projects: 5,
          proficiency: 70,
          lastUsed: "2023",
          tags: ["Pipelines", "CI/CD", "Plugins"]
        },
        { 
          name: "Figma", 
          link: "https://www.figma.com/", 
          level: "Advanced", 
          years: 3,
          projects: 25,
          proficiency: 88,
          lastUsed: "2024",
          tags: ["Prototyping", "Design Systems", "Collaboration"]
        },
        { 
          name: "Jira", 
          link: "https://www.atlassian.com/software/jira", 
          level: "Advanced", 
          years: 4,
          projects: 30,
          proficiency: 90,
          lastUsed: "2024",
          tags: ["Agile", "Scrum", "Reporting"]
        },
        { 
          name: "Slack", 
          link: "https://slack.com/", 
          level: "Advanced", 
          years: 4,
          projects: 40,
          proficiency: 92,
          lastUsed: "2024",
          tags: ["Integrations", "Workflows", "Automation"]
        }
      ]
    }
  ];

  const learningJourney = [
    { year: 2020, event: "Started Career", skills: ["React", "Node.js", "MongoDB"], milestone: "First Full-stack Role" },
    { year: 2021, event: "Backend Focus", skills: ["Python", "PostgreSQL", "Docker"], milestone: "Senior Developer" },
    { year: 2022, event: "Cloud & DevOps", skills: ["AWS", "Kubernetes", "Terraform"], milestone: "Cloud Certification" },
    { year: 2023, event: "Architecture", skills: ["System Design", "Microservices", "Security"], milestone: "Lead Developer" },
    { year: 2024, event: "AI & Future", skills: ["MLOps", "Serverless", "Edge Computing"], milestone: "Principal Engineer" }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner": return "text-green-400 bg-green-400/20 border-green-400/30";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      case "Advanced": return "text-red-400 bg-red-400/20 border-red-400/30";
      default: return "text-gray-400 bg-gray-400/20 border-gray-400/30";
    }
  };

  const getProficiencyColor = (percentage) => {
    if (percentage >= 90) return "from-green-500 to-emerald-500";
    if (percentage >= 80) return "from-blue-500 to-cyan-500";
    if (percentage >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-slate-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Animated Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning Journey
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Continuous evolution through <span className="text-purple-400 font-semibold">structured education</span>, 
            <span className="text-blue-400 font-semibold"> hands-on experience</span>, and 
            <span className="text-pink-400 font-semibold"> relentless curiosity</span>
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="glass-card p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{education.length}+</div>
              <div className="text-slate-400 text-sm">Degrees</div>
            </div>
            <div className="glass-card p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{certifications.length}+</div>
              <div className="text-slate-400 text-sm">Certifications</div>
            </div>
            <div className="glass-card p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{skills_learned.flatMap(cat => cat.skills).length}+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="glass-card p-4 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-slate-400 text-sm">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Learning Timeline */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              Learning Timeline
            </h2>
            <div className="flex gap-2">
              {learningJourney.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedYear(index)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedYear === index 
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {2020 + index}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-400 mb-2">
                  {learningJourney[selectedYear].year}
                </div>
                <div className="text-xl text-white font-semibold">
                  {learningJourney[selectedYear].milestone}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl text-blue-400 font-bold mb-4">
                  {learningJourney[selectedYear].event}
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {learningJourney[selectedYear].skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg text-slate-300 mb-4">
                  Key Focus Areas
                </div>
                <div className="space-y-2">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(selectedYear + 1) * 20}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-slate-400">
                    Progress: {selectedYear + 1}/5 years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Grid */}
        <section ref={sectionRef} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Mastered through real-world projects, continuous learning, and passion for technology
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {skills_learned.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="glass-card p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${categoryIndex * 0.2}s`,
                  animation: isVisible ? `slideUp 0.6s ease-out ${categoryIndex * 0.2}s both` : 'none'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    <p className="text-slate-400 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 group-hover:border-white/20 transition-all duration-300 group-hover:bg-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {skill.name}
                              </span>
                              <LinkIcon className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`px-2 py-1 rounded-lg text-xs border ${getLevelColor(skill.level)}`}>
                                {skill.level}
                              </span>
                              <span className="text-slate-400 text-sm">
                                {skill.years}y
                              </span>
                            </div>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-slate-400">
                              <span>Proficiency</span>
                              <span>{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} transition-all duration-1000`}
                                style={{ width: `${skill.proficiency}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {skill.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 border border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                {skill.projects} projects
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {skill.lastUsed}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Certifications & Badges
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Validated expertise from industry leaders
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Link key={index} to={cert.link}>
                <div 
                  className="glass-card p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 h-full group"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isVisible ? `slideUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{cert.badge}</div>
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-white text-center mb-2 group-hover:text-purple-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-blue-400 text-sm text-center mb-3">{cert.issuer}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Level</span>
                      <span className="text-yellow-400">{cert.level}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Issued</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="glass-card p-12 backdrop-blur-sm border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative">
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's combine cutting-edge technology with innovative thinking to create something extraordinary.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  <Eye className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Education;