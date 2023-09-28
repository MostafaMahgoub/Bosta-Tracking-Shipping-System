import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [data, setData] = useState(null);

  const toggleLanguage = (Lang) => {
    setLanguage(Lang);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [trackingNumber]);

  useEffect(() => {
    if (trackingNumber) {
      fetchData();
    }
  }, [trackingNumber, fetchData]);

  const contextValue = {
    language,
    toggleLanguage,
    trackingNumber,
    setTrackingNumber,
    data,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
