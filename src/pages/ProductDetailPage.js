import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
// import styles from './ProductDetail.module.css';
import usePostData  from '../hooks/usePostData'


export const ProductDetailPage = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();
    const location = useLocation();
    const quantObject = location.state;
    //let  detail_quantity = quantObject.productQuantity;

    const navigate = useNavigate();

    const [detailQuantity,setDetailQuantity] = useState(quantObject.productQuantity);

    const [postData, data, isLoading, error] = usePostData('http://localhost:8081/cart/save');


    const add = ()=>{
       setDetailQuantity(detailQuantity+1)
    }

    const remove = ()=>{
        if(detailQuantity>0){setDetailQuantity(detailQuantity-1)}
        
    }

     

    const addToCart=()=>{
        let myPrice=product.price.replace(/,/g, "");
    let totalPrice=Number(myPrice)*detailQuantity;


        const postingData = {
            "name":product.name,
            "imageLink":product.imageLink,
            "quantity":detailQuantity,
            "price":myPrice,
            "totalPrice":totalPrice
        };
        postData(postingData);
        console.log(data);
        console.log(product.price);
        navigate("/cart");
    }

    useEffect(() => {
        const fetchProdcut = async () => {
            const response = await fetch(`http://localhost:8080/product/${id}`);
            const data = await response.json();
            setProduct(data);
            console.log(data)
        };

        fetchProdcut();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>
    }



    return (
        // className={styles.body}
        <div>
            <img src={product.imageLink} alt={product.name} width="500px" height="300px"></img>
            <h1>{product.name}</h1>
            <div><p>{product.longDescription}</p></div>
            <h2>price : {product.price}</h2>
            

            <div>
                <button onClick={add} >+</button>
                {/* <h4>{quantity}</h4> */}
                {/* <button onClick={decrease} >-</button> */}
                <h4>{detailQuantity}</h4>
                <button onClick={remove} >-</button>

            </div>
                    <br></br>
            <div>
                <Button buttonOnClick={addToCart} text={"add to cart 2"} ></Button>
            </div>


        </div>
    );
}
