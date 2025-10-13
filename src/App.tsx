import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Passion from "./pages/Passion";
import Reliability from "./pages/Reliability";
import GrowthMindset from "./pages/GrowthMindset";
import TeamPlayer from "./pages/TeamPlayer";
import Skills from "./pages/Skills";
import Experience5Years from "./pages/Experience5Years";
import QuickLearner from "./pages/QuickLearner";
import FullStackExpertise from "./pages/FullStackExpertise";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import AWSCertified from "./pages/AWSCertified";
import ReactCertified from "./pages/ReactCertified";
import GoogleCloudCertified from "./pages/GoogleCloudCertified";
import ScrumMasterCertified from "./pages/ScrumMasterCertified";
import Pricing from "./pages/Pricing";
import PricingBasic from "./pages/PricingBasic";
import PricingProfessional from "./pages/PricingProfessional";
import PricingEnterprise from "./pages/PricingEnterprise";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import UIUXDesign from "./pages/UIUXDesign";
import Branding from "./pages/Branding";
import VideoGallery from "./pages/VideoGallery";
import Card3DShowcase from "./pages/Card3DShowcase";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/about/passion" element={<Layout><Passion /></Layout>} />
            <Route path="/about/reliability" element={<Layout><Reliability /></Layout>} />
            <Route path="/about/growth-mindset" element={<Layout><GrowthMindset /></Layout>} />
            <Route path="/about/team-player" element={<Layout><TeamPlayer /></Layout>} />
            <Route path="/skills" element={<Layout><Skills /></Layout>} />
            <Route path="/skills/5-years-experience" element={<Layout><Experience5Years /></Layout>} />
            <Route path="/skills/quick-learner" element={<Layout><QuickLearner /></Layout>} />
            <Route path="/skills/full-stack-expertise" element={<Layout><FullStackExpertise /></Layout>} />
            <Route path="/experience" element={<Layout><Experience /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/education" element={<Layout><Education /></Layout>} />
            <Route path="/education/aws-certified" element={<Layout><AWSCertified /></Layout>} />
            <Route path="/education/react-certified" element={<Layout><ReactCertified /></Layout>} />
            <Route path="/education/google-cloud" element={<Layout><GoogleCloudCertified /></Layout>} />
            <Route path="/education/scrum-master" element={<Layout><ScrumMasterCertified /></Layout>} />
            <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
            <Route path="/pricing/basic" element={<Layout><PricingBasic /></Layout>} />
            <Route path="/pricing/professional" element={<Layout><PricingProfessional /></Layout>} />
            <Route path="/pricing/enterprise" element={<Layout><PricingEnterprise /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
            <Route path="/blog-post-1" element={<Layout><BlogPost1 /></Layout>} />
            <Route path="/blog-post-2" element={<Layout><BlogPost2 /></Layout>} />
            <Route path="/blog-post-3" element={<Layout><BlogPost3 /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/services/web-development" element={<Layout><WebDevelopment /></Layout>} />
            <Route path="/services/graphic-design" element={<Layout><GraphicDesign /></Layout>} />
            <Route path="/services/ui-ux-design" element={<Layout><UIUXDesign /></Layout>} />
            <Route path="/services/branding" element={<Layout><Branding /></Layout>} />
            <Route path="/video-gallery" element={<Layout><VideoGallery /></Layout>} />
            <Route path="/card-showcase" element={<Layout><Card3DShowcase /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
