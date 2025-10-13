import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Portfolio Image */}
          <div className="flex justify-center">
            <img
              src="/img/portfolio.png"
              alt="Portfolio"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-white mb-6"
            />
          </div>
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Would you like deeper </span>
              <br />
              <span className="text-foreground">insights.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There’s something magical about<span className="gradient-text-secondary font-semibold">carousels</span> 
              {" "} that transcends the ride itself. The artistry, history, and nostalgia captured in these spinning platforms of wonder deserve to be preserved and celebrated—and what better way than through beautifully crafted books? Whether you’re a serious collector, a casual enthusiast, or simply someone who appreciates folk art and Americana, carousel books offer a window into a bygone era of craftsmanship and joy.
From lavish coffee table volumes filled with stunning photography to scholarly works documenting individual carvers, the world of carousel literature is as rich and varied as the carousels themselves. In this comprehensive guide, we’ll explore the best carousel books available, helping you build a library worthy of this magnificent art form.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="/cv/My-CV.pdf" download>
              <Button variant="outline" className="glass-button px-8 py-6 text-lg">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/muhammadyasirmalkani1"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="http://linkedin.com/in/muhammadyasirmalkani"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow-secondary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <Link
              to="/contact"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow-accent transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 floating" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-secondary rounded-full blur-xl opacity-30 floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-accent rounded-full blur-xl opacity-30 floating" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default Home;
