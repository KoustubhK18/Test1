import React from "react"

let colorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

class RandomColorPicker extends React.Component{

    constructor(){
        super();
        this.colorChangeHandler = this.colorChangeHandler.bind(this);
        this.state = {colorCode : ""}
    }

    colorChangeHandler(){
        let colorStr = "#";
        for(let i=0 ; i<6 ; i++){
            colorStr += colorArray[Math.floor(Math.random() * colorArray.length)];
        }
        this.setState({colorCode : colorStr});
    }

    render(){
        return(
            <div style={{background : this.state.colorCode , padding : "110px" , margin : "-10px"}}>
                <div style={{ background : "white" , width : "60%" , margin : "20%"}}>
                <div><h1 style={{textAlign : "center" , margin : "10%"}}>Random Color Generator</h1></div>
                <div style={{background : "" , fontSize : "50px" , color : this.state.colorCode ,display : "flex" , justifyContent : "center" , width : "80%", margin : "10%"}}>
                    {this.state.colorCode}
                </div>
                <div style={{display : "flex" , justifyContent : "center"}}>
                    <button style={{ width : "30%" , height : "40px" , fontSize : "20px" ,  background : this.state.colorCode ,marginBottom : "20px"}} onClick = {this.colorChangeHandler}>Change Color</button>
                </div>
                </div>
            </div>
        );
    }

}

export default RandomColorPicker;