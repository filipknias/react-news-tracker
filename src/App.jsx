import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ArticlesProvider from './context/ArticlesProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ArticlesProvider>
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </ArticlesProvider>
    </BrowserRouter>
  );
}

export default App;
