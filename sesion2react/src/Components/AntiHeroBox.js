import React, {Component} from "react";

class AntiHero extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <h1>Mi nombre es {this.props.name} y soy {this.props.antihero}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default AntiHero;