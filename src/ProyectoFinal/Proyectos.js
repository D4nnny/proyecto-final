import React from "react";
import "./Proyectos.css"
const Proyectos = (detalles) =>{
    
    
    
    return(
        
            <div className="publicacionP">
            
            
            <img className="foto-fondoP" src={detalles.fotoFondoP} />
            <div className="proyectos">
            <h1 className="TituloP">PROYECTOS</h1>
            <a href="https://github.com/GustavoAZepeda/ArduinoCarBluetooth" target="_blank">
            <button className="Proyecto1">Carrito Control Remoto<br /> con Python</button>
            </a>
            <a href="https://github.com/D4nnny/proyectoads22023.git" target="_blank">
            <button className="Proyecto2"  >Proyecto de <br /> Analisis de Sistemas II</button>
            </a>
            <a href="https://ministerioskabod.com/" target="_blank">
            <button className="Proyecto3">Pagina Web Desarrollada en <br/> WordPress</button>
            </a>
            <h2 className="descripcionP1">{detalles.descripcionP1}</h2> 
            <h2 className="descripcionP2">{detalles.descripcionP2}</h2> 
            <h2 className="descripcionP3">{detalles.descripcionP3}</h2> 
            </div>
            </div>
    );

}

export default Proyectos;