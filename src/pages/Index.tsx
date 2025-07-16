
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketSection from '@/components/MarketSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-crypto-red-dark/5 via-transparent to-crypto-red-medium/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-crypto-red-dark/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crypto-red-medium/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <MarketSection />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
