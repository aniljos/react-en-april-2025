function Button(props: any){

    return (
        <button {...props} style={{border: "2px solid red"}}>{props.text}</button>
    )
}

export default Button;