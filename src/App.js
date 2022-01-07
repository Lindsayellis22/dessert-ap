import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <div className="App">
      <header>The Cultred Confectioner</header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='recipes/:id' element={<RecipePage />} />
        </Routes>
    </div>
  );
}

export default App;
