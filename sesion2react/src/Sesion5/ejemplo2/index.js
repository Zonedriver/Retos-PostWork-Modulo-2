import React,{useState} from 'react';

const Renderizadocondicional = () => {
    const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
    const componente = <span>HELL-o</span>
    return(
        //directa
        <>{mostrarUsuarios && componente}</>
    )
    
    

};

export default Renderizadocondicional;
