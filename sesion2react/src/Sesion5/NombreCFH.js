import React,{useEffect} from "react";
import PropTypes from 'prop-types'

const NombreCFH = (props) =>{
    const DidMount = ()=>{
        console.log('Te damos la bienvenida ' + props.nombre)
    }
    useEffect(DidMount,[])
    const willUnMount = ()=>{
        console.log('Adios') 
    } 
    useEffect(willUnMount,[])   
    return(
        <div>
            {props.nombre}
            <button on Click={props.borrarNombreDeLista}>
                x
            </button>
        </div>
    )
}

NombreCFH.propTypes={
    nombre: PropTypes.string,
    borrarNombreDeLista: PropTypes.func.isRequired
}


export default NombreCFH;