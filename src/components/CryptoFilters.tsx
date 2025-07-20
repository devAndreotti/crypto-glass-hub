// Importa o hook useState do React e ícones da biblioteca lucide-react
import { useState } from 'react';
import { Filter, TrendingUp, TrendingDown, DollarSign, ArrowUpDown } from 'lucide-react';

// Define a interface para as propriedades do componente CryptoFilters
interface CryptoFiltersProps {
  onSortChange: (sort: string) => void;
  onFilterChange: (filter: string) => void;
  currentSort: string;
  currentFilter: string;
}

// Componente funcional CryptoFilters para filtrar e ordenar criptomoedas
const CryptoFilters = ({ onSortChange, onFilterChange, currentSort, currentFilter }: CryptoFiltersProps) => {
  // Estado para controlar se o menu de filtros está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Array com opções de ordenação disponíveis
  const sortOptions = [
    { value: 'market_cap_desc', label: 'Market Cap (Maior)', icon: DollarSign },
    { value: 'market_cap_asc', label: 'Market Cap (Menor)', icon: DollarSign },
    { value: 'price_change_desc', label: 'Mais Valorizadas', icon: TrendingUp },
    { value: 'price_change_asc', label: 'Menos Valorizadas', icon: TrendingDown },
    { value: 'price_desc', label: 'Preço (Maior)', icon: ArrowUpDown },
    { value: 'price_asc', label: 'Preço (Menor)', icon: ArrowUpDown },
  ];

  // Array com opções de filtro disponíveis
  const filterOptions = [
    { value: 'all', label: 'Todas' },
    { value: 'top10', label: 'Top 10' },
    { value: 'gainers', label: 'Em Alta' },
    { value: 'losers', label: 'Em Baixa' },
  ];

  return (
    // Contêiner principal do componente de filtros
    <div className="relative">
      {/* Botão principal para abrir/fechar o menu de filtros */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 glass px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg border border-white/20 hover:border-white/40"
      >
        {/* Ícone de filtro com animação de rotação no hover */}
        <Filter className="w-4 h-4 text-crypto-red-medium group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-medium group-hover:text-gradient transition-all duration-300">Filtros & Ordenação</span>
      </button>

      {/* Menu dropdown que aparece quando isOpen é true */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 glass rounded-xl p-6 border border-white/20 backdrop-blur-xl animate-fade-in z-50">
          {/* Seção de opções de ordenação */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-crypto-red-medium" />
              Ordenar por
            </h3>
            {/* Grid com todas as opções de ordenação */}
            <div className="grid grid-cols-1 gap-2">
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value); // Chama a função de callback para mudança de ordenação
                      setIsOpen(false); // Fecha o menu após seleção
                    }}
                    className={`group flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 ${
                      currentSort === option.value
                        ? 'bg-crypto-red-medium/20 text-crypto-red-light border border-crypto-red-medium/30' // Estilo para opção ativa
                        : 'hover:bg-white/10 text-foreground/80 hover:text-foreground border border-transparent hover:border-white/20' // Estilo para opção inativa
                    }`}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover:font-medium transition-all duration-300">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seção de opções de filtro */}
          <div>
            <h3 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
              <Filter className="w-4 h-4 text-crypto-red-medium" />
              Filtrar
            </h3>
            {/* Grid com todas as opções de filtro */}
            <div className="grid grid-cols-2 gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onFilterChange(option.value); // Chama a função de callback para mudança de filtro
                    setIsOpen(false); // Fecha o menu após seleção
                  }}
                  className={`group px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 ${
                    currentFilter === option.value
                      ? 'bg-crypto-red-medium/20 text-crypto-red-light border border-crypto-red-medium/30' // Estilo para filtro ativo
                      : 'hover:bg-white/10 text-foreground/80 hover:text-foreground border border-transparent hover:border-white/20' // Estilo para filtro inativo
                  }`}
                >
                  <span className="group-hover:font-medium transition-all duration-300">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Overlay invisível para fechar o menu quando clicar fora */}
          <div 
            className="fixed inset-0 -z-10" 
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoFilters;