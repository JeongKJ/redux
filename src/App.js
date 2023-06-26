import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './page/Detail';
import Main from './page/Main';
import data from './data.json'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}></Route>  
        <Route path="/:slug" element= {<Detail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
