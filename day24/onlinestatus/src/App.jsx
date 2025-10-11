// App.jsx
import React from 'react';
import OnlineStatusTracker from './components/OnlineStatusTracker'; // adjust path if needed

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🧭 Online Status Monitor</h1>
      <OnlineStatusTracker />
    </div>
  );
};

export default App;
