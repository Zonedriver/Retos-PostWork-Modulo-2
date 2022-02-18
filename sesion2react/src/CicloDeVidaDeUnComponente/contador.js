import React, {Component} from "react";
import Boton from './boton'

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
    }

    handleClick = () =>{
        this.setState({
            contador: this.state.contador+1
        })
    }

    render(){
        return(
            <div>
                <Boton
                    texto={this.state.contador}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }


}

export default Contador;