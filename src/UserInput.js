const UserInput = (props) =>{
    const updateUserInput = (e)=>{
        if (e.target.value > 100){
            alert("Less then 100 please");
            return
        } else if(e.target.value < 0) {
            alert("More than 0 Please")
            return
        }
        props.updateInput(e.target.value);
    }
    return(
        <div className="user-input">
            <p>Input Percentage: </p>
            <input onChange={updateUserInput} type='number' min="0" max='100'/>
        </div>
    )
}
export default UserInput