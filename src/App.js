import React from 'react';
import { AppProvider } from './AppContext';
import Header from './Header/Header';
import ShippingProgress from './ShippingProgress/ShippingProgress';
import ActivityLogs from './ActivityLogs/ActivityLogs';

function App() {
  return (
    <AppProvider>
      <Header />
      <div className='flex sm:flex-col flex-row'>
        <ShippingProgress />
        <ActivityLogs />
      </div>
    </AppProvider>
  );
}

export default App;
