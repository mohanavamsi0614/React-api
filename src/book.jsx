function Book(props) {
    return(
        <>
        <h1>{props.title}</h1>
        <div className="book">
        <div>
            <img src={props.img}></img>
            <h3>{props.auth}</h3>
            </div>
            <p>{props.des}</p>
        </div>
        </>
    )
    
}
export default Book