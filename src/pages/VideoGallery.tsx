import { Play, X, Clock, Award, TrendingUp, Sparkles } from “lucide-react”;
import { useState } from “react”;

const VideoGallery = () => {
const [selectedVideo, setSelectedVideo] = useState(null);
const [hoveredCard, setHoveredCard] = useState(null);

const videoSteps = [
{
id: 1,
title: “Introduction & Overview”,
description: “Get started with the basics and understand the fundamentals of modern web development”,
thumbnail: “https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc”,
duration: “5:30”,
category: “Beginner”,
color: “from-blue-500 to-cyan-500”
},
{
id: 2,
title: “Setup & Configuration”,
description: “Learn how to set up your environment and configure all necessary settings”,
thumbnail: “https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/i5PPRjiAxU8?si=5d60aiNG_khoMKzz”,
duration: “8:45”,
category: “Beginner”,
color: “from-blue-500 to-cyan-500”
},
{
id: 3,
title: “Core Concepts”,
description: “Master the essential concepts and techniques that form the foundation”,
thumbnail: “https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/_k0gSkyxhr8?si=DOe3M9n_S1HPPcC1”,
duration: “12:20”,
category: “Intermediate”,
color: “from-purple-500 to-pink-500”
},
{
id: 4,
title: “Advanced Features”,
description: “Explore advanced features, optimization techniques and best practices”,
thumbnail: “https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/GWrJZhZqFwQ?si=jVD9tREYOktU0Wyv”,
duration: “15:10”,
category: “Advanced”,
color: “from-orange-500 to-red-500”
},
{
id: 5,
title: “Real-world Examples”,
description: “Apply your knowledge with practical, real-world coding examples”,
thumbnail: “https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc”,
duration: “18:30”,
category: “Advanced”,
color: “from-orange-500 to-red-500”
},
{
id: 6,
title: “Final Project”,
description: “Build a complete, production-ready project from start to finish”,
thumbnail: “https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop”,
videoUrl: “https://www.youtube.com/embed/3IVCeyrFch4?si=uHKOuuDdVqu-szvc”,
duration: “25:45”,
category: “Expert”,
color: “from-emerald-500 to-teal-500”
}
];

const getCategoryIcon = (category) => {
switch (category) {
case “Beginner”:
return <Sparkles className="w-4 h-4" />;
case “Intermediate”:
return <TrendingUp className="w-4 h-4" />;
case “Advanced”:
return <Award className="w-4 h-4" />;
case “Expert”:
return <Award className="w-4 h-4" />;
default:
return null;
}
};

return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden">
{/* Animated Background */}
<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
</div>

```
  <div className="container mx-auto max-w-7xl relative z-10">
    {/* Header with Animations */}
    <div className="text-center mb-20 space-y-6">
      <div className="inline-block animate-float">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
          🎥 Premium Video Course
        </div>
      </div>
      
      <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          3D Video Gallery
        </span>
      </h1>
      
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
        Master web development with our comprehensive step-by-step video tutorials
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 animate-slide-up animation-delay-400">
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">6</div>
          <div className="text-sm text-gray-400">Videos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400">86:00</div>
          <div className="text-sm text-gray-400">Total Duration</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400">4</div>
          <div className="text-sm text-gray-400">Skill Levels</div>
        </div>
      </div>
    </div>

    {/* 3D Video Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {videoSteps.map((video, index) => (
        <div
          key={video.id}
          className="group cursor-pointer animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredCard(video.id)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setSelectedVideo(video)}
        >
          <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 transform ${
            hoveredCard === video.id 
              ? 'scale-105 -rotate-1' 
              : 'scale-100 rotate-0'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}>
            {/* Glowing Border Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${video.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
            
            {/* Card Content */}
            <div className="relative bg-slate-800/90 backdrop-blur-sm h-full rounded-2xl overflow-hidden border border-slate-700/50">
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${video.color} flex items-center justify-center transition-all duration-500 transform ${
                    hoveredCard === video.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  } shadow-2xl`}>
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className={`absolute top-3 left-3 flex items-center gap-1.5 bg-gradient-to-r ${video.color} px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg`}>
                  {getCategoryIcon(video.category)}
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-400">
                    Step {video.id}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(video.id)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full bg-gradient-to-r ${video.color}`}></div>
                    ))}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:${video.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                {/* Progress Indicator */}
                <div className="pt-4">
                  <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${video.color} transition-all duration-1000 ${
                        hoveredCard === video.id ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                hoveredCard === video.id ? 'animate-shine' : ''
              }`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Learning Path - 3D Timeline */}
    <div className="relative p-8 md:p-12 bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Your Learning Path
          </span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Progress through each level to master web development from basics to expert
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Beginner */}
          <div className="group flex items-center gap-4 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-2xl font-bold text-white shadow-xl transform group-hover:scale-110 transition-transform">
                Beginner
              </div>
            </div>
            <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Intermediate */}
          <div className="group flex items-center gap-4 animate-slide-up animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-2xl font-bold text-white shadow-xl transform group-hover:scale-110 transition-transform">
                Intermediate
              </div>
            </div>
            <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          </div>

          {/* Advanced */}
          <div className="group flex items-center gap-4 animate-slide-up animation-delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-2xl font-bold text-white shadow-xl transform group-hover:scale-110 transition-transform">
                Advanced
              </div>
            </div>
            <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-red-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Expert */}
          <div className="group animate-slide-up animation-delay-600">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 rounded-2xl font-bold text-white shadow-xl transform group-hover:scale-110 transition-transform">
                Expert
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Video Modal */}
    {selectedVideo && (
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={() => setSelectedVideo(null)}
      >
        <div 
          className="relative w-full max-w-6xl animate-scale-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute -top-12 right-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:rotate-90 group z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Video Info Below */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
            <p className="text-gray-400">{selectedVideo.description}</p>
          </div>
        </div>
      </div>
    )}
  </div>

  <style>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes shine {
      0% { transform: translateX(-100%) skewX(-15deg); }
      100% { transform: translateX(200%) skewX(-15deg); }
    }

    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scale-up {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
    }

    .animate-shine {
      animation: shine 1.5s ease-in-out;
    }

    .animate-slide-up {
      animation: slide-up 0.6s ease-out forwards;
      opacity: 0;
    }

    .animation-delay-200 {
      animation-delay: 0.2s;
    }

    .animation-delay-400 {
      animation-delay: 0.4s;
    }

    .animation-delay-600 {
      animation-delay: 0.6s;
    }

    .animate-fade-in {
      animation: fade-in 0.3s ease-out;
    }

    .animate-scale-up {
      animation: scale-up 0.4s ease-out;
    }
  `}</style>
</div>
```

);
};

export default VideoGallery;