import React, { useEffect, useRef } from 'react';

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500 Index',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100 Cash CFD',
        },
        {
          proName: 'FX_IDC:EURUSD',
          title: 'EUR to USD',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en',
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container z-50 flex-shrink  md:h-11 h-16 overflow-hidden bg-gray-900 rounded-lg shadow-md">
      <div ref={containerRef} className="tradingview-widget-container__widget "></div>
      <div className="tradingview-widget-copyright text-center text-sm text-gray-400  mt-2">
        <a 
          href="https://www.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
          className="text-blue-500 hover:text-blue-600"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;