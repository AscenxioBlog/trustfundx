import React, { useEffect, useRef } from 'react';

const ForexMarketData = ({ theme }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const widgetOptions = {
      "colorTheme": "dark", // Set the widget's theme to dark
      "dateRange": "1m",
      "showChart": true,
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": false,
      "width": "100%",
      "height": "500",
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
      "plotLineColorFalling": "rgba(33, 150, 243, 1)",
      "gridLineColor": "rgba(240, 243, 250, 1)",
      "scaleFontColor": "rgba(120, 123, 134, 1)",
      "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
      "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
      "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
      "tabs": [
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR/USD" },
            { "s": "FX:GBPUSD", "d": "GBP/USD" },
            { "s": "FX:USDJPY", "d": "USD/JPY" },
            { "s": "FX:AUDUSD", "d": "AUD/USD" },
            { "s": "FX:USDCAD", "d": "USD/CAD" }
          ],
          "chart": {}
        },
        {
          "title": "Indices",
          "symbols": [
            { "s": "OANDA:US30USD", "d": "US Wall St 30" },
            { "s": "OANDA:UK100GBP", "d": "UK 100" },
            { "s": "CAPITALCOM:DE40EUR", "d": "Germany 30" },
            { "s": "OANDA:FRA40EUR", "d": "France 40" },
            { "s": "OANDA:JP225JPY", "d": "Japan 225" }
          ],
          "chart": {}
        },
        {
          "title": "Bonds",
          "symbols": [
            { "s": "CME_MINI:ESH2023", "d": "S&P 500" },
            { "s": "CME:BH2023", "d": "US 30Y Bond" },
            { "s": "CME:RTY2023", "d": "US 2Y T-Note" },
            { "s": "CBOT:ZB2023", "d": "US 5Y T-Note" },
            { "s": "CBOT:TY2023", "d": "US 10Y T-Note" }
          ],
          "chart": {}
        },
        {
          "title": "Commodities",
          "symbols": [
            { "s": "CME_MINI:MGC2023", "d": "Gold" },
            { "s": "CME:SI2023", "d": "Silver" },
            { "s": "CME:CL2023", "d": "WTI Crude Oil" },
            { "s": "ICEUSA:BR2023", "d": "Brent Crude Oil" },
            { "s": "NYMEX:NG2023", "d": "Natural Gas" },
            { "s": "ICEUSA:JOY2023", "d": "Coffee" }
          ],
          "chart": {}
        }
      ]
    };

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify(widgetOptions);

    containerRef.current.innerHTML = ''; // Clear previous widget
    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <div className="forex-market-data bg-black p-4">
      <div ref={containerRef}></div>
    </div>
  );
};

export default ForexMarketData;