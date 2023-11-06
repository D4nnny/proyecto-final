import React from 'react';
import "./Contacto.css"
const Contacto = (detalles) => {
  const shareOnFacebook = () => {
    const urlToShare = "https://www.facebook.com/danny.perezflores"; // Reemplaza esto con la URL que deseas compartir
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, '_blank');
  };

  

  const shareOnGithub = () => {
    // Coloca aquí el código para compartir en Twitter
    const githubRepoUrl = "https://github.com/D4nnny"; // Reemplaza esto con la URL de tu repositorio en GitHub
    window.open(githubRepoUrl, '_blank');
  };

  return (
    <div>

      <img className="foto-Contacto" src={detalles.fotoFondoC} />   
      <div className='publicacion-contacto'> 
      <h1 className="TituloC">Puedes contactarme por estás redes sociales para hacerme alguna sugerencia</h1>    
        
      {/* Puedes agregar cualquier contenido adicional que desees en el componente Contacto aquí */}
      <button className="facebook-button" onClick={shareOnFacebook}>
       
      </button>
  
      <button className="github-button" onClick={shareOnGithub}>
       
      </button>
      </div> 
    </div>
  );
};

export default Contacto;
