import { GraduationCap, Award, BookOpen, Calendar, ExternalLink, Star, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Tech University",
      year: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Web Development. Graduated Magna Cum Laude.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy Pro",
      year: "2020",
      gpa: "Top 5%",
      description: "Intensive 6-month program covering modern web development technologies and best practices.",
      courses: ["React", "Node.js", "MongoDB", "DevOps", "Agile Development"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-CDA-2023-001",
      status: "Active",
      link: "/education/aws-certified"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "META-REACT-2023",
      status: "Active",
      link: "/education/react-certified"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PRO-2022",
      status: "Active",
      link: "/education/google-cloud"
    },
    {
      name: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2022",
      credential: "CSM-2022-789",
      status: "Active",
      link: "/education/scrum-master"
    }
  ];

  const courses = [
    {
      name: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      completed: "2024",
      duration: "8 hours",
      rating: 5
    },
    {
      name: "System Design Interview",
      platform: "Educative",
      instructor: "Grokking Team",
      completed: "2023",
      duration: "12 hours",
      rating: 5
    },
    {
      name: "Docker & Kubernetes",
      platform: "Udemy",
      instructor: "Stephane Maarek",
      completed: "2023",
      duration: "16 hours",
      rating: 4
    },
    {
      name: "TypeScript Masterclass",
      platform: "Pluralsight",
      instructor: "Brice Wilson",
      completed: "2022",
      duration: "6 hours",
      rating: 5
    }
  ];

  // Enhanced skills with links and additional metadata
  const skills_learned = [
    { 
      category: "Frontend", 
      icon: "🎨",
      skills: [
        { name: "React", link: "https://react.dev/", level: "Advanced", years: 4 },
        { name: "TypeScript", link: "https://www.typescriptlang.org/", level: "Advanced", years: 3 },
        { name: "Next.js", link: "https://nextjs.org/", level: "Advanced", years: 3 },
        { name: "Vue.js", link: "https://vuejs.org/", level: "Intermediate", years: 2 },
        { name: "Tailwind CSS", link: "https://tailwindcss.com/", level: "Advanced", years: 3 }
      ]
    },
    { 
      category: "Backend", 
      icon: "⚙️",
      skills: [
        { name: "Node.js", link: "https://nodejs.org/", level: "Advanced", years: 4 },
        { name: "Python", link: "https://www.python.org/", level: "Intermediate", years: 3 },
        { name: "PostgreSQL", link: "https://www.postgresql.org/", level: "Intermediate", years: 3 },
        { name: "MongoDB", link: "https://www.mongodb.com/", level: "Intermediate", years: 2 },
        { name: "Redis", link: "https://redis.io/", level: "Intermediate", years: 2 }
      ]
    },
    { 
      category: "Cloud & DevOps", 
      icon: "☁️",
      skills: [
        { name: "AWS", link: "https://aws.amazon.com/", level: "Intermediate", years: 2 },
        { name: "Google Cloud", link: "https://cloud.google.com/", level: "Beginner", years: 1 },
        { name: "Docker", link: "https://www.docker.com/", level: "Advanced", years: 3 },
        { name: "Kubernetes", link: "https://kubernetes.io/", level: "Intermediate", years: 2 },
        { name: "Terraform", link: "https://www.terraform.io/", level: "Intermediate", years: 2 }
      ]
    },
    { 
      category: "Tools & Methods", 
      icon: "🛠️",
      skills: [
        { name: "Git", link: "https://git-scm.com/", level: "Advanced", years: 5 },
        { name: "Jenkins", link: "https://www.jenkins.io/", level: "Intermediate", years: 2 },
        { name: "Figma", link: "https://www.figma.com/", level: "Advanced", years: 3 },
        { name: "Jira", link: "https://www.atlassian.com/software/jira", level: "Advanced", years: 4 },
        { name: "Slack", link: "https://slack.com/", level: "Advanced", years: 4 }
      ]
    }
  ];

  // Helper function to get level color
  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner": return "text-green-400 bg-green-400/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/20";
      case "Advanced": return "text-red-400 bg-red-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Education & Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning journey through formal education, certifications, and hands-on experience
          </p>
        </div>

        {/* Formal Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Formal Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground mt-2">{edu.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.courses.map((course) => (
                        <span key={course} className="bg-white/5 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="glass-button px-4 py-2 font-semibold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Link key={index} to={cert.link}>
                <div className="glass-card p-6 hover-lift transition-all duration-300 h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Credential ID: {cert.credential}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="glass-button">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Online Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Continuous Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="glass-card p-6 hover-lift transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-foreground">{course.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < course.rating ? "text-yellow-400 fill-current" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-primary font-medium">{course.platform}</p>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{course.duration}</span>
                    <span>Completed: {course.completed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Skills Acquired Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Technical Skills & Technologies</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {skills_learned.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="glass-card p-6 hover-lift transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-primary">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <a
                      key={skillIndex}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <LinkIcon className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className={`px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                          <span className="text-muted-foreground">
                            {skill.years} year{skill.years !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mb-16">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
              Skills Overview
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {skills_learned.flatMap(cat => cat.skills).length}+
                </div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {skills_learned.flatMap(cat => cat.skills).filter(s => s.level === "Advanced").length}+
                </div>
                <div className="text-muted-foreground">Advanced Skills</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {Math.max(...skills_learned.flatMap(cat => cat.skills.map(s => s.years)))}+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="mt-16 text-center glass-card p-8 space-y-6">
          <h3 className="text-2xl font-bold gradient-text">Learning Philosophy</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Technology evolves rapidly, and staying current requires continuous learning. 
            I believe in learning by doing, sharing knowledge with others, and always pushing 
            the boundaries of what's possible."
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="glass-button px-4 py-2">Continuous Improvement</span>
            <span className="glass-button px-4 py-2">Hands-on Learning</span>
            <span className="glass-button px-4 py-2">Knowledge Sharing</span>
            <span className="glass-button px-4 py-2">Innovation Mindset</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;