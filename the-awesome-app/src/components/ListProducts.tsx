import axios from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Product } from "../model/Product";
import './ListProducts.css';
import ProductView from "./ProductView";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { useNavigate } from "react-router-dom";


//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";

function ListProducts(){

    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setMessageVisible] = useState(false);
    const auth = useSelector((state: AppState) => state.auth);
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
            
            if(!auth.isAuthenticated){
                navigate("/login");
                return;
            }

            const headers = { "Authorization" : `Bearer ${auth.accessToken}`}
            const response = await axios.get<Product[]>(baseUrl,{headers: headers});
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