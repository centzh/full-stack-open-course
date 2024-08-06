// Component for input
const Input = ({input, setInput, handler}) => {
    return <input value={input} onChange={(event) => handler(event, setInput)}/>
}

export default Input