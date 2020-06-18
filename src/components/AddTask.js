import React from "react"

class AddTask extends React.Component{
    constructor(){
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.props.addTaskMethod(document.getElementById("taskInput").value);
    }

    render(props){
        
        return(
            <div style={{textAlign : "center", margin : "10px"}}>
                <input type="text" name="taskInput" id="taskInput" style = {{boxShadow : "2px 2px 5px orange"}} placeholder="Add task here"/><br/>
                <button style = {{margin : "10px", borderRadius : "5px", boxShadow : "2px 2px 5px orange"}} onClick = {this.onClickHandler}>Confirm</button>
            </div>
        );
    }
}

export default AddTask