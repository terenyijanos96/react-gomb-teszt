import { useState } from "react"

export default function Gomb(props){
    const [szam, setSzam] = useState(0);

    // const lista = useState(0)
    // const szam = lista[0]
    // const setSzam = lista[1]

    
    function novel(){
        setSzam(szam + 1)
        props.fuggveny(props.id)
    }

    return(
        <button onClick={novel}>Kattintás: {szam}</button>
    )
}