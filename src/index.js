import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
      resultArray: [],
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let resultArrayFetch = [];
    let { city, state } = this.state;
    city = city.replace(" ", "+");
    console.log("city: " + city + "State:" + state);
    var self = this;
    let totalValue = 0;
    axios
      .get("https://jobskillsapi.emlin.repl.co/jobData/" + city + "/" + state)
      .then(function(response) {
        response = response.data;
        //
        // console.log(response);
        // console.log("in axios");
        // console.log(Object.keys(response)[1]);
        // console.log(Object.values(response)[1]);
        // for (i=0; i<Object.keys(response).length; i++){
        // let total = 0;
        Object.values(response).forEach(function(value) {
          console.log("value:  " + value);
          totalValue += value;
          console.log("totalvalue:" + totalValue);
        });
        for (const [key, value] of Object.entries(response)) {
          console.log(totalValue);
          let keyResult = key;
          let percentage = ((value / totalValue) * 100).toFixed(2);
          if (keyResult === "C%23") {
            keyResult = "C#";
          }
          if (keyResult === "C%2B%2B") {
            keyResult = "C++";
          }
          //   if (percentage < 1) {
          //     percentage = 1;
          //   }
          //   console.log("Key: " + key + " value: " + value);

          resultArrayFetch.push([keyResult, percentage]);
        }
        console.log(resultArrayFetch);
        self.setState({ resultArray: resultArrayFetch });
        console.log("resultarray: " + self.state.resultArray);
        // return resultArrayFetch;

        // ["golang", 5]
        // 1: (2) ["swift", 23]
        // 2: (2) ["C%23", 83]
        // 3: (2) ["python", 262]
        // 4: (2) ["javascript", 163]
        // 5: (2) ["typescript", 2]
        // 6: (2) ["ruby", 13]
        // 7: (2) ["php", 23]
        // 8: (2) ["C%2B%2B", 221]
        // 9: (2) ["java", 171]
      });

    // console.log("setstate" + this.state.resultArray);
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
        <input type="text" name="city" value={city} onChange={this.onChange} />

        <label>State:</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={this.onChange}
        />
        <button> Submit </button>
      </form>
    );
  }
  //   return <div>Hi there!</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
