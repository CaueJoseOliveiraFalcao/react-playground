import { useState } from "react"
import Timer from "../components/Timer/Timer"
import Header from "../Header"
import headerElement from "../components/HeaderW"
export default function Home(){
    const [showTime , setTime] = useState(true)
    return(
        <>
         <Header>
            <div>draigurein hynumaru?</div>
         </Header>
         <headerElement/>
         <Timer/>
         <button onClick={() => setTime(!showTime)}>mostrar</button>
        </>
    )
}