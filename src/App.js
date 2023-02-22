import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsListPage } from './pages/ProductsListPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckOutPage } from './pages/CheckOutPage';

function App() {

  const [productsList, setProductsList] = useState();


  return (
    <div className="App">

      <>

        <Router>

          <Routes>
            <Route element={<><ProductsListPage /></>

            } path="/" />

            <Route element={<ProductDetailPage/>} path="/product/:id"/>
            
            <Route element={<CartPage/>} path="/cart"/> 

            <Route element={<CheckOutPage/>} path="/checkout" ></Route>
          
          </Routes>

        </Router>

      </>


    </div>
  );
}

export default App;
