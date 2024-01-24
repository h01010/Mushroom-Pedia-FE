import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import AISearch from './pages/AISearch';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
