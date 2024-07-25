import logo from './logo.svg';
import './App.css';
import First from './Components/index';
import Search from './Components/search';
import Viewall from './Components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/view" element={<Viewall/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
