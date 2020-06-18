import React from "react"

class ConditionalRenderingComponent extends React.Component{

    constructor(){
        super();
        this.changeState = this.changeState.bind(this);
        this.state = { isLoggedIn : false, changeState : this.changeState };
    }

    changeState(){
        this.setState(previousState => {
            let updatedState = { isLoggedIn : !previousState.isLoggedIn , changeState : previousState.changeState};
            return updatedState;
        });
        console.log(this.state);
        this.forceUpdate();
    }

    render(props){
        return(
            <div>
                <h1>You are {this.state.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
                <button onClick = {this.state.changeState}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</button>
            </div>
        );
    }
}

export default ConditionalRenderingComponent;