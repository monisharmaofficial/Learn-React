import React from "react";
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
      count: 0,
      count1: 1,
      userInfo:{
        name:"abc",
        location:"bcd",
      }

    };
  }

 async componentDidMount(){
    const data = await fetch("https://api.github.com/users/monisharmaofficial")
    const json = await data.json();

    this.setState({
        userInfo:json,
    })


    console.log(json);

    // console.log("Child Constructor Did Mount")
}

  render() {
    const { name, location } = this.props;
    // console.log("Child Render")
    return (
      <div className="ab-user">
        <h2>Count: {this.state.count}</h2>
        <h2>Count1: {this.state.count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 2,
            });
          }}
        >
          Count Increases
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @monisharmaofficial</h4>
      </div>
    );
  }
}

export default UserClass;
