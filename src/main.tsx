import { createRoot } from 'react-dom/client';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app';
import { ShopContextProvider } from '@/context/shop-context.tsx';
import { AuthProvider } from './context/auth-context';
import { UIContextProvider } from './context/ui-context';

/** biome-ignore lint/style/noNonNullAssertion: mandatory by React */
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <UIContextProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </UIContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
