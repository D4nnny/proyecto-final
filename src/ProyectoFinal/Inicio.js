import React from "react";
import "./ProyectoFinal.css"

const Inicio = (detalles) =>{
    return(
        
        <div className="publicacion">
            
            <div className='info-usu'>
            <img className="foto-fondo" src={detalles.fotoFondo} />
            <h1 className="titulo">{detalles.titu}</h1>
            <h2 className="titulo2">{detalles.titu2}</h2>
            </div>
            <div className="info">
            <img className="foto-publicacion" src={detalles.fotoPublicacion} />
            <h2 className="descripcion">{detalles.descripcion}</h2> 
            <h2 className="descripcion2">{detalles.descripcion2}</h2> 
            </div>
    
        </div>
    );

}

export default Inicio;