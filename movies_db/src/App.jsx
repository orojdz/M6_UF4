import './App.css'
import { MovieCard }from './components/MovieCard';
import { Welcome } from './components/Welcome'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Link } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome username={"Oriana"} />} />
        <Route path="/movies" element={<MovieCard title={"Cank"} image={"./img/cank.jpg"}/>} />
      </Routes>
  );
}

export default App