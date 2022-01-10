import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RecipePage from './components/RecipePage';
import './index.css';



function App() {
  return (
    <div className="App">
      <header>
      <img src='cupcake/logo.png' className='cupCake' alt="Logo" /> 
        <h1>
          <Link to='/'>The Cultured Confectioner</Link>
        </h1>
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='recipes/:id' element={<RecipePage />} />
        </Routes>
    </div>
  );
}

export default App;
