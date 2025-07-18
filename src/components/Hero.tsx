
import { ArrowDown, BarChart3, TrendingUp, Zap, Bitcoin, DollarSign, TrendingDown, Activity, PieChart, Coins, LineChart, Target } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Interactive */}
      <div className="absolute inset-0 z-0" style={{ touchAction: 'auto' }}>
        <Spline
          scene={isMobile 
            ? "https://prod.spline.design/2Apnv4RNvW7u-mNR/scene.splinecode"
            : "https://prod.spline.design/t3WLLq1o5jGl1fuW/scene.splinecode"
          }
          className="w-full h-full"
          style={{ 
            pointerEvents: 'auto',
            touchAction: 'auto',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        />
      </div>

      {/* Semi-transparent overlay to ensure text readability but allow interaction */}
      <div className="absolute inset-0 bg-background/40 z-5 pointer-events-none" />
      
      {/* Animated elements - Non-interactive */}
      <div className="absolute top-20 left-10 animate-float z-20 pointer-events-none">
        <BarChart3 className="w-8 h-8 text-crypto-red-medium opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float z-20 pointer-events-none" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-6 h-6 text-crypto-red-light opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float z-20 pointer-events-none" style={{ animationDelay: '2s' }}>
        <Zap className="w-5 h-5 text-crypto-red-medium opacity-35" />
      </div>
      <div className="absolute top-32 right-40 animate-float z-20 pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <Bitcoin className="w-6 h-6 text-crypto-red-light opacity-35" />
      </div>
      <div className="absolute bottom-32 right-12 animate-float z-20 pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <DollarSign className="w-5 h-5 text-crypto-red-medium opacity-40" />
      </div>
      <div className="absolute top-60 left-32 animate-float z-20 pointer-events-none" style={{ animationDelay: '2.5s' }}>
        <TrendingDown className="w-7 h-7 text-crypto-red-light opacity-25" />
      </div>
      <div className="absolute bottom-60 left-40 animate-float z-20 pointer-events-none" style={{ animationDelay: '3s' }}>
        <Activity className="w-6 h-6 text-crypto-red-medium opacity-45" />
      </div>
      <div className="absolute top-80 right-60 animate-float z-20 pointer-events-none" style={{ animationDelay: '0.8s' }}>
        <PieChart className="w-5 h-5 text-crypto-red-light opacity-30" />
      </div>
      <div className="absolute bottom-80 right-32 animate-float z-20 pointer-events-none" style={{ animationDelay: '1.8s' }}>
        <Coins className="w-6 h-6 text-crypto-red-medium opacity-35" />
      </div>
      <div className="absolute top-96 left-60 animate-float z-20 pointer-events-none" style={{ animationDelay: '2.2s' }}>
        <LineChart className="w-7 h-7 text-crypto-red-light opacity-40" />
      </div>
      <div className="absolute bottom-96 left-8 animate-float z-20 pointer-events-none" style={{ animationDelay: '2.8s' }}>
        <Target className="w-5 h-5 text-crypto-red-medium opacity-30" />
      </div>

      {/* Main Content - Interactive */}
      <div className="relative z-30 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass rounded-full px-6 py-2 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground/80">Plataforma de Análise Profissional</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient hover:scale-105 transition-transform duration-300 inline-block">CryptoHub</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl font-normal hover:text-foreground transition-colors duration-300">
              Plataforma Analytics
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed hover:text-foreground/90 transition-colors duration-300">
            Análise avançada de criptomoedas com dados em tempo real, 
            insights profissionais e ferramentas de filtração inteligente 
            para decisões de investimento estratégicas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative overflow-hidden px-8 py-4 crypto-gradient rounded-xl font-semibold text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-crypto-red-medium/50 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Explorar Mercado
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-red-medium to-crypto-red-light opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-8 py-4 glass hover:bg-white/30 rounded-xl font-semibold transition-all duration-500 hover:scale-110 border border-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 group-hover:text-crypto-red-medium group-hover:scale-125 transition-all duration-300" />
                Ver Análises
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group">
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">12+</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Criptomoedas</div>
            </div>
            <div className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group">
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Dados Atualizados</div>
            </div>
            <div className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group">
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">Real-time</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Análises</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce hover:scale-125 transition-transform duration-300">
          <ArrowDown className="w-5 h-5 text-foreground/60 mx-auto hover:text-foreground/90 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
