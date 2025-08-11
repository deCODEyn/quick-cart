import { createRoot } from 'react-dom/client';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app';
import {
  AuthProvider,
  ShopContextProvider,
  UIContextProvider,
} from '@/context';

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
