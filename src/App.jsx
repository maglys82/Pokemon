import './App.css'
import Home from './HomePage';
import Navigation from './Navegador';
import Pokemon from './Pokemon';
import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';



const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/pokemon?/:name"
            element={<Pokemon />}
          />
        </Routes>
    </div>
  );
};
export default App;

