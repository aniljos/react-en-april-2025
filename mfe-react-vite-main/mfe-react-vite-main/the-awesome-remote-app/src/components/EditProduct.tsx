//http://localhost:5173/products/4
//http://localhost:5173/products/5

import axios from "axios";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../model/Product";

function EditProduct() {

    const params = useParams();
    const [product, setProduct] = useState(new Product(0, "", 0, ""));
    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, []);

    async function fetchProduct() {

        try {
            const url = "http://localhost:9000/products/" + params.id;
            const response = await axios.get<Product>(url);
            setProduct(response.data);

        } catch {

            console.log("Failed to fetch data");
        }
    }
    function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {

        // const value = evt.target.value;
        // const copy = {...product};
        // copy.name = value;
        // setProduct(copy);

        setProduct({ ...product, name: evt.target.value })

    }

    async function save(e: MouseEvent) {
        e.preventDefault();

        try {
            const url = "http://localhost:9000/products/" + product.id;
            await axios.put(url, product);
            navigate(-1);
        }
        catch {
            alert("Failed to save..");
        }
    }
    function cancel(e: MouseEvent) {
        e.preventDefault();
        navigate(-1);
    }


    return (
        <div>
            <h4>Edit Product</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"
                        className="form-control" value={product.name} onChange={handleNameChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" className="form-control"
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: Number(e.target.value) })} />
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" className="form-control"
                        value={product.description}
                        onChange={e => setProduct({ ...product, description: e.target.value })} />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-info" onClick={cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;