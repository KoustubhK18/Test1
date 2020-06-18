import React from "react"

class StateChangeComponent extends React.Component{

    constructor(){
        super();
        this.state = {count : 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( previousState => {
            return {count : previousState.count+1}
        });
    }

    render(){
        let style1 = {
            textAlign : "center",
            background : "#232323",
            color : "#A3A3A3",
            margin : "-25px"
        }
        return (
            <div style = {style1}>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }

}

export default StateChangeComponent