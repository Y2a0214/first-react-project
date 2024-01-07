import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Electronis from './component/electronis';
import NotFound from './component/notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}>
          <Route element={<Electronis />} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
