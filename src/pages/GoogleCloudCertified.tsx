import { Award, Cloud, Server, Database, Network, Lock, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GoogleCloudCertified = () => {
  const services = [
    {
      icon: <Server className="w-7 h-7" />,
      category: "Compute",
      services: ["Compute Engine", "Cloud Run", "Cloud Functions", "Kubernetes Engine (GKE)"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Database className="w-7 h-7" />,
      category: "Storage & Databases",
      services: ["Cloud Storage", "Cloud SQL", "Firestore", "BigQuery"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Network className="w-7 h-7" />,
      category: "Networking",
      services: ["VPC Networks", "Cloud Load Balancing", "Cloud CDN", "Cloud DNS"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Lock className="w-7 h-7" />,
      category: "Security & Identity",
      services: ["IAM", "Cloud KMS", "Security Command Center", "Cloud Armor"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      category: "AI & Machine Learning",
      services: ["Vertex AI", "Cloud Vision API", "Natural Language API", "AutoML"],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      category: "DevOps & Monitoring",
      services: ["Cloud Build", "Cloud Logging", "Cloud Monitoring", "Cloud Trace"],
      color: "from-cyan-500/20 to-cyan-600/20"
    }
  ];

  const expertiseAreas = [
    "Architecting multi-region cloud solutions for high availability",
    "Implementing microservices with GKE and Cloud Run",
    "Optimizing costs with resource management best practices",
    "Designing secure, compliant infrastructure",
    "Building data pipelines with BigQuery and Dataflow",
    "Deploying CI/CD workflows with Cloud Build"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in">
          <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
            <Cloud className="w-24 h-24 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Google Cloud Professional</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional Cloud Architect - Designing and managing robust cloud solutions on GCP
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass-card px-8 py-4 text-center">
              <div className="text-sm text-muted-foreground">Provider</div>
              <div className="font-bold text-xl text-primary mt-1">Google Cloud</div>
            </div>
            <div className="glass-card px-8 py-4 text-center">
              <div className="text-sm text-muted-foreground">Level</div>
              <div className="font-bold text-xl mt-1">Professional</div>
            </div>
            <div className="glass-card px-8 py-4 text-center">
              <div className="text-sm text-muted-foreground">Year</div>
              <div className="font-bold text-xl mt-1">2022</div>
            </div>
            <div className="glass-card px-8 py-4 text-center">
              <div className="text-sm text-muted-foreground">Credential</div>
              <div className="font-bold text-xl mt-1">GCP-PRO-2022</div>
            </div>
          </div>
        </div>

        {/* Service Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Service Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color}`}>
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Expertise Showcase */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover-lift"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg pt-1">{area}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Statement */}
        <section className="glass-card p-12 text-center space-y-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
          <Award className="w-16 h-16 text-primary mx-auto" />
          <h3 className="text-3xl font-bold gradient-text">Certified Cloud Excellence</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Google Cloud Platform represents the cutting edge of cloud computing. This professional 
            certification demonstrates my ability to architect enterprise-grade solutions that scale, 
            perform, and remain secure in the cloud. From startup MVPs to enterprise migrations, 
            I leverage GCP's powerful services to deliver transformative results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <span className="glass-button px-6 py-3">Scalable Architecture</span>
            <span className="glass-button px-6 py-3">Security First</span>
            <span className="glass-button px-6 py-3">Cost Optimized</span>
            <span className="glass-button px-6 py-3">High Performance</span>
          </div>
          <Link to="/education">
            <button className="glass-button px-10 py-4 mt-6 text-lg hover-scale">
              View All Credentials
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default GoogleCloudCertified;
