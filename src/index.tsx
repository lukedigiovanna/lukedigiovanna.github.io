import ReactDOM from 'react-dom/client';
import App from './App';

import Engine from './engine';

new Engine();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
