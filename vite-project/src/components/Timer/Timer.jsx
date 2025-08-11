import { useEffect, useState } from "react";

export default function Timer(){
    const [time,setTime] = useState(10);


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1);
        } , 1000)

        return function() {
            clearInterval(interval);
        }
    }, [])
    return(
        <>
        <h1>{time}</h1>
        </>
    )
}