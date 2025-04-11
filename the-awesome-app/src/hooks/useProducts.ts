import { useEffect, useState } from "react";
import { Product } from "../model/Product";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../redux/store";
import axios from "axios";

export function useProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);
     const navigate = useNavigate();


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
            const response = await axios.get<Product[]>(url,{headers: headers});
            console.log("success", response.data);
            setProducts(response.data);

        } catch(err) {
            console.log("error", err);
        }
    } 

    return {products, setProducts, fetchProducts}
}