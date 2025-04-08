//type/interface/class
type MessageProps ={
    
    text: string;
    color?: string;
}



function Message(props: MessageProps){

    return (
        <div style={{border: `2px solid ${props.color}`, margin: "7px", padding: "7px"}}>
            <h4>Message: {props.text}</h4>
            <p>This is a functional component</p>
            <p>Expression {5 + 7}</p>
            <p>Create at {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Message