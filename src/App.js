import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      myName:''
    }
  }
  handleInput=(e)=>{
    this.setState({myName:e.target.value});
  }
  
  render(){
    return(
      <div>
        <h2>controlled Component</h2>
        <label> NAME : </label>
        <input type='text' onKeyUp={this.handleInput}/>
        <h3> {this.state.myName}</h3>
      </div>
    )
  }
}
export default  App;
 
