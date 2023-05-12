import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#D9F7E9",
      colorSegundario: "#57C278 "
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSegundario: "#82CFFA"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSegundario: "#A6D157"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSegundario: "#E06B69"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSegundario: "#DB6EBF"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFF5D9",
      colorSegundario: "#FFBA05"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFEEDF",
      colorSegundario: "#FF8A29"
    } 
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
//registrar colaborador
const registrarColaborador = (colaborador) => {
  console.log("nuevo colaborador: ", colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador
const eliminarColaborador = (id) => {
const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
actualizarColaboradores(nuevosColaboradores)
}

//actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log('actualizar: ', color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id) {
      equipo.colorSegundario = color
    }
    return equipo
  }) 

  actualizarEquipos(equiposActualizados)
}

//crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuidv4() }])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
 actualizarColaboradores(colaboradoresActualizados)
}
//LISTA DE EQUIPOS
/* const equipos = [
  {
    titulo: "Programación",
    colorPrimario: "#D9F7E9",
    colorSegundario: "#57C278 "
  },
  {
    titulo: "Front End",
    colorPrimario: "#E8F8FF",
    colorSegundario: "#82CFFA"
  },
  {
    titulo: "Data Science",
    colorPrimario: "#F0F8E2",
    colorSegundario: "#A6D157"
  },
  {
    titulo: "Devops",
    colorPrimario: "#FDE7E8",
    colorSegundario: "#E06B69"
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#FAE9F5",
    colorSegundario: "#DB6EBF"
  },
  {
    titulo: "Móvil",
    colorPrimario: "#FFF5D9",
    colorSegundario: "#FFBA05"
  },
  {
    titulo: "Innovación y Gestión",
    colorPrimario: "#FFEEDF",
    colorSegundario: "#FF8A29"
  } 
] */


  return (
    <div>

      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></> } */}
        {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador= {registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }
      <Footer />

    </div>
  );
}

export default App;
