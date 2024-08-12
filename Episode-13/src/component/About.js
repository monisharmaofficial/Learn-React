import Profile from "./Profile";
import User from "./User";
import UserClass from "./UserClass";
import Profile from "./Profile";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    
  componentDidMount(){
    // console.log("Parent Constructor Did Mount")
}

    render(){
        // console.log("Parent Render")
        return (
            <div className="about">
            <h1>About</h1>
            <p>This is all about learning React.</p>
            <div className="childcomp">
            <User name={"Monika Sharma (Function)"}/>
            <UserClass name ={"Monika Sharma (Class)"}location = {"Aligarh cls"}/>
            <Profile/>
            </div>
            </div>
        );
      };
};

export default About;