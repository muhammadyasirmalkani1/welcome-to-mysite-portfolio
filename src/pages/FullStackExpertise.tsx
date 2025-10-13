import { Card, CardContent } from "@/components/ui/card";
import { Globe, Layers, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";

const FullStackExpertise = () => {
  const stackLayers = [
    {
      icon: Globe,
      title: "Frontend Excellence",
      description: "React, TypeScript, modern CSS frameworks, responsive design"
    },
    {
      icon: Server,
      title: "Backend Mastery",
      description: "Node.js, Express, API design, microservices architecture"
    },
    {
      icon: Database,
      title: "Data & Cloud",
      description: "PostgreSQL, MongoDB, AWS, Docker, infrastructure management"
    }
  ];

  const capabilities = [
    "Design and implement complete features from UI to database",
    "Architect scalable systems considering both frontend and backend",
    "Optimize performance across the entire application stack",
    "Debug issues anywhere in the system, from browser to server",
    "Make informed trade-offs between frontend and backend solutions",
    "Deploy and maintain applications in production environments"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <Link to="/skills" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          ← Back to Skills
        </Link>

        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gradient-secondary">
              <Layers className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Full-Stack Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end application development from user interface to server infrastructure
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-2xl font-semibold gradient-text-secondary">Complete Stack Proficiency</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a full-stack developer, I can handle every aspect of web application development. I'm equally 
                  comfortable crafting pixel-perfect user interfaces as I am architecting backend services and 
                  database schemas. This comprehensive skill set means I can take a feature from concept to 
                  production entirely on my own.
                </p>
                <p>
                  My full-stack expertise allows me to see the complete picture. When designing a frontend feature, 
                  I consider the backend implications. When architecting backend services, I think about how they'll 
                  serve the frontend efficiently. This holistic view leads to better architectural decisions and 
                  more cohesive applications.
                </p>
                <p>
                  I'm fluent in modern frontend frameworks like React and Next.js, backend technologies like Node.js 
                  and Python, databases including PostgreSQL and MongoDB, and cloud platforms like AWS and Azure. 
                  I understand DevOps practices, containerization with Docker, and can set up CI/CD pipelines.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {stackLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift text-center">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-gradient-accent">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                    <p className="text-muted-foreground text-sm">{layer.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="glass-card p-8 hover-lift">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What I Can Do</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{capability}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Frontend Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  React, TypeScript, Next.js, Tailwind CSS, responsive design, accessibility, performance optimization, 
                  state management, modern build tools, and testing frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Backend Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Node.js, Express, RESTful APIs, GraphQL, authentication, authorization, database design, caching 
                  strategies, microservices, serverless functions, and API security.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card p-8 hover-lift bg-gradient-to-br from-primary/10 to-accent/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-foreground">The Full-Stack Advantage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Having full-stack expertise means faster development, better communication, and fewer dependencies. 
                I don't need to wait for backend APIs to be built—I can build them myself. I can optimize the entire 
                data flow from database to user interface. I can debug issues across the entire stack without needing 
                multiple specialists. For startups and small teams, this versatility is invaluable. For larger 
                organizations, I can bridge the gap between frontend and backend teams, improving collaboration and 
                reducing miscommunication. Whether you need someone to build a complete MVP or contribute across 
                multiple parts of an existing system, my full-stack expertise delivers value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FullStackExpertise;
