import './App.css'
import { MoviesAdd } from './components/MoviesAdd';
import { Welcome } from './components/Welcome'
import { MoviesList } from './pages/MoviesList'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/NavBar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Welcome username={"Oriana"} /> } />
        <Route path="/movies/list" element={ <MoviesList /> } />
        <Route path="/movies/add" element={ <MoviesAdd /> } />
      </Routes>
    </>
  );
}

export default App