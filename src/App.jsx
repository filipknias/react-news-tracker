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
        <Header />
        <div className="routes-container">
          <ArticlesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ArticlesProvider>
        </div>
    </BrowserRouter>
  );
}

export default App;
