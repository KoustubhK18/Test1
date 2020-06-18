import React from "react";
import Tiles from "./Tiles"

let data = [{ o : false , x : false , id : 1},
            { o : false , x : false , id : 2},
            { o : false , x : false , id : 3},
            { o : false , x : false , id : 4},
            { o : false , x : false , id : 5},
            { o : false , x : false , id : 6},
            { o : false , x : false , id : 7},
            { o : false , x : false , id : 8},
            { o : false , x : false , id : 9}];
let clickNum = 0;

class TicTacToe extends React.Component{

    constructor(){
        super();
        this.changeFunction = this.changeFunction.bind(this);
        this.resetMethod = this.resetMethod.bind(this);
        this.state = {
            tiles : data.map( data => { return ( <Tiles obj = {{ o : data.o , x : data.x , key : data.id , changeFunction : this.changeFunction }} clickNumber = {clickNum} key = {data.id}/> )})
        }
    }

    changeFunction(id){
        this.setState( previousState => {
                    let updatedState = previousState.tiles.map(
                        data => {
                            if( data.props.obj.key === id ){
                                clickNum += 1;
                                if(clickNum % 2 === 0)
                                    {data.props.obj.o = true;}
                                else{data.props.obj.x = true;}
                            }
                            return data;
                        }
                    );
                    return { tiles : updatedState };                    
                }
            );
        //console.log(this.state);
        this.forceUpdate();
    }

    resetMethod(){
        this.setState( previousState => {
            let updatedState = previousState.tiles.map(
                data => {
                            data.props.obj.x = false;
                            data.props.obj.o = false;                            
                            return data;
                        }
                    );
                    return { tiles : updatedState };                    
                }
            );
        this.forceUpdate();
    }


    render(){
        let styleTile = { display : "grid" , gridTemplateColumns : "1fr 1fr 1fr" , gridTemplateRows : "1fr 1fr 1fr" , gridGap : "5px" , margin : "50px" , borderRadius : "1px" , border : "solid black 2px" , textAlign : "center" , width : "300px"};
        return(
            <div style = {{textAlign : "center"}}>
                <h2>Tic Tac Toe</h2>
                    <div style = {styleTile}>
                        {this.state.tiles}
                    </div>
                <button onClick = {this.resetMethod}>Reset</button>
            </div>
        );
    }
}

export default TicTacToe;