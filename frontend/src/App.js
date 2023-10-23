import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/create" element={<CreateNote />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
