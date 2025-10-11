import React, { useState, useEffect } from 'react';

const OnlineStatusTracker = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastChanged, setLastChanged] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastChanged(new Date().toLocaleTimeString());
      playNotificationSound();
      showToast('You are back online!');
    };

    const handleOffline = () => {
      setIsOnline(false);
      setLastChanged(new Date().toLocaleTimeString());
      playNotificationSound();
      showToast('You are offline!');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const playNotificationSound = () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/notification.mp3');
    audio.play();
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = 1000;
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'green' : 'red',
          display: 'inline-block',
          marginRight: '10px',
        }}
      ></div>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
        Last changed: {lastChanged}
      </div>
    </div>
  );
};

export default OnlineStatusTracker;
