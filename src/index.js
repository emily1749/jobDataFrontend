import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import "./index.css";
// import BarChart from "./BarChart";

// function createBars(props) {
//   console.log("here");

//   //   code
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
      resultArray: [
        ["typescript", "0.20", 0],
        ["ruby", "1.52", 1],
        ["python", "27.21", 2],
        ["C++", "22.84", 3],
        ["swift", "2.34", 4],
        ["javascript", "17.16", 5],
        ["php", "2.44", 6],
        ["java", "17.56", 7],
        ["C#", "8.22", 8],
      ],
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // barChart = () => {
  //   //   test
  //   console.log("here");
  //   const test = this.resultArray[0];
  //   return <div></div>;
  // };
  onSubmit = e => {
    //****BELOW- AXIOS WORKS */
    // e.preventDefault();
    // let resultArrayFetch = [];
    // let { city, state } = this.state;
    // city = city.replace(" ", "+");
    // console.log("city: " + city + "State:" + state);
    // var self = this;
    // let totalValue = 0;
    // let count = 0;
    // axios
    //   .get("https://jobskillsapi.emlin.repl.co/jobData/" + city + "/" + state)
    //   .then(function(response) {
    //     response = response.data;
    //     Object.values(response).forEach(function(value) {
    //       console.log("value:  " + value);
    //       totalValue += value;
    //       console.log("totalvalue:" + totalValue);
    //     });
    //     for (const [key, value] of Object.entries(response)) {
    //       console.log(totalValue);
    //       let keyResult = key;
    //       let percentage = ((value / totalValue) * 100).toFixed(2);
    //       if (keyResult === "C%23") {
    //         keyResult = "C#";
    //       }
    //       if (keyResult === "C%2B%2B") {
    //         keyResult = "C++";
    //       }
    //       resultArrayFetch.push([keyResult, percentage, count]);
    //       count++; //for the key later on
    //     }
    //     console.log(resultArrayFetch);
    //     self.setState({ resultArray: resultArrayFetch });
    //     //0: (3) ["typescript", "0.20", 0]
    //     // 1: (3) ["ruby", "1.52", 1]
    //     // 2: (3) ["python", "27.21", 2]
    //     // 3: (3) ["C++", "22.84", 3]
    //     // 4: (3) ["swift", "2.34", 4]
    //     // 5: (3) ["javascript", "17.16", 5]
    //     // 6: (3) ["php", "2.44", 6]
    //     // 7: (3) ["java", "17.56", 7]
    //     // 8: (3) ["C#", "8.22", 8]
    //     console.log("resultarray: " + self.state.resultArray);
    //     console.log("resultarray: " + self.state.resultArray[1]);
    // });
    ///***AXIOS , UNCOMMENT LATER */
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
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.onChange}
            />

            <label>State:</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.onChange}
            />
            <button> Submit </button>
          </form>
        </div>
        <div className="barGraph">
          {this.state.resultArray.map((value, index) => (
            // test
            <div className="bargroup" key={value[2]}>
              <div
                className="bar"
                style={{ height: `${value[1] * 10}px` }}
              ></div>
              <h2>{value[0]}</h2>
              <p>{value[1]}%</p>{" "}
            </div>
          ))}
        </div>
      </div>

      // <BarChart />

      //   <BarChart />
    );
  }
  //   return <div>Hi there!</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
