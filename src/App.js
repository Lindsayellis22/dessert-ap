import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import RecipeResults from './components/RecipeResults';

function App() {
  return (
    <div className="App">
      <header>Just Desserts</header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='results/:id' element={<RecipeResults />} />
        </Routes>
    </div>
  );
}

export default App;
