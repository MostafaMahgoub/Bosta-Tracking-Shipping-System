import React , {useContext} from 'react';
import { AppProvider , AppContext } from './AppContext';
import HeaderElement from './Header/Header';
import ShippingProgress from './ShippingProgress/ShippingProgress';
import ActivityLogs from './ActivityLogs/ActivityLogs';

function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}

function Content() {
  const { language } = useContext(AppContext);

  return (
    <div className={`${language === 'en' ? 'ltr' : 'rtl'}`}>
      <HeaderElement />
    <div className="flex justify-center items-center flex-col">
      <ShippingProgress />
      <ActivityLogs />
    </div>
    </div>
  );
}

export default App;
