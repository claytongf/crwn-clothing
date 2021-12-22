import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
