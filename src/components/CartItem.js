import React from 'react'
import styles from './CartItem.module.css'
import { Button } from './Button'
export const CartItem = ({id,name,imageLink,quantity,price,totalPrice}) => {

    // const { id } = useParams();



    // const deleteFromCart = async()=>{

    //     const response = await fetch(`http://localhost:8081/cart/delete/${id}`)
    //     console.log(response);

    // }


    function deleteItemFromCart(itemId) {
        const url = `http://localhost:8081/cart/delete/${id}`;
      
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            
            console.log('Item deleted');
          } else {
            
            console.log('Error deleting item');
          }
        })
        .catch(error => {
          
          console.error('Error deleting item:', error);
        });
      }
      



  return (
    <div className={styles.CartItem}>

        <div>
        <h3> name: {name}</h3>
        <br></br>
        {/* <Image imgLink={imageLink} ></Image> */}
        <h3> quantity : {quantity} </h3>
        <br></br>
        <h3> price per unit :  { Number(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })) }</h3>
        <br></br>
        <h4> total price :  { Number(totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })) }</h4>
        <br></br>
        <img src={imageLink} width="100px" height="100px" ></img>

        
        </div>

        <Button text={"X"} buttonOnClick={deleteItemFromCart} ></Button>


    </div>


  )
}
