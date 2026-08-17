import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CampaignPackages from "./pages/CampaignPackages.tsx";
import CampaignProcess from "./pages/CampaignProcess.tsx";
import Websites from "./pages/Websites.tsx";
import Work from "./pages/Work.tsx";
import Storvo from "./pages/Storvo.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogArticle from "./pages/BlogArticle.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollManager from "./components/ScrollManager.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<CampaignPackages />} />
          <Route path="/process" element={<CampaignProcess />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/work" element={<Work />} />
          <Route path="/storvo" element={<Storvo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
