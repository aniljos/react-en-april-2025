
// <ProductView product={product} onDelete={}/>

import { Product } from "../model/Product";
import './ListProducts.css';
import { memo } from "react";

type ProductViewProps = {
    product: Product;
    onDelete: (product:Product) => void;
    onEdit: (product:Product) => void;

}



const ProductView: React.FC<ProductViewProps> = memo( ({ product, onDelete, onEdit }) => {
    console.log("rendering product-view", product.id);
    return (
        <div className="product">
            <p>Id: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div>
                <button className="btn btn-warning" onClick={() => { onDelete(product) }}>Delete</button>&nbsp;
                <button className="btn btn-info" onClick={() => { onEdit(product) }}>Edit</button>
            </div>
        </div>
    )
})

export default ProductView;