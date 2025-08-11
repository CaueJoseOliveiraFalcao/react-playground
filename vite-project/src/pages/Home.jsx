import { useState } from "react"
import Timer from "../components/Timer/Timer"
import Header from "../Header"

export default function Home(){
    const [showTime , setTime] = useState(true)
    return(
        <>
         <Header/>
         {showTime ? <Timer/> : null}
         <button onClick={setTime(!showTime)}>mostrar</button>
        </>
    )
}