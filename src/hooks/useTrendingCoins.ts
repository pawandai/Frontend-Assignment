"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const useTrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trending coins");
        }
        const data = await response.json();
        // Extract the top 3 trending coins
        const top3Coins = data.coins.slice(0, 3).map((coin: any) => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol,
          marketCapRank: coin.item.market_cap_rank,
          image: coin.item.thumb,
          percentageChange: coin.item.data.price_change_percentage_24h.usd,
        }));
        setTrendingCoins(top3Coins);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return { trendingCoins, loading, error };
};

export default useTrendingCoins;
