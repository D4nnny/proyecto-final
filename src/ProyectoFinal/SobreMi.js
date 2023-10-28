import React from "react";

const SM = (detalles) =>{
    return(
        <div>
            <div className="publicacionSM">
            
            
            <img className="foto-fondoSM" src={detalles.fotoFondoSM} />
            <h1 className="tituloSM">{detalles.tituSM}</h1>
            <h2 className="titulo2SM">{detalles.titu2SM}</h2>
            
           
            <img className="foto-publicacionSM" src={detalles.fotoPublicacionSM} />
            <h2 className="descripcionSM">{detalles.descripcionSM}</h2> 
            <h2 className="descripcion2SM">{detalles.descripcion2SM}</h2> 
            
    
        </div>

        </div>
    );

}

export default SM;