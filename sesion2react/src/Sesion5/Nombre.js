import React from "react";
import PropTypes from 'prop-types'

class Nombre extends React.Component{
    componentDidMount(){
        //alert('Te damos la bienvenida ' + this.props.nombre)
    }

    componentWillUnmount(){
        //alert('Adios')
    }

    render(){
        return(
            <div>
                {this.props.nombre}
                <button onClick={this.props.borrarNombreDeLista}>x</button>
            </div>
        )
    }
}

Nombre.propTypes={
    nombre: PropTypes.string,
    borrarNombreDeLista: PropTypes.func.isRequired
}

export default Nombre;