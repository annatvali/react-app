import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import './routes/Routes.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <App />
  </ErrorBoundary>
);

