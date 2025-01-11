"use client";

import { useState, useEffect } from "react";

const useCryptoPrice = () => {
  const [bitcoinData, setBitcoinData] = useState({
    usd: null,
    usd_24h_change: null,
    inr: null,
    inr_24h_change: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBitcoinData({
          usd: data.bitcoin.usd,
          usd_24h_change: data.bitcoin.usd_24h_change,
          inr: data.bitcoin.inr,
          inr_24h_change: data.bitcoin.inr_24h_change,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return { bitcoinData, loading, error };
};

export default useCryptoPrice;
