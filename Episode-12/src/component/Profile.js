import React from "react";
import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "abc",
        location: "bcd",
        html_url: "https:/www.github",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/monisharmaofficial");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, html_url } = this.state.userInfo;

    return (
      <div className="ab-user">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Github : {html_url}</h4>
        <h4>Contact: @monisharmaofficial</h4>
      </div>
    );
  }
}

export default Profile;
