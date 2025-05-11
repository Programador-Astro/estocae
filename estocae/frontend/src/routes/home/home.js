import './style.css'
import { click } from './engine'
export default function Home(){
    return (
        <h1 class="hello" onClick={click()}>Hello World</h1>
    )
}