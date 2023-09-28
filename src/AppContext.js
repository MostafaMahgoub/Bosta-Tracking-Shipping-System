import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { t } = useTranslation();
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
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [trackingNumber]);

  useEffect(() => {
    if (trackingNumber) {
      fetchData();
    }
  }, [trackingNumber, fetchData]);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const contextValue = {
    language,
    toggleLanguage,
    trackingNumber,
    setTrackingNumber,
    data,
    t
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
