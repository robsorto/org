import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{
   /*  const [valor, actualizarValor] = useState("")  */

    const placeholdermodificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholdermodificado}
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio} 
        type={type}
        />
    </div>
}

export default Campo