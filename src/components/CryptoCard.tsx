
import { TrendingUp, TrendingDown } from 'lucide-react';

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

const CryptoCard = ({ crypto }: CryptoCardProps) => {
  const isPositive = crypto.price_change_percentage_24h > 0;

  return (
    <div className="group glass rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] hover:bg-white/20 hover:shadow-2xl hover:shadow-crypto-red-medium/10 hover:-translate-y-2 border border-white/10 hover:border-white/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={crypto.image} 
              alt={crypto.name}
              className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-crypto-red-dark to-crypto-red-medium rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">{crypto.name}</h3>
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{crypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-110 ${
          isPositive 
            ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' 
            : 'bg-red-500/20 text-red-400 group-hover:bg-red-500/30'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-3 h-3 group-hover:scale-125 transition-transform duration-300" />
          ) : (
            <TrendingDown className="w-3 h-3 group-hover:scale-125 transition-transform duration-300" />
          )}
          <span className="text-xs font-medium">
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Preço</span>
          <span className="font-semibold text-foreground group-hover:scale-105 transition-transform duration-300">
            ${crypto.current_price.toLocaleString()}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">Market Cap</span>
          <span className="text-sm text-foreground/80 group-hover:text-foreground group-hover:scale-105 transition-all duration-300">
            ${(crypto.market_cap / 1000000000).toFixed(2)}B
          </span>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-crypto-red-dark/5 to-crypto-red-medium/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default CryptoCard;
