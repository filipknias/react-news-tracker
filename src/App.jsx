import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ArticlesProvider from './context/ArticlesProvider';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
