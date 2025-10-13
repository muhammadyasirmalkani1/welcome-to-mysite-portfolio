import { Play, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoSteps = [
    {
      id: 1,
      title: "Step 1: Introduction & Overview",
      description: "Get started with the basics and understand the fundamentals",
      thumbnail: "https://img.youtube.com/vi/3IVCeyrFch4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc",
      duration: "5:30",
      category: "Beginner"
    },
    {
      id: 2,
      title: "Step 2: Setup & Configuration",
      description: "Learn how to set up your environment and configure settings",
      thumbnail: "/loading-screen.png",
      videoUrl: "https://www.youtube.com/embed/i5PPRjiAxU8?si=5d60aiNG_khoMKzz",
      duration: "8:45",
      category: "Beginner"
    },
    {
      id: 3,
      title: "Step 3: Core Concepts",
      description: "Master the essential concepts and techniques",
      thumbnail: "/loading-screen.png",
      videoUrl: "https://www.youtube.com/embed/_k0gSkyxhr8?si=DOe3M9n_S1HPPcC1",
      duration: "12:20",
      category: "Intermediate"
    },
    {
      id: 4,
      title: "Step 4: Advanced Features",
      description: "Explore advanced features and best practices",
      thumbnail: "/loading-screen.png",
      videoUrl: "https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc",
      duration: "15:10",
      category: "Advanced"
    },
    {
      id: 5,
      title: "Step 5: Real-world Examples",
      description: "Apply your knowledge with practical examples",
      thumbnail: "/loading-screen.png",
      videoUrl: "https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc",
      duration: "18:30",
      category: "Advanced"
    },
    {
      id: 6,
      title: "Step 6: Final Project",
      description: "Build a complete project from start to finish",
      thumbnail: "/loading-screen.png",
      videoUrl: "https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc",
      duration: "25:45",
      category: "Expert"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Beginner":
        return "bg-primary/20 text-primary hover:bg-primary/30";
      case "Intermediate":
        return "bg-secondary/20 text-secondary hover:bg-secondary/30";
      case "Advanced":
        return "bg-accent/20 text-accent hover:bg-accent/30";
      case "Expert":
        return "bg-tertiary/20 text-tertiary hover:bg-tertiary/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Video Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our step-by-step video tutorials to master every aspect
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoSteps.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => video.videoUrl && setSelectedVideo(video.videoUrl)}
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(video.category)}>
                      {video.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Video {video.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-20 p-8 glass-card rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center gradient-text">
            Your Learning Path
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <Badge className="bg-primary/20 text-primary">Beginner</Badge>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-secondary/20 text-secondary">Intermediate</Badge>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-secondary to-accent" />
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-accent/20 text-accent">Advanced</Badge>
              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-accent to-tertiary" />
            </div>
            <Badge className="bg-tertiary/20 text-tertiary">Expert</Badge>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-5xl aspect-video bg-background rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
