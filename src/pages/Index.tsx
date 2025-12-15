import HeroSection from "@/components/webinar/HeroSection";
import QuickDemoForm from "@/components/webinar/QuickDemoForm";
import OverviewSection from "@/components/webinar/OverviewSection";
import AgendaSection from "@/components/webinar/AgendaSection";
import TakeawaysSection from "@/components/webinar/TakeawaysSection";
import WhoCanAttendSection from "@/components/webinar/WhoCanAttendSection";
import SpeakerSection from "@/components/webinar/SpeakerSection";
import TestimonialsSection from "@/components/webinar/TestimonialsSection";
import VideoTestimonialsSection from "@/components/webinar/VideoTestimonialsSection";
import PastSessionsSection from "@/components/webinar/PastSessionsSection";
import FAQSection from "@/components/webinar/FAQSection";
import RegistrationSection from "@/components/webinar/RegistrationSection";
import RelatedWebinars from "@/components/webinar/RelatedWebinars";
import FooterCTA from "@/components/webinar/FooterCTA";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <HeroSection />
      <QuickDemoForm />
      <OverviewSection />
      <AgendaSection />
      <TakeawaysSection />
      <WhoCanAttendSection />
      <SpeakerSection />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      
      <FAQSection />
      <RegistrationSection />
      <RelatedWebinars />
      
    </div>;
};
export default Index;