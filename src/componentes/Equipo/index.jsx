import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
//destructuracion
const { colorPrimario, colorSegundario, titulo, id} = props.datos
const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(colorSegundario, 0.6)
    }

const estilotitulo = {borderColor: colorSegundario}

    return <> 
    {colaboradores.length > 0 &&
    <section className="equipo" style={obj}>
        <input
        type='color'
        className="input-color"
        value={colorSegundario}
        onChange={(evento) => {
            actualizarColor(evento.target.value, id)
        }}
        
        
        />
        <h3 style={estilotitulo}>{titulo}</h3>
            <div className="colaboradores">
                
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorSegundario = {hexToRgba(colorSegundario, 0.6)}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
                
            </div>
        
    </section>
}
</>
}

export default Equipo