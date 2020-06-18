import React from "react"

class InteractiveUI extends React.Component{

    render(props){
        let date1 = new Date().getHours();
        let backgroundStyle = {
            color : "whitesmoke",
            padding : "290px",
            textAnchor : "center",
            margin : "-10px",
            fontSize : "40px"
        }
        console.log(date1);
        let dynamicGreetVar = '';
        if(date1<12){
            dynamicGreetVar = "Morning";
            backgroundStyle.background = "#ff6c29";
        }
        else if(date1<17){
            dynamicGreetVar = "Afternoon";
            backgroundStyle.background = "#ebff12";
            backgroundStyle.background = "#121aff";
        }
        else if(date1<21){
            dynamicGreetVar = "Evening";
            backgroundStyle.background = "#121aff";
        }
        else{
            dynamicGreetVar = "Night";
            backgroundStyle.background = "#333333";
        }
        console.log(backgroundStyle);
        return(
        <div style = {backgroundStyle}>Good {dynamicGreetVar} {this.props.obj.name} !!!</div>
        );
    }
}

export default InteractiveUI;