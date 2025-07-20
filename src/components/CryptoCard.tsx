
// Importa os ícones TrendingUp e TrendingDown da biblioteca lucide-react
import { TrendingUp, TrendingDown } from 'lucide-react';

// Define a interface para as propriedades do componente CryptoCard
interface CryptoCardProps {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    image: string;
  };
}

// Componente funcional CryptoCard que exibe informações de uma criptomoeda
const CryptoCard = ({ crypto }: CryptoCardProps) => {
  // Verifica se a variação percentual do preço nas últimas 24h é positiva
  const isPositive = crypto.price_change_percentage_24h > 0;

  return (
    // Contêiner principal do card com estilos de glassmorphism e efeitos de hover
    <div className="group glass rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-white/20 hover:shadow-2xl hover:shadow-crypto-red-medium/10 hover:-translate-y-2 border border-white/10 hover:border-white/30">
      {/* Seção superior do card com imagem, nome, símbolo e variação de preço */}
      <div className="flex items-center justify-between mb-4">
        {/* Informações da criptomoeda: imagem, nome e símbolo */}
        <div className="flex items-center space-x-3">
          {/* Contêiner da imagem com efeitos de hover */}
          <div className="relative">
            <img 
              src={crypto.image} 
              alt={crypto.name}
              className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            {/* Overlay de efeito visual na imagem ao passar o mouse */}
            <div className="absolute -inset-1 bg-gradient-to-r from-crypto-red-dark to-crypto-red-medium rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          {/* Nome e símbolo da criptomoeda */}
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">{crypto.name}</h3>
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        
        {/* Indicador de variação de preço (positiva ou negativa) */}
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-110 ${
          isPositive 
            ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' 
            : 'bg-red-500/20 text-red-400 group-hover:bg-red-500/30'
        }`}>
          {/* Ícone de tendência (para cima se positivo, para baixo se negativo) */}
          {isPositive ? (
            <TrendingUp className="w-3 h-3 group-hover:scale-125 transition-transform duration-300" />
          ) : (
            <TrendingDown className="w-3 h-3 group-hover:scale-125 transition-transform duration-300" />
          )}
          {/* Variação percentual do preço nas últimas 24h */}
          <span className="text-xs font-medium">
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </span>
        </div>
      </div>
      
      {/* Seção inferior do card com preço atual e capitalização de mercado */}
      <div className="space-y-2">
        {/* Preço atual da criptomoeda */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Preço</span>
          <span className="font-semibold text-foreground group-hover:scale-105 transition-transform duration-300">
            ${crypto.current_price.toLocaleString()}
          </span>
        </div>
        
        {/* Capitalização de mercado da criptomoeda */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Market Cap</span>
          <span className="text-sm text-foreground/80 group-hover:text-foreground group-hover:scale-105 transition-all duration-300">
            ${(crypto.market_cap / 1000000000).toFixed(2)}B
          </span>
        </div>
      </div>

      {/* Overlay de efeito de hover para o card inteiro */}
      <div className="absolute inset-0 bg-gradient-to-r from-crypto-red-dark/5 to-crypto-red-medium/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default CryptoCard;