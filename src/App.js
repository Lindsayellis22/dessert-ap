import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RecipePage from './components/RecipePage';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/'>
          <img src='cupcake/logo.png' className='cupcake' alt="Logo" /> 
          <h1>
            The Cultured Confectioner
          </h1>
        </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='recipes/:id' element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
