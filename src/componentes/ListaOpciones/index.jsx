import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    //vamos a traerlos por props
/* const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
] */

const manejarCambio = (e) => {
props.actualizarEquipo(e.target.value)
}
return <div className="lista-opciones">
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
        <option valor="" disable defaultValue="" hidden>Seleccionar Equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
    </select>
</div>
}

export default ListaOpciones
