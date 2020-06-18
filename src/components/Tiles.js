import React from "react";

let oArray = [];
let xArray = [];

class Tile extends React.Component{
    
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }

    clickHandler(){
        if(!this.props.obj.o && !this.props.obj.x)
        {
            this.props.obj.changeFunction(this.props.obj.key);
        }
        this.forceUpdate();
    }

    checkWin(){
        if(this.props.obj.o){
            oArray.push(this.props.obj.key);
        }
        else if(this.props.obj.x){
            xArray.push(this.props.obj.key);
        }

        let countO = 0;
        let countX = 0;
        let checkVar;
        let firstElement;
        oArray.sort();
        oArray.map(data =>{
            if(countO === 0 && (data === 1 || data === 2 || data ===3 || data ===4)){
                firstElement = data;
                countO ++;
            }
            else if(countO === 1 && ((firstElement === 1 && (data === 2 || data === 4 || data === 5)) || (firstElement === 2 &&  data === 5) || (firstElement === 3 && (data === 5 || data === 6)) || (firstElement === 4 && data === 5) || (firstElement === 7 && data === 8))){
                checkVar = data;
                countO ++;
            }
            else if (countO === 2 && ((firstElement ===1 && ((checkVar === 2 && data === 3) || (checkVar === 4 && data === 7) || (checkVar === 5 && data === 9))) || (firstElement === 2 && checkVar === 5 && data === 8) || ( firstElement === 3 && ((checkVar === 5 && data === 7) || (checkVar === 6 && data === 9))) || (firstElement === 4 && checkVar === 5 && data === 6) || (firstElement === 7 && checkVar === 8 && data === 9) )){
                countO ++;
            }
            return null;
        });

        xArray.sort();
        xArray.map(data =>{
            if(data === 1){
                countX ++;
            }
            else if(countX > 0 && ( data === 2 || data === 4 || data === 5)){
                checkVar = data;
                countX ++;
            }
            else if (countX > 1 && ((checkVar === 2 && data === 3) || (checkVar === 4 && data === 7) || (checkVar === 5 && data === 9))){
                countX ++;
            }
            return null;
        });
        console.log(countO,checkVar);

        if(countO === 3){
            alert("O won");
        }
        else if(countX === 3){
            alert("X won");
        }
        console.log(countO);

    }

    render(props){
        this.checkWin();
        let style1 = {borderRadius : "5px" , border : "solid black 1px" , width : "70px" , height : "70px" , margin : "10px" , textAlign : "center"};
        return(
            <div>
                <button style ={style1} onClick = {this.clickHandler}> 
                    <h1>{ this.props.obj.o === true ? "O" : (this.props.obj.x ? "X" : null)}</h1>
                </button>
            </div>
        );
    }
}

export default Tile