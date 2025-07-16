
import { Loader, RefreshCw, BarChart3, Search } from 'lucide-react';
import { useCryptoData } from '@/hooks/useCryptoData';
import { useCryptoFilters } from '@/hooks/useCryptoFilters';
import CryptoCard from './CryptoCard';
import CryptoFilters from './CryptoFilters';
import { Input } from '@/components/ui/input';

const MarketSection = () => {
  const { cryptos, loading, error } = useCryptoData();
  const {
    filteredAndSortedCryptos,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    searchTerm,
    setSearchTerm,
  } = useCryptoFilters(cryptos);

  const handleSortChange = (sortValue: string) => {
    const [option, direction] = sortValue.split('_');
    setSortBy(option as any);
    setSortDirection(direction === 'desc' ? 'desc' : 'asc');
  };

  const handleFilterChange = (filterValue: string) => {
    // Filter logic can be implemented here if needed
    console.log('Filter changed:', filterValue);
  };

  const getCurrentSort = () => {
    return `${sortBy}_${sortDirection}`;
  };

  if (loading) {
    return (
      <section id="market" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Loader className="w-8 h-8 animate-spin text-crypto-red-medium mx-auto mb-4" />
            <p className="text-foreground/60">Carregando dados do mercado...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="market" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="glass rounded-xl p-8 max-w-md mx-auto">
              <RefreshCw className="w-8 h-8 text-crypto-red-medium mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ops! Algo deu errado</h3>
              <p className="text-foreground/60 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 crypto-gradient hover:scale-105 rounded-lg transition-all duration-300 text-white font-medium"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="market" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 crypto-gradient rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Mercado</span> Crypto
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Análise completa do mercado de criptomoedas com dados em tempo real, 
            filtros avançados e ordenação inteligente para suas decisões de investimento.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <Input
              type="text"
              placeholder="Buscar por nome ou símbolo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass border-white/20 bg-white/5 hover:bg-white/10 focus:bg-white/10 transition-all duration-300"
            />
          </div>
          
          {/* Filters */}
          <CryptoFilters
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            currentSort={getCurrentSort()}
            currentFilter="all"
          />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-2">{filteredAndSortedCryptos.length}</h3>
            <p className="text-foreground/60">Moedas Exibidas</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-2">24h</h3>
            <p className="text-foreground/60">Atualização</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-2">Live</h3>
            <p className="text-foreground/60">Dados em Tempo Real</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-2">Pro</h3>
            <p className="text-foreground/60">Análise Profissional</p>
          </div>
        </div>

        {/* Crypto Grid */}
        {filteredAndSortedCryptos.length === 0 ? (
          <div className="text-center py-12">
            <div className="glass rounded-xl p-8 max-w-md mx-auto">
              <BarChart3 className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nenhuma criptomoeda encontrada</h3>
              <p className="text-foreground/60">Tente ajustar os filtros de busca</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedCryptos.map((crypto, index) => (
              <div
                key={crypto.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <CryptoCard crypto={crypto} />
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Análises <span className="text-gradient">Profissionais</span> de Mercado
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Nossa plataforma oferece análises detalhadas, filtros avançados e dados em tempo real 
              para te ajudar a tomar decisões informadas no mercado de criptomoedas.
            </p>
            <button className="px-8 py-4 crypto-gradient rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-crypto-red-medium/30">
              <span className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Ver Projeto no GitHub
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
