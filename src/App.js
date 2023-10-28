import './App.css';
import Navbar from './ProyectoFinal/NavBar';
import SobreMi from './ProyectoFinal/SobreMi';
import Inicio from './ProyectoFinal/Inicio';
import Contacto from './ProyectoFinal/Contacto';
import Proyectos from './ProyectoFinal/Proyectos';
import foto1 from "./Imagenes/danny2.jpg"
import fondo from "./Imagenes/pr.jpg"
import foto2 from "./Imagenes/danny3.jpg"
import foto3 from "./Imagenes/danny1.jpeg"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div>
     <BrowserRouter>
        <Navbar ></Navbar>
        <Routes>
          <Route path='/' element = {<Inicio
          fotoFondo = {fondo}
          titu = "Danny Pérez"
          titu2 = "Estudiante de Ingeniería en Sistemas"
          fotoPublicacion = {foto1}
          descripcion={
            <>
  
            Bienvenido a mi Portafolio
            
  
          </>

          }

          descripcion2={
            <>
            Aquí encontrarán información acerca de mi, los diferentes proyectos que he realizado a lo largo de la carrera 
            y mi contacto para cualquier consulta o recomendación. 
            
            </>
          }



          > 
          </Inicio>}/> 
          <Route path='/sobremi' element={<SobreMi

          tituSM = "¿Quién soy?"
          fotoFondoSM = {foto2}
          descripcionSM ={
            <>
  
            Mi nombre es Danny Alejandro Pérez Flores, soy estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala, cursando el 4to año,
            me gustan los videojuegos, los instrumentos musicales, pasar tiempo con mi familia y amigos, etc.<br></br><br></br>
            Soy un seguidor de Jesús, me encanta ir a la iglesia y servirle en el ministerio de la música, pero sobre todo he aprendido a crear una relación con Dios y a amarlo.<br></br><br></br>
            Actual mente solo me dedico a estudiar y pretendo empezar mis prácticas en diciembre del 2023.


            
  
          </>
          }
          
          titu2SM = ""

          
          
          
          
          
          
          
          
          />}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>

     </BrowserRouter>

      

     
      
    </div>
    
  );
}

export default App;
