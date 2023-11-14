import './App.css'
import Home from './HomePage';
import Navigation from './Navegador';
import Pokemon from './Pokemon';
import { Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';



const App = () => {
  return (
    <div>
      <Navigation />
    
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/pokemon"
          element={<Pokemon/>}
        />
      </Routes>
    </div>
  );
};
export default App;