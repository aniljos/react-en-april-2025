import axios from "axios";
import {  useState, useCallback, useMemo } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import ProductView from "./ProductView";

import { useTitle } from "../hooks/useTitle";
import { useProducts } from "../hooks/useProducts";


//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";

function ListProducts(){

    const {products, setProducts} = useProducts(baseUrl);
    const [isMessageVisible, setMessageVisible] = useState(false);
    useTitle("Products");

    //on mount  => useEffect(setup methods, empty list of dependencies)
   
   

    const deleteProduct = useCallback( async function deleteProduct(product: Product){

        try{
            
            await axios.delete(baseUrl + "/" + product.id);
            //await fetchProducts();
            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
            
            alert("deleted product: " + product.id);

        }catch{
            alert("failed to delete product" + product.id);
        }
    }, [products])

    const totalPrices = useMemo( () => {

        console.log("calculating prices...");
        let totalPrices = 0;
        products.forEach(p => {

            if(p.price)
                totalPrices += p.price;
        })
        return totalPrices;

    }, [products])

    return (
        <div>
            <h3>List Products</h3>

            <div>Total Prices: {totalPrices}</div>

            {isMessageVisible ? <div className="alert alert-primary">Page to demonstrate component optimization</div>: null}
            <button className="btn btn-primary" onClick={() => setMessageVisible(!isMessageVisible)}>Hide/Show</button>

            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {products.map(product => {
                    return (
                        // <div key={product.id} className="product">
                        //     <p>Id: {product.id}</p>
                        //     <p>{product.name}</p>
                        //     <p>{product.description}</p>
                        //     <p>Price: {product.price}</p>
                        //     <div>
                        //         <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                        //         <button className="btn btn-info">Edit</button>
                        //     </div>
                        // </div>
                        <ProductView key={product.id} product={product} onDelete={deleteProduct}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;