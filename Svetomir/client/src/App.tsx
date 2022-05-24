import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import { useSelector } from 'react-redux';
import { isAuth } from './features/AppSlice';

function App() {
  const authenticated = useSelector(isAuth);
  const routes = useRoutes(authenticated);

  return (
    <Router>
      <Header />
      <main  id="tt-pageContent">
          {routes}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
