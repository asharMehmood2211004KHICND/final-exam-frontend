import React, { useState } from 'react'
import { Image } from './Image'
import styles from './ProductItem.module.css'
import { useNavigate } from 'react-router-dom'
import usePostData from '../hooks/usePostData'


export const ProductItem = ({ name, image, shortDesc, longDesc, price, id }) => {


    const navigate = useNavigate();

    const moveToDetail = () => {
        navigate(`/product/${id}`, { state: { productQuantity: quantity } });
    }

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        // quantity = quantity + 1;
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        // quantity = quantity - 1;
        if (quantity > 0) { setQuantity(quantity - 1) }

    }

    //const stringQuantity = quantity.toString();
    const [postData, data, isLoading, error] = usePostData('http://localhost:8081/cart/save');

    // let newStr = stringQuantity.replace(/,/g, "");
    let myPrice = price.replace(/,/g, "");
    let totalPrice = Number(myPrice) * quantity;

    const addToCart = () => {
        const postingData = {
            "name": name,
            "imageLink": image,
            "quantity": quantity,
            "price": myPrice,
            "totalPrice": totalPrice
        };
        if (quantity > 0) {
            postData(postingData);
        }

        console.log(data);
        // navigate(`/product/${id}`,{state:{productQuantity:quantity}});
        navigate("/cart");

    }



    return (
        <div className={styles.ProductItem} >
            <div>

                <img src={image} height='200px' width='200px'></img>

                <h4 onClick={moveToDetail} >name : {name}  </h4>
                <p>{shortDesc}</p>
                {/* <div>
                <Image imgLink={image} caption={name} ></Image>
            </div> */}
                <p> Rs {price}</p>
            </div>
            <div className={styles.quantity}>
                <button onClick={increase} >+</button>
                <h4>{quantity}</h4>
                <button onClick={decrease} >-</button>

            </div>
            <div className={styles.section} >
                <div><button onClick={addToCart} className={styles.Mybutton} >add to cart</button></div>

            </div>






        </div>

    );
}
