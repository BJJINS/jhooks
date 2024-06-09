import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';
// 刷新页面
new EventSource('/esbuild').addEventListener('change', () => location.reload());
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
