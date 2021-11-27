import './App.css';
import { I18nextProvider } from 'react-i18next';
import { AppRoutes } from './AppRoutes';
import { CartContextProvider } from './CartContext/CartContext';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <CartContextProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </CartContextProvider>
    </I18nextProvider>
  );
}

export default App;
