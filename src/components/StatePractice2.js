import React from "react"

class StatePractice2 extends React.Component{

    constructor(){
        super();
        this.state = {status : true};
    }

    render(){
        return(
            <div>
                You are logged {this.state.status ? "in" : "out"}
            </div>
        );
    }
}

export default StatePractice2