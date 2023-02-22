import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';

export const CheckOutPage = () => {

    const navigate = useNavigate();

    function deleteAll  () {
        const url = `http://localhost:8081/cart/delete/all`;
      
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            
            console.log('all items deleted');
          } else {
            
            console.log('Error deleting items');
          }
        })
        .catch(error => {
          
          console.error('Error deleting the items:', error);
        });
      }
      





    const startOver=()=>{
          deleteAll()
          navigate("/");
    }

  return (

    <>
    <div>Thanks for your order.</div>
    <Button buttonOnClick={startOver} text={"Start Over"} ></Button>
    </>
    
  )
}
