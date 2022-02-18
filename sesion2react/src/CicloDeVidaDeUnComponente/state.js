import React, {Component} from "react";

class ClockUsingClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date( ),
        }
    }
    componentDidMount(){
        this.time = setInterval(()=>{
            this.changeTime();
            },10000)
    }

    changeTime(){
        this.setState({date: new Date()})
    }

    componentWillMount(){
        clearInterval(this.state)
    }
    render(){
        return(
            <div>
                Hell-O
                <h1>
                    La hora es: {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default ClockUsingClass;