import React from 'react'
import Proptypes from 'react'

const Boton = (props) =>{
    return(
        <div>
            <button onClick={props.handleClick}>
                {props.texto}
            </button>
        </div>
    )
}

Boton.ReactPropTypes = {
    texto: Proptypes.string
}

export default Boton;