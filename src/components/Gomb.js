
export default function Gomb(props){


    function atad(){
        props.fuggveny(props.id)
    }

    return(
        <button onClick={atad}>{props.szoveg}</button>
    )
}