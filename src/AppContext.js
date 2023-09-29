import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import styled from 'styled-components';

const StyledSteps = styled.div.withConfig({ shouldForwardProp: prop => prop !== 'language' })`
  .ant-steps-item-icon {
    float: ${props => props.language === 'en' ? 'left' : 'right'} !important;
  }
`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [data, setData] = useState(null);


  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [weekday, day, month, year] = formattedDate.split(' ');
    const formattedDateString = language === 'en' ? `${t(weekday)} ${t(day)} ${month} ${year}` : `${t(weekday)} ${month.replace(',', '')} ${t(day)} ${year}`;
    
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }).replace(/(AM|PM)\b/, '');
    const meridiem = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')[1];

    const formattedDay = weekday;
  
    return {
      date: formattedDateString,
      time: formattedTime,
      day : formattedDay,
      meridiem : meridiem
    };
  }
  


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
    t,
    formatDate
  };

  return (
    <AppContext.Provider value={contextValue}>
      <StyledSteps language={language}>
        {children}
      </StyledSteps>
    </AppContext.Provider>
  );
};
