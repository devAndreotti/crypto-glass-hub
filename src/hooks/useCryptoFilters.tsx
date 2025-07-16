
import { useState, useMemo } from 'react';
import { CryptoData } from './useCryptoData';

export type SortOption = 'market_cap' | 'current_price' | 'price_change_percentage_24h' | 'name';
export type SortDirection = 'asc' | 'desc';

export const useCryptoFilters = (cryptos: CryptoData[]) => {
  const [sortBy, setSortBy] = useState<SortOption>('market_cap');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAndSortedCryptos = useMemo(() => {
    let filtered = cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      let aValue: number | string = a[sortBy];
      let bValue: number | string = b[sortBy];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [cryptos, sortBy, sortDirection, searchTerm]);

  return {
    filteredAndSortedCryptos,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    searchTerm,
    setSearchTerm,
  };
};
