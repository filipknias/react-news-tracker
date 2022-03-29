import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Sources from './pages/Sources/Sources';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <div className="routes-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;