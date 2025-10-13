import { Award, CheckCircle, Code, Cloud, Database, Shield, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AWSCertified = () => {
  const competencies = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Application Development",
      skills: ["Lambda Functions", "API Gateway", "DynamoDB", "S3 Storage"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Architecture",
      skills: ["EC2 Management", "VPC Configuration", "CloudFormation", "Auto Scaling"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      skills: ["RDS", "ElastiCache", "Aurora", "Database Migration"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      skills: ["IAM Policies", "KMS Encryption", "CloudTrail", "Security Best Practices"]
    }
  ];

  const projects = [
    "Built serverless APIs using Lambda and API Gateway",
    "Deployed scalable web applications on EC2 with Auto Scaling",
    "Implemented CI/CD pipelines with CodePipeline and CodeBuild",
    "Managed databases with RDS and DynamoDB for high availability",
    "Secured applications using IAM, KMS, and AWS Security Hub"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
            <Award className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">AWS Certified Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Associate Level Certification - Building and maintaining AWS-based applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass-card px-6 py-3">
              <span className="text-sm text-muted-foreground">Issued by</span>
              <p className="font-bold text-primary">Amazon Web Services</p>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-sm text-muted-foreground">Credential ID</span>
              <p className="font-bold">AWS-CDA-2023-001</p>
            </div>
            <div className="glass-card px-6 py-3">
              <span className="text-sm text-muted-foreground">Status</span>
              <p className="font-bold text-green-400">Active - 2023</p>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Core Competencies</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((comp, index) => (
              <Card key={index} className="glass-card p-6 hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {comp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
                    <ul className="space-y-2">
                      {comp.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Real-World Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Real-World Applications</h2>
          <div className="glass-card p-8">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Value */}
        <section className="glass-card p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold gradient-text">Why This Matters</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AWS powers millions of businesses worldwide. This certification validates my ability to 
            design, develop, and deploy cloud-based applications using AWS services, ensuring scalable, 
            secure, and cost-effective solutions.
          </p>
          <Link to="/education">
            <button className="glass-button px-8 py-3 hover-scale">
              View All Certifications
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AWSCertified;
