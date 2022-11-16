import React from "react";
class Profile extends React.Component {
  constructor() {
    super();
    this.state={
      Timer :0
    }

 
  }
  componentDidMount(){
    setInterval(()=>{this.setState({Timer:this.state.Timer+1})}, 1000);
  }
  
      render () {
       return (
        <div> 
          <div>fullname:tasnim aribi</div>
          <div>bio:makeupartist</div>
          <p>{this.state.Timer}</p>
          
        </div>
       )
      }    
}



export default Profile;
    