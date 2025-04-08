import { useEffect } from "react";

function ListProducts(){

    //on mount  => useEffect(setup methods, empty list of dependencies)
    useEffect(() => {
        console.log("listproducts mounted");

        return () => {
            console.log("listproducts unmounted");
        }
    }, [])

    return (
        <div>
            <h3>List Products</h3>
        </div>
    )
}

export default ListProducts;