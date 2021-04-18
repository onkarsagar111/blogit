import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
