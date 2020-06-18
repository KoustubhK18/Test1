import React from "react"

let logoImageStyle = {
    width : "40px" ,
    height : "auto" ,
    display : "block"
}

let searchButtonImageStyle = {
    width : "auto" ,
    height : "25px" ,
    marginLeft: "15px"
}

let searchBarInputStyle = {
    width : "560px" ,
    height : "30px" ,
    borderRadius : "15px" ,
    marginTop: "20px" ,
    marginBottom: "10px"
};

let searchDivStyle = {
    textAlign : "center"
};

let liStyle = {
    display : "block",
    padding : "14px 16px",
    float : "left",
    textAlign : "center",
    color : "white",
    fontSize : "18px"
};

let navListStyle = {
    listStyleType : "none" ,
    margin : 0 ,
    padding : 0 ,
    overflow : "hidden" ,
    background : "linear-gradient(90deg,#da42f5,#638aff)"
};

class Navbar extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div id="navigation-element" >
				<ul id="nav-list" style = {navListStyle}>
					<li style = {liStyle}><a style = {logoImageStyle}>KidzKart</a></li>
					<div style = {{display : "flex" , flexWrap : "wrap" , justifyContent : "flex-end"}}>
                        <li style = {liStyle}><a>Sign-up</a></li>
                        <li style = {liStyle}><a>Login</a></li>
                        <li style = {liStyle}><a>Edit</a></li>
                        <li style = {liStyle}><a>Logout</a></li>
                    </div>
				</ul>
		    </div>
		
            <div id="search-div" style = {searchDivStyle}>
                <input id="search-bar-input" style = {searchBarInputStyle} placeholder="Search Here"/>
                <img src="http://ourcrossway.com/img/magnifier.svg" style = {searchButtonImageStyle} alt="search button" id="search-button-img" />
                </div>
            </div>
        );
    }
}

export default Navbar