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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/packages" element={<CampaignPackages />} />
          <Route path="/process" element={<CampaignProcess />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/work" element={<Work />} />
          <Route path="/storvo" element={<Storvo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
