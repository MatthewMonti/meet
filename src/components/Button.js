const Button = () => {
    const handleDetails = () => {
        console.log('hello galaxy');
    }
    return (
        <div className="App">
            <button onClick={handleDetails}>Show Details</button>
        </div>
    )
}

export default Button;