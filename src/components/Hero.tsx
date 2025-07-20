// Importa ícones da biblioteca lucide-react e componentes do Spline para 3D
import { ArrowDown, BarChart3, TrendingUp, Zap, Bitcoin, DollarSign, TrendingDown, Activity, PieChart, Coins, LineChart, Target } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useIsMobile } from '@/hooks/use-mobile';

// Componente funcional Hero para a seção principal da página
const Hero = () => {
  // Hook personalizado para detectar se o dispositivo é mobile
  const isMobile = useIsMobile();

  return (
    // Seção principal com altura mínima da tela e centralização do conteúdo
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D interativo usando Spline - CORRIGIDO */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          pointerEvents: 'none', // Desabilita eventos no container
          touchAction: 'auto' 
        }}
      >
        <Spline
          scene={isMobile 
            ? "https://prod.spline.design/2Apnv4RNvW7u-mNR/scene.splinecode" // Cena 3D para mobile
            : "https://prod.spline.design/t3WLLq1o5jGl1fuW/scene.splinecode"  // Cena 3D para desktop
          }
          className="w-full h-full"
          style={{ 
            pointerEvents: 'auto',      // Permite interação com o canvas do Spline
            touchAction: 'auto',        // Permite gestos de toque
            WebkitTouchCallout: 'none', // Remove callouts no iOS
            WebkitUserSelect: 'none',   // Remove seleção de texto no WebKit
            userSelect: 'none'          // Remove seleção de texto
          }}
        />
      </div>

      {/* Overlay semi-transparente para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-background/40 z-5 pointer-events-none" />
      
      {/* Elementos animados flutuantes - Não interativos */}
      {/* Cada elemento tem uma animação de flutuação com delay diferente */}
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

      {/* Conteúdo principal - Interativo - CORRIGIDO */}
      <div 
        className="relative z-30 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" 
        style={{ pointerEvents: 'auto' }} // Garante que o conteúdo seja interativo
      >
        {/* Animação de deslizar para cima */}
        <div className="animate-slide-up">
          {/* Badge/Tag da plataforma */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3 glass rounded-full px-6 py-2 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-8 h-8 crypto-gradient rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground/80">Plataforma de Análise Profissional</span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient hover:scale-105 transition-transform duration-300 inline-block">CryptoHub</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl font-normal hover:text-foreground transition-colors duration-300">
              Plataforma Analytics
            </span>
          </h1>
          
          {/* Descrição da plataforma */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed hover:text-foreground/90 transition-colors duration-300">
            Análise avançada de criptomoedas com dados em tempo real, 
            insights profissionais e ferramentas de filtração inteligente 
            para decisões de investimento estratégicas.
          </p>
          
          {/* Botões de call-to-action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Botão principal */}
            <button
              onClick={() => {
                document.getElementById("mercado")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden px-8 py-4 crypto-gradient rounded-xl font-semibold text-white transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-crypto-red-medium/50 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Explorar Mercado
              </span>
            </button>
            {/* Botão secundário */}
            <button className="group px-8 py-4 glass hover:bg-white/30 rounded-xl font-semibold transition-all duration-500 hover:scale-110 border border-white/20 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 group-hover:text-crypto-red-medium group-hover:scale-125 transition-all duration-300" />
                Ver Análises
              </span>
            </button>
          </div>

          {/* Estatísticas da plataforma - CORRIGIDO */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
            style={{ pointerEvents: 'auto' }} // Garante que os cards sejam interativos
          >
            {/* Card de estatística 1 */}
            <div 
              className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              style={{ pointerEvents: 'auto' }} // Garante interação individual
            >
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">12+</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Criptomoedas</div>
            </div>
            {/* Card de estatística 2 */}
            <div 
              className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              style={{ pointerEvents: 'auto' }} // Garante interação individual
            >
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Dados Atualizados</div>
            </div>
            {/* Card de estatística 3 */}
            <div 
              className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
              style={{ pointerEvents: 'auto' }} // Garante interação individual
            >
              <div className="text-2xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">Real-time</div>
              <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Análises</div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll animado */}
        <div className="animate-bounce hover:scale-125 transition-transform duration-300">
          <ArrowDown className="w-5 h-5 text-foreground/60 mx-auto hover:text-foreground/90 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;