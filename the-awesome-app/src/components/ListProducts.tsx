import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';


const baseUrl = "http://localhost:9000/products";

function ListProducts(){

    const [products, setProducts] = useState<Product[]>([]);

    //on mount  => useEffect(setup methods, empty list of dependencies)
    useEffect(() => {
        console.log("listproducts mounted");
        fetchProducts();
        return () => {
            console.log("listproducts unmounted");
        }
    }, [])
    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product[]>(baseUrl);
            console.log("success", response.data);
            setProducts(response.data);

        } catch(err) {
            console.log("error", err);
        }
    } 

    async function deleteProduct(product: Product){

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
    }

    return (
        <div>
            <h3>List Products</h3>

            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {products.map(product => {
                    return (
                        <div key={product.id} className="product">
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <div>
                                <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-info">Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;