import React, { useEffect } from "react";

const TradingViewChart = () => {
  useEffect(() => {
    // Create and load the TradingView script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // Check if TradingView is loaded and create the widget
      if (window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: 400,
          symbol: "BITSTAMP:BTCUSD",
          interval: "30",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          hide_top_toolbar: true,
          hide_side_toolbar: true,
          container_id: "tradingview_chart",
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup to prevent duplicate scripts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_chart" />;
};

export default TradingViewChart;
