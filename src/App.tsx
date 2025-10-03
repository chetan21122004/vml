import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SeaFreight from "./pages/services/SeaFreight";
import AirFreight from "./pages/services/AirFreight";
import FreightForwarding from "./pages/services/FreightForwarding";
import CustomsClearance from "./pages/services/CustomsClearance";
import ContainerBooking from "./pages/services/ContainerBooking";
import Transportation from "./pages/services/Transportation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/freight-forwarding" element={<FreightForwarding />} />
            <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/container-booking" element={<ContainerBooking />} />
            <Route path="/services/transportation" element={<Transportation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
