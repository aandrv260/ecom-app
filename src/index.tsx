// Packages
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux Store
import store from './store';

// Styles
import './index.scss';

// Components
import App from './App';

const app = ReactDOM.createRoot(
  document.getElementById('app') as HTMLDivElement
);

app.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
