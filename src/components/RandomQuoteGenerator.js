import React from "react"
import QuoteComponent from "./QuoteComponent"

let quotesArray = ["Hi" , "There" , "I'm" , "Developing" , "a" , "React" , "Quote" , "Generator"];
let colorsArray = ["red" , "green" , "blue" , "purple" , "brown" , "cyan" , "orange" , "black"];
class RandomQuoteGenerator extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = { quoteIndex : 0 , quote : quotesArray[0] };
    }

    handleClick(){
        console.log("clicked");
        this.setState(
            previousState => {
                let index = Math.floor(Math.random() * quotesArray.length);
                while(previousState.quoteIndex === index){
                    console.log("inside while");
                    index = Math.floor(Math.random() * quotesArray.length)
                }
                return {quoteIndex : index , quote : quotesArray[index]}
            }
        );
    }

    render(){
         return (
            <div style = {{ opacity : "80%",background : colorsArray[this.state.quoteIndex] , textAlign : "center" , height : "300px" }}>
                <div style={{background : "whitesmoke" ,  width : "80%" , height : "80%",margin : "10% 10% 10% 10%"}}>
                    <div style = {{display : "flex" , justifyContent : "center"}}>
                        <QuoteComponent quote = {this.state.quote} textColor = {colorsArray[this.state.quoteIndex]}/>
                    </div>
                    <div style = {{display : "flex" , justifyContent : "flex-end"}}>
                        <button style = {{ opacity : "100%" , margin : "5%" ,width : "20%" , height : "20%", fontSize : "1.5em" , background : colorsArray[this.state.quoteIndex]}} onClick = {this.handleClick}><div style = {{color : "whitesmoke"}}>Next</div>{console.log(this.state)}</button>
                    </div>
                </div>
            </div>
         );
    }
}

export default RandomQuoteGenerator