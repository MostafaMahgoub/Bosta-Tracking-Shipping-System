import React from 'react';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div>
        test
      </div>
    </AppProvider>
  );
}

export default App;
