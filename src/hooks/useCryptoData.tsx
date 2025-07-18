
import { useState, useEffect } from 'react';

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
  total_volume: number;
}

export const useCryptoData = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'
        );
        
        if (!response.ok) {
          throw new Error('Falha ao buscar dados das criptomoedas');
        }
        
        const data = await response.json();
        setCryptos(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar dados crypto:', err);
        setError('Não foi possível carregar os dados das criptomoedas');
        // Dados mock para fallback
        setCryptos([
          {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            current_price: 45000,
            price_change_percentage_24h: 2.5,
            market_cap: 850000000000,
            image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
            total_volume: 25000000000
          },
          {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            current_price: 3200,
            price_change_percentage_24h: -1.2,
            market_cap: 385000000000,
            image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
            total_volume: 15000000000
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return { cryptos, loading, error };
};
