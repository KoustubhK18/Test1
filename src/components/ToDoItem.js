import React from "react"

class ToDoItem extends React.Component{
    constructor(){
        super();
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(){
        this.props.obj.changeMethod(this.props.obj.id);
        this.forceUpdate();
    }

    render(props){
        let returnVal = <div>
        <input type="checkbox" onChange = {this.onChangeHandler} checked={this.props.obj.status} />
            <span style={
                {
                    textDecoration : this.props.obj.status ? 'line-through' : 'none' ,
                    color : this.props.obj.status ? '#919191' : 'whitesmoke',
                    fontStyle : this.props.obj.status ? 'italic' : 'none'
                }
            }>
                {this.props.obj.item}
            </span><br />
    </div>;
        return (
            returnVal
        );
    }
}

export default ToDoItem