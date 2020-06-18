import React from "react"

class StatePractice extends React.Component{

    constructor(){
        super();
        this.state = {name : "Koustubh" , age : 23};
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
            </div>
        );
    }
}

export default StatePractice;