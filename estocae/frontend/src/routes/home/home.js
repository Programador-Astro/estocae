import './style.css'

export default function Home(){
    function click(){
        console.log('div Clickada')
    }
    return (
        <h1 className="hello" onClick={click}>Hello World</h1>
    )
}