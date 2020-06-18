import React from "react"

class QuoteComponent extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(props){
        return(
            <div>
                <span style = {{textAlign : "center " , color : this.props.textColor , fontSize : 50}}>{this.props.quote}</span>
            </div>
        );
    }
}

export default QuoteComponent