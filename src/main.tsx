import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app.tsx';
import ShopContextProvider from './context/ShopContext.tsx';

// biome-ignore lint/style/noNonNullAssertion: mandatory by React
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
