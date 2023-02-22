import React, { useState,useEffect } from 'react'
import { Button } from '../components/Button';
import { CartItem } from '../components/CartItem';
import { useNavigate } from 'react-router-dom'


export const CartPage = () => {

  const [cart , setCart] = useState([]);


  const navigate = useNavigate();
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    // fetch("http://localhost:8080/product/all")
    fetchData("http://localhost:8081/cart/all")
    .then(
        
        data=>{
            // console.log(data)
            setCart(data)
            // console.log(data);
            // setTotal(total + data.totalPrice);
        }
        )
},[cart]);


  async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const backToShopping=()=>{
    navigate("/");
}

const checkout=()=>{
  navigate("/checkout")
}


  return (

    <>
    <div>CartPage
      {/* {console.log(cart)} */}
      {cart.map(cart=>(<CartItem id={cart.id} name={cart.name} imageLink={cart.imageLink} quantity={cart.quantity} price={cart.price} totalPrice={cart.totalPrice}  />))}
    </div>

    <Button buttonOnClick={backToShopping} text={"back to shopping"}></Button>
    <br></br>
    <Button buttonOnClick={checkout} text={"checkout"}></Button>
    <div>
      
      {cart.map(cart=> Number(cart.totalPrice) ).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
       </div>

       {/* <div>  total cost : {accumulator}</div>  */}



    </>

    
  );
}
