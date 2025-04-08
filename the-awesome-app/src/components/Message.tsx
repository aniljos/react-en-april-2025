function Message(){

    return(
        <div>
            <h4>Message: Hello React</h4>
            <p>This is a functional component</p>
            <p>Expression {5 + 7}</p>
            <p>Create at {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Message