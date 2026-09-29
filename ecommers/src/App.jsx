import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/layout/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

import './App.css';
import  {CartContextProvider}  from './components/CartContext/CartContext.jsx';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route index element={<ItemListContainer/>}></Route>
            <Route path='/categoria/:category' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;