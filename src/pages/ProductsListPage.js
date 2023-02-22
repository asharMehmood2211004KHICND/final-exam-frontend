import React, { useEffect, useState } from 'react'
import { ProductItem } from '../components/ProductItem';




export const ProductsListPage = () => {

const [products,setProducts] = useState([]);

    useEffect(()=>{
        // fetch("http://localhost:8080/product/all")
        fetchData("http://localhost:8080/product/all")
        .then(
            
            data=>{
                // console.log(data)
                setProducts(data)
                console.log(products)
            }
            
            )
        // console.log(products);   
        // console.log("the data") 
    },[]);

    async function fetchData(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

  return (
    <div>ProductsListPage
        sdvsdv
        {console.log(products)}

            {products.map(product=>(<ProductItem name={product.name} shortDesc={product.shortDescription} price={product.price} image={product.imageLink} id={product.id}/>))}
    </div>
  )
}
