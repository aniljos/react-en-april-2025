import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import ProductView from "./ProductView";
import { useNavigate } from "react-router-dom";


const baseUrl = "http://localhost:9000/products";

function ListProducts(){

    
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    

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

    function editProduct(product: Product){
        console.log("edit product", product.id);
        navigate("/products/" + product.id);
    }

    return (
        <div>
            <h3>List Products Updated</h3>

            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {products.map(product => {
                    return (
                        <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProducts;