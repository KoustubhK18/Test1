import React from "react"

class FormComponent extends React.Component{

    constructor(){
        super();
        this.onInboxChange = this.onInboxChange.bind(this);
        this.state = { firstName : "" , lastName : "", gender : "", isAgeLegal : false};
    }

    onInboxChange(event){
        let {name , value , type , checked} = event.target;
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value});
        console.log(this.state);
        console.log(event.target.value);
    }

    render(){
        return(
            <div style = {{margin : "20px" , textAlign : "center"}}>
                <label>First Name :</label><input type="text" value={this.state.firstName} placeholder = "first name" name="firstName" onChange =  {this.onInboxChange}/>
                <label>Last Name :</label><input type="text" value={this.state.lastName} placeholder = "last name" name="lastName" onChange = {this.onInboxChange}/> <br />
                <label>Gender : </label>
                <input type="radio" name="gender" onChange = {this.onInboxChange} value="male" checked = {this.state.gender === "male"}/><label>Male</label>
                <input type="radio" name="gender" onChange = {this.onInboxChange} value="female" checked = {this.state.gender === "female"}/><label>Female</label><br />
                <input type="checkbox" name="isAgeLegal" onChange = {this.onInboxChange} checked = {this.state.isAgeLegal}/><label>Are you 18+</label><br />
        <h2>{this.state.firstName} {this.state.lastName} {this.state.gender}<br />{this.state.isAgeLegal ? "Welcome" : "You are not allowed here"}</h2>
            </div>
        );
    }
}

export default FormComponent;