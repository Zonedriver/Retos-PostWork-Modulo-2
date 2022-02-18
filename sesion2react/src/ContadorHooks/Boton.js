import React from 'react';
import PropTypes from 'prop-types'

const Boton =(props)=>{
    return(
        <div>
            <button onClick={props.handleClick}>
                {props.texto}
            </button>
        </div>
    )
}

Boton.ReactPropTypes = {
    texto: PropTypes.string,
    handleClick: PropTypes.func
}

export default Boton;