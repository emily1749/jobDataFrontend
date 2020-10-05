import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      state: "",
      resultArray: [
        ["Typescript", 0.2, 0, 0, 0],
        ["Ruby", 1.52, 0, 0, 1],
        ["Python", 27.21, 0, 0, 2],
        ["C++", 22.84, 0, 0, 3],
        ["Golang", 0.4, 0, 0, 9],
        ["Swift", 2.34, 0, 0, 4],
        ["Javascript", 17.16, 0, 0, 5],
        ["PHP", 2.44, 0, 0, 6],
        ["Java", 17.56, 0, 0, 7],
        ["C#", 8.22, 0, 0, 8],
      ],
      bubbleColor: "",
      quickColor: "",
      sortColor: "",
    };
  }

  sortColor = e => {
    this.setState({
      bgColor: "#f08a5d",
    });
  };
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

  bubbleSort = () => {
    this.setState({
      bubbleColor: "#f08a5d",
    });
    console.log("on bubblesort");

    //variables
    let self = this;
    let dataArray = self.state.resultArray;
    //Count for number of bars
    let count = 0;
    //Round for how many times run through entire graph
    let round = 0;
    //indicates whether a bar has been swapped during this round
    let flag = true;

    //Set the color of first two bars to be yellow
    dataArray[0][3] = 1;
    dataArray[1][3] = 1;

    //update state, rerender
    self.setState({
      resultArray: dataArray,
    });

    let myInterval = setInterval(() => {
      //Function swaps the bars in the array
      function swap(input, indexA, indexB) {
        flag = false;
        let temp = input[indexA];
        input[indexA] = input[indexB];
        input[indexB] = temp;
        return input;
      }

      //if at the end of the bar chart
      if (count === 8) {
        let dataArray = self.state.resultArray;
        //if next one is greater, swap
        if (dataArray[count][1] > dataArray[count + 1][1]) {
          swap(dataArray, count, count + 1);
          self.setState({
            resultArray: dataArray,
          });
        }
        //Update colors
        dataArray[9 - round][3] = 2;
        self.setState({
          resultArray: dataArray,
        });
        //Increase the round count
        round++;
        //if at the end of the array and no swaps, all items are sorted
        if (flag === true) {
          let dataArray = self.state.resultArray;
          //Update each bar color to green
          dataArray.forEach(element => {
            element[3] = 2;
          });
          self.setState({
            resultArray: dataArray,
          });
          //Clear interval, sorting is complete
          clearInterval(myInterval);
        } else {
          count = 0;
          flag = true;
        }
        return;
      }
      // else not at the end of the graph
      else {
        let dataArray = self.state.resultArray;
        //if the item is greater than the next, swap
        if (dataArray[count][1] > dataArray[count + 1][1]) {
          swap(dataArray, count, count + 1);
          //update state
          self.setState({
            resultArray: dataArray,
          });
        } else {
          if (dataArray[count + 2][3] !== 2) {
            //update colors of the bars, and update the state
            dataArray[count][3] = 0;
            dataArray[count + 2][3] = 1;
            self.setState({
              resultArray: dataArray,
            });
          }
          //Increase count at the end of round
          count++;
        }
      }
    }, 170);
  };

  quickSort = async () => {
    this.setState({
      quickColor: "#f08a5d",
    });
    console.log("on quicksort");

    //Varibles
    let self = this;

    //pause function, slow down
    //https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    //swap function
    async function swap(input, indexA, indexB) {
      await sleep(200);
      let temp = input[indexA];
      input[indexA] = input[indexB];
      input[indexB] = temp;

      return input;
    }

    //changeColors function, enter index to change color and number of color
    //updates state with the new bar colors
    async function changeColors(index, number) {
      let dataArray = self.state.resultArray;
      dataArray[index][3] = number;
      self.setState({
        resultArray: dataArray,
      });

      await sleep(200);
    }

    //resets the color of the bar to blue, updates state
    async function resetColor(endIndex) {
      let dataArray = self.state.resultArray;
      dataArray[endIndex][3] = 0;
      self.setState({
        resultArray: dataArray,
      });

      await sleep(0.1);
    }

    async function getPivotIndex(array, startIndex, endIndex) {
      let pivotValue = array[endIndex][1];

      let pivotIndex = startIndex;
      await changeColors(endIndex, 3);

      for (let i = startIndex; i < endIndex; i++) {
        let startPivotIndex = pivotIndex;

        //changes bar colors
        await Promise.all([changeColors(i, 2), changeColors(pivotIndex, 1)]);

        if (array[i][1] < pivotValue) {
          if (i === pivotIndex) {
            //if on first index, reset the color and increase pivot index

            await resetColor(i);
            pivotIndex++;
          } else {
            //change colors if not on the first index
            //change to red

            await Promise.all([
              changeColors(i, 4),
              changeColors(pivotIndex, 4),
            ]);
            await swap(array, i, pivotIndex);

            //after swap, update colors
            await Promise.all([
              changeColors(i, 2),
              changeColors(pivotIndex, 2),
            ]);

            //reset the colors after and increase pivot index
            await Promise.all([resetColor(i), resetColor(pivotIndex)]);
            pivotIndex++;
          }
        }

        //reset colors before returning pivot index
        if (startPivotIndex !== pivotIndex) {
          await Promise.all([resetColor(i), resetColor(pivotIndex)]);
        } else {
          await resetColor(i);
        }
      }

      if (pivotIndex !== endIndex) {
        await Promise.all([
          changeColors(pivotIndex, 4),
          changeColors(endIndex, 4),
        ]);
        await swap(array, pivotIndex, endIndex);
        await Promise.all([
          changeColors(pivotIndex, 4),
          changeColors(endIndex, 4),
        ]);
        await Promise.all([resetColor(pivotIndex), resetColor(endIndex)]);
      }

      //return the pivot index
      return pivotIndex;
    }

    async function quickSortAlgorithm(array, startingIndex, endingIndex) {
      if (startingIndex > endingIndex) {
        return;
      } else {
        let index = await getPivotIndex(array, startingIndex, endingIndex);

        await Promise.all([
          quickSortAlgorithm(array, startingIndex, index - 1),
          quickSortAlgorithm(array, index + 1, endingIndex),
        ]);
      }
    }

    let dataArray = this.state.resultArray;
    await quickSortAlgorithm(dataArray, 0, 9).then(async () => {
      //pause, and then change colors to gree
      setTimeout(() => {
        dataArray.forEach((bar, barIndex) => {
          bar[3] = 2;
        });
        self.setState({
          resultArray: dataArray,
        });
      }, 200);
    });
  };

  mergeSort = async () => {
    this.setState({
      mergeColor: "#f08a5d",
    });
    console.log("on mergesort");

    let self = this;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function changeColors(endIndex, number) {
      let dataArray = self.state.resultArray;
      dataArray[endIndex][3] = number;
      self.setState({
        resultArray: dataArray,
      });
      await sleep(200);
    }

    async function changeSingleColor(item, number) {
      let dataArray = self.state.resultArray;

      let index = dataArray.indexOf(item);
      dataArray[index][3] = number;

      self.setState({
        resultArray: dataArray,
      });
      await sleep(500);
    }

    async function mergeSortAlgorithm(array) {
      if (array.length <= 1) {
        return array;
      }
      let middlePoint = Math.floor(array.length / 2),
        leftArray = await mergeSortAlgorithm(array.slice(0, middlePoint)),
        rightArray = await mergeSortAlgorithm(array.slice(middlePoint));

      let mergeResult = await merge(leftArray, rightArray);

      return mergeResult;
    }

    async function merge(arrayA, arrayB) {
      if (arrayA.length > 0 && arrayB.length > 0) {
        let arrayAIndex = arrayA[0][0];
        let lengthTotal = arrayA.length + arrayB.length;
        let sorted = [];

        let dataArray = self.state.resultArray;
        let dataArrayCopy = dataArray;
        let indexA = 0;
        dataArray.forEach((element, index) => {
          if (element[0] === arrayAIndex) {
            indexA = index;
            return;
          }
        });

        await Promise.all([
          arrayA.forEach((element, index) => {
            changeSingleColor(element, 1);
          }),
        ]);
        await Promise.all([
          arrayB.forEach((element, index) => {
            changeSingleColor(element, 3);
          }),
        ]);

        await sleep(400);
        while (arrayA.length && arrayB.length) {
          await Promise.all([
            changeSingleColor(arrayA[0], 4),
            changeSingleColor(arrayB[0], 4),
          ]);
          if (arrayA[0][1] < arrayB[0][1]) {
            sorted.push(arrayA.shift());
          } else {
            sorted.push(arrayB.shift());
          }

          let dataArray = self.state.resultArray;
          let dataArrayCopy = dataArray;

          let resultMergeArray = sorted.concat(
            arrayA.slice().concat(arrayB.slice())
          );

          let resultMergeReturn = dataArray
            .slice(0, indexA)
            .concat(resultMergeArray)
            .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));
          self.setState({
            resultArray: resultMergeReturn,
          });

          await Promise.all([
            arrayA.forEach((element, index) => {
              changeSingleColor(element, 1);
            }),
          ]);
          await Promise.all([
            arrayB.forEach((element, index) => {
              changeSingleColor(element, 3);
            }),
          ]);
        }

        let resultMergeArray = sorted.concat(
          arrayA.slice().concat(arrayB.slice())
        );

        let resultMergeReturn = dataArray
          .slice(0, indexA)
          .concat(resultMergeArray)
          .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));
        self.setState({
          resultArray: resultMergeReturn,
        });

        await Promise.all([
          arrayA.forEach((element, index) => {
            changeSingleColor(element, 0);
          }),
          arrayB.forEach((element, index) => {
            changeSingleColor(element, 0);
          }),
          sorted.forEach((element, index) => {
            changeSingleColor(element, 0);
          }),
        ]);

        return resultMergeArray;
      } else {
        return;
      }
    }

    let dataArray = self.state.resultArray;
    dataArray = await mergeSortAlgorithm(dataArray);

    await Promise.all([
      dataArray.forEach((element, index) => {
        changeColors(index, 2);
      }),
    ]);
  };

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
    // console.log("rerendered!");
    const { city, state } = this.state;
    var self = this;
    return (
      <div className="container">
        <div className="controls-container">
          <div className="controls">
            {/* <h1>Job Skills Data Analysis</h1>
            <p>
              This app analyzes and compares the percentage of job openings for
              several of the most popular programming languages per location.
              Enter a city and state to retrieve the location's data. Next,
              choose a sorting algorithm to visually sort the data!
            </p> */}
            <br />
            <br />
            <h2>Location</h2>

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

            <br />
            <br />
            <h2>Sorting Algorithm</h2>

            <button
              onClick={self.bubbleSort}
              className="sortingAlgorithm"
              style={{ color: this.state.bubbleColor }}
            >
              Bubble Sort
              <span></span>
              <span></span>
            </button>

            <br />
            <button
              onClick={self.quickSort}
              className="sortingAlgorithm"
              style={{ color: this.state.quickColor }}
            >
              Quick Sort
              <span></span>
              <span></span>
            </button>
            <br />
            <button
              onClick={self.mergeSort}
              className="sortingAlgorithm"
              style={{ color: this.state.mergeColor }}
            >
              Merge Sort
              <span></span>
              <span></span>
            </button>
            <br />
            <br />
            <div className="buttonHolder">
              <button className="btn"> Reset Sort</button>
            </div>
          </div>
        </div>

        <div className="barGraph-container">
          <div className="barGraph">
            {this.state.resultArray.map(function(value, index) {
              const color = [
                "linear-gradient( #0278ae, #59b5d7)", //blue
                "linear-gradient( #fddb3a, #ffefa0)", //yellow
                "linear-gradient( #79d70f, #bbd196)", //green
                "linear-gradient( #5c2a9d, #d789d7)", //purple
                "linear-gradient( #f76a8c, #ffaaa5)", //pink/orange
              ];

              return (
                <div className="bargroup" key={value[4]}>
                  <div
                    className="bar"
                    style={{
                      backgroundImage: color[value[3]],

                      height: `${value[1] * 10}px`,
                    }}
                  ></div>
                  <h2>{value[0]}</h2>
                  <p>{value[1]}%</p>{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
