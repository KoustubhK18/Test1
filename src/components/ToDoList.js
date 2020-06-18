import React from "react"
import ToDoItem from "./ToDoItem"
import AddTask from "./AddTask"

let styleDiv = {
    margin : "-10px",
    background : "#2A2A2A",
    color : "whitesmoke",
    height : "auto",
    padding : "10px" ,
    transition : "all 2s"
}

let innerStyle = {
    margin : "50px 500px 50px 500px",
    border : "solid white",
    boxShadow : "5px 5px 1px orange, 10px 10px 3px white, 15px 15px 5px green "
}

let listStyle = {
    marginLeft : "30px",
    marginBottom : "30px",
    marginTop : "15px"
}

let headStyle = {
    textAlign : "center"
}

let qna = [
    {
        id : 4,
        item : "Learn HTML",
        completed : true
    },
    {
        id : 5,
        item : "Learn CSS",
        completed : true
    },
    {
        id : 6,
        item : "Learn JS",
        completed : true
    },
    {
        id : 1,
        item : "Learn React and Redux",
        completed : false
    },
    {
        id : 2,
        item : "Learn D3",
        completed : false
    },
    {
        id : 3,
        item : "Learn API",
        completed : false
    }
];

class ToDoList extends React.Component{
    
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.addTaskMethod = this.addTaskMethod.bind(this);
        this.state = { addTaskMethod : this.addTaskMethod , todo : qna.map( obj => <ToDoItem key = {obj.id} obj = {{ id: obj.id , item : obj.item , status : obj.completed , changeMethod : this.handleChange}}/>) };
    }

    addTaskMethod(item){
        console.log(item);
        console.log(this.state);
        this.setState( previousState =>{
            let updatedState = previousState.todo.push(<ToDoItem key = {item + Math.random()} obj = {{ id: item , item : item , status : false , changeMethod : this.handleChange}} />);
        });
        this.forceUpdate();
        
    }

    handleChange(id){
        this.setState( previousState => {
            let updatedTodo = previousState.todo.map(
                data => {
                    if(data.props.obj.id === id){
                        data.props.obj.status = !data.props.obj.status;
                        console.log(data);
                    }
                    return data;
                }
                
            );
            console.log(updatedTodo);
            return { todo : updatedTodo};
        });
        console.log("State : ");
    }

    render(){
        return (
            <div style = {styleDiv}>
                <div style = {innerStyle}>
                    <div style = {headStyle}>
                        <h1>To-do List</h1>
                        <hr />
                        {console.log(this.state)}
                    </div>
                    <div style = {listStyle}>
                        {this.state.todo}
                    </div>
                    <div>
                        <AddTask addTaskMethod = {this.state.addTaskMethod}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList