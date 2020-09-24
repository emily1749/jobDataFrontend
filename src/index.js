import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let { city, state } = this.state;
    city = city.replace(" ", "+");
    console.log("city: " + city + "State:" + state);
    axios
      .get("https://jobskillsapi.emlin.repl.co/jobData/" + city + "/" + state)
      .then(function(response) {
        console.log(response.data);
        console.log("in axios");
      });
  };
  // componentDidMount() {
  //     //fetch here
  //   }
  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }
  //   handleSubmit(event) {
  //     event.preventDefault();
  //     // const data = newFormData(event.target);
  //     const data = event.target;
  //     console.log(data.get(city));
  //     // axios
  //     //   .get(
  //     //     "https://jobskillsapi.emlin.repl.co/jobData/san+francisco/california"
  //     //   )
  //     //   .then(function(response) {
  //     //     console.log(response.data);
  //     //     console.log("in axios");
  //     //   });
  //     // event.preventDefault("api url", {
  //     //   method: "GET",
  //     // body: data
  //     // });
  //     //   const data =
  //     // fetch();
  //   }
  render() {
    const { city, state } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={this.onChange}
          //   name="city"
          //   type="text"
          //   value={this.state.city.value}
          //   onChange={this.handleChange}
        />

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={this.onChange}
          //   id="state"
          //   name="state"
          //   type="text"
          //   value={this.state.state.value}
          //   onChange={this.handleChange}
        />
        <button> Submit </button>
      </form>
    );
  }
  //   return <div>Hi there!</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
