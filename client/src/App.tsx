import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar, Footer } from "@/components/layout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Industries from "@/pages/industries";
import Portfolio from "@/pages/portfolio";
import FAQ from "@/pages/faq";
import Security from "@/pages/security";
import Contact from "@/pages/contact";
import Legal from "@/pages/legal";
import IndustryDetail from "@/pages/industry-detail";
import Products from "@/pages/products";
import MiriHousing from "@/pages/miri-housing";
import MiriPortal from "@/pages/miri-portal";
import MiriEhr from "@/pages/miri-ehr";
import MiriGrants from "@/pages/miri-grants";
import MiriTimeAttendance from "@/pages/miri-time-attendance";
import Demo from "@/pages/demo";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/industries" component={Industries} />
        <Route path="/industries/:slug" component={IndustryDetail} />
        <Route path="/products" component={Products} />
        <Route path="/miri-housing" component={MiriHousing} />
        <Route path="/miri-portal" component={MiriPortal} />
        <Route path="/miri-ehr" component={MiriEhr} />
        <Route path="/miri-grants" component={MiriGrants} />
        <Route path="/miri-time-attendance" component={MiriTimeAttendance} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/faq" component={FAQ} />
        <Route path="/security" component={Security} />
        <Route path="/contact" component={Contact} />
        <Route path="/legal" component={Legal} />
        <Route path="/demo" component={Demo} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
