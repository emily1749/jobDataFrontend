import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import "./index.css";
// import BarChart from "./BarChart";
// import BubbleSort from "./components/BubbleSort";

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
      // let 0 mean blue, 1 mean yellow, 2 is green
      resultArray: [
        ["Typescript", 0.2, 0, 0],
        ["Ruby", 1.52, 1, 0],
        ["Python", 27.21, 2, 0],
        ["C++", 22.84, 3, 0],
        ["Swift", 2.34, 4, 0],
        ["Javascript", 17.16, 5, 0],
        ["PHP", 2.44, 6, 0],
        ["Java", 17.56, 7, 0],
        ["C#", 8.22, 8, 0],
      ],
      selectColor: "linear-gradient( #0278ae, #59b5d7)",
      bubbleSort: false,
      // selectIndex: 0,
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
  //ONCHANGECOLOR

  onChangeSelectColor = index => {
    const color = [
      "linear-gradient( #0278ae, #59b5d7)",
      "linear-gradient( #fddb3a, #ffefa0)",
      "linear-gradient( #79d70f, #a8df65)",
    ];
    this.setState({
      selectColor: color[index],
    });
  };

  updateState(sortingAlgorithm) {
    if (sortingAlgorithm == "bubbleSort") {
      this.setState({
        bubbleSort: true,
      });
    }
    console.log("result array updated");
  }
  componentDidUpdate() {
    console.log("remounted");
    // if (this.state.bubbleSort == true) {
    //   console.log("oncomponentdidmount bubblesort");
    //   this.bubbleSort();
    //   //execute
    // }
  }
  bubbleSort = () => {
    // for (let i = 0; i < this.state.resultArray.length; i++) {
    //   for (let j = 0; j < this.state.resultArray.length; j++) {
    //     // code
    //   }
    // }
    // for (let i = 0; i < dataArray.length; i++) {
    // for (let j = 0; j < dataArray.length; j++) {
    // bar div of dataArray[j], div of dataArray[j+1] = change to yellow
    //
    // if (dataArray[j][1] > dataArray[j + 1][1]) {
    //switch bar div of dataArray[j], dataArray[j+1]
    //just switch the state of it and it'll rerender
    // }
    //dataArray[j] change back to
    // }
    // }
    let self = this;
    console.log("on bubblesort");
    let count = 0;
    let dataArray = self.state.resultArray;
    dataArray[0][3] = 1;
    dataArray[1][3] = 1;
    let round = 0;
    self.setState({
      resultArray: dataArray,
    });
    let flag = true;

    let myInterval = setInterval(() => {
      function swap(input, indexA, indexB) {
        console.log("swapped");
        flag = false;
        let temp = input[indexA];
        input[indexA] = input[indexB];
        input[indexB] = temp;
        return input;
      }

      if (count === 7) {
        let dataArray = self.state.resultArray;
        if (dataArray[count][1] > dataArray[count + 1][1]) {
          swap(dataArray, count, count + 1);
          self.setState({
            resultArray: dataArray,
          });
        }
        dataArray[8 - round][3] = 2;
        self.setState({
          resultArray: dataArray,
        });
        round++;
        if (flag === true) {
          let dataArray = self.state.resultArray;
          dataArray.map(element => {
            element[3] = 2;
          });
          self.setState({
            resultArray: dataArray,
          });
          console.log("HERE");
          console.log("clearinterval");
          clearInterval(myInterval);
        }
        // if (round === 7) {
        //   console.log("clearinterval");
        //   clearInterval(myInterval);
        // }
        else {
          count = 0;
          flag = true;
        }

        return;
      } else {
        //  if (count > 2) {
        let dataArray = self.state.resultArray;
        if (dataArray[count][1] > dataArray[count + 1][1]) {
          swap(dataArray, count, count + 1);
          self.setState({
            resultArray: dataArray,
          });
        } else {
          if (dataArray[count + 2][3] !== 2) {
            dataArray[count][3] = 0;
            dataArray[count + 2][3] = 1;
            // console.log("dataArray:" + dataArray);
            self.setState({
              resultArray: dataArray,
            });
          }

          count++;
        }

        // }
        // let dataArray = self.state.resultArray;

        // dataArray[count][3] = 2;
        // dataArray[count + 1][3] = 2;
        // self.setState({
        //   resultArray: dataArray,
        // });
        // console.log("here");

        console.log(count);
      }
      // if (flag === true) {
      //   console.log("here");
      //   let dataArray = self.state.resultArray;
      //   dataArray.forEach(() => {
      //     dataArray[3] = 2;
      //   });
      //   self.setState({
      //     resultArray: dataArray,
      //   });
      // }
    }, 100);

    // myInterval();
    // for (let count = 0; count < this.state.resultArray.length; count++) {
    //   setInterval(() => {
    //     this.state.resultArray.slice(0, count).map((bar, index) => {
    //       console.log(bar);
    //     });
    //     count++;
    //   }, 1000);
    // }
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
    console.log("rerendered!");
    const { city, state } = this.state;
    var self = this;
    return (
      <div className="container">
        <div className="controls-container">
          <div className="controls">
            {/* <h1>Job Skills Data Analysis</h1> */}
            <p>
              {/* Lorem ipsum dolor sit asse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. */}
            </p>
            <br />
            <br />
            <h2>Location</h2>
            {/* <div className="location-form"> */}
            <form onSubmit={this.onSubmit}>
              <label>City:</label>

              <input
                type="text"
                name="city"
                className="input-text"
                value={city}
                onChange={this.onChange}
              />
              <br />
              <label>State:</label>

              <input
                type="text"
                name="state"
                className="input-text"
                value={state}
                onChange={this.onChange}
              />
              <br />
              <br />
              <div className="buttonHolder">
                <button className="btn"> Submit Location </button>
              </div>
            </form>
            {/* </div> */}

            <br />
            <br />
            <h2>Sorting Algorithm</h2>
            {/* <BubbleSort
              dataArray={this.state.resultArray}
              updateState={this.updateState}
              // selectIndex={this.state.selectIndex}
            /> */}
            <button
              className="bubbleSort"
              onClick={
                self.bubbleSort
                // () =>
                // self.setState({
                //   bubbleSort: true,
                // })
              }
            >
              Bubble Sort
            </button>

            <p>Sorting 2</p>
            <p>Sorting 3</p>
          </div>
        </div>

        <div className="barGraph-container">
          <div className="barGraph">
            {this.state.resultArray.map(function(value, index) {
              // console.log("test");

              const color = [
                "linear-gradient( #0278ae, #59b5d7)",
                "linear-gradient( #fddb3a, #ffefa0)",
                "linear-gradient( #79d70f, #a8df65)",
              ];

              return (
                <div className="bargroup" key={value[2]}>
                  {/* <div className="bargroup"> */}
                  {/* {color[1]} */}
                  <div
                    className="bar"
                    // onChangeSelectColor={this.onChangeSelectColor.bind(this)}
                    style={{
                      backgroundImage: color[value[3]],
                      // backgroundImage: {this.onChangeSelectColor(value[3])},
                      // backgroundImage: this.state.selectColor,
                      // backgroundColor: "#E9573F",
                      height: `${value[1] * 10}px`,
                    }}
                    // style={{
                    //   backgroundImage:
                    //     "linear-gradient(to right, #0278ae, #59b5d7)",
                    // }}
                  ></div>
                  <h2>{value[0]}</h2>
                  <p>{value[1]}%</p>{" "}
                </div>
              );
            })}

            {/* //   console.log('here')
              // }
              
              
            // ))} */}
          </div>
        </div>
      </div>

      // <BarChart />

      //   <BarChart />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
