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
        {/* <Image imgLink={imageLink} ></Image> */}
        <h5> quantity : {quantity} </h5>
        <h3>{price}</h3>
        <h4>{totalPrice}</h4>
        <img src={imageLink} width="100px" height="100px" ></img>

        
        </div>

        <Button text={"X"} buttonOnClick={deleteItemFromCart} ></Button>


    </div>


  )
}
