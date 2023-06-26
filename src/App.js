import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './page/Detail';
import Main from './page/Main';
import data from './data.json'
import Cart from './page/Cart';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}></Route>  
        <Route path="/:slug" element= {<Detail />} />
        <Route path="/cart" element= {<Cart />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
