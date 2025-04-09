import { useParams } from "react-router-dom"

function EditProduct(){

    const params = useParams();
    const id = params.id;
    
    return (
        <div>
            <h3>Edit Product: {id}</h3>
        </div>
    )
}

export default EditProduct