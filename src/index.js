//add extra box with more data

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

import Loading from "./components/Loading";
import BarGraph from "./components/BarGraph";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: "",
      state: "",
      resultArrayOriginal: [
        // ["Typescript", 0.2, 0, 0, 0],
        // ["Ruby", 1.52, 0, 0, 1],
        // ["Python", 27.21, 0, 0, 2],
        // ["C++", 22.84, 0, 0, 3],
        // ["Golang", 0.4, 0, 0, 9],
        // ["Swift", 2.34, 0, 0, 4],
        // ["Javascript", 17.16, 0, 0, 5],
        // ["PHP", 2.44, 0, 0, 6],
        // ["Java", 17.56, 0, 0, 7],
        // ["C#", 8.22, 0, 0, 8],
      ],
      resultArray: [
        // ["Typescript", 90, 0, 0, 0],
        // ["Ruby", 80, 1, 0, 1],
        // ["Python", 70, 2, 0, 2],
        // ["C++", 60, 3, 0, 3],
        // ["Golang", 50, 4, 0, 9],
        // ["Swift", 40, 5, 0, 4],
        // ["Javascript", 30, 6, 0, 5],
        // ["PHP", 20, 7, 0, 6],
        // ["Java", 10, 8, 0, 7],
        // ["C#", 4, 9, 0, 8],
        // ["Typescript", 0.2, 0, 0, 0],
        // ["Ruby", 1.52, 1, 0, 1],
        // ["Python", 27.21, 2, 0, 2],
        // ["C++", 22.84, 3, 0, 3],
        // ["Golang", 0.4, 4, 0, 9],
        // ["Swift", 2.34, 5, 0, 4],
        // ["Javascript", 17.16, 6, 0, 5],
        // ["PHP", 2.44, 7, 0, 6],
        // ["Java", 17.56, 8, 0, 7],
        // ["C#", 8.22, 9, 0, 8],
      ],
      bubbleColor: "",
      quickColor: "",
      mergeColor: "",
      onSort: false,
      buttonColor: "",
      loading: false,
      locationSubmitted: false,
      initialData: false,
      message: "Please enter location",
      // messageError: "Cannot fetch input location, please enter valid location",
      error: false,
    };
  }

  resetSort = e => {
    let self = this;
    console.log("on sort reset");
    if (this.state.onSort === false) {
      const resultArrayCopy = JSON.parse(
        JSON.stringify(self.state.resultArrayOriginal)
      );
      console.log(resultArrayCopy);
      self.setState({
        resultArray: resultArrayCopy,

        bubbleColor: "",
        quickColor: "",
        mergeColor: "",
      });
    }
  };
  // sortColor = e => {
  //   this.setState({
  //     bgColor: "#f08a5d",
  //   });
  // };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = e => {
    // let self= this;
    e.preventDefault();
    var self = this;
    if (this.state.onSort === false) {
      let resultArrayFetch = [];
      let { city, state } = this.state;
      if (city && state) {
        city = city.replace(" ", "+");
        console.log("city: " + city + "State:" + state);

        let totalValue = 0;
        let count = 0;

        this.setState(
          {
            loading: true,
            bubbleColor: "",
            quickColor: "",
            mergeColor: "",
          },
          () => {
            axios
              .get(
                // "https://jobskillsapi.emlin.repl.co/jobData/" +
                "https://jobskillsapi-1.emlin.repl.co/jobData/" +
                  city +
                  "/" +
                  state
              )
              .then(function(response) {
                response = response.data;
                Object.values(response).forEach(function(value) {
                  console.log("value:  " + value);
                  totalValue += value;
                  console.log("totalvalue:" + totalValue);
                });
                for (const [key, value] of Object.entries(response)) {
                  console.log(totalValue);
                  let keyResult = key;
                  let percentage = ((value / totalValue) * 100).toFixed(2);
                  // if (keyResult === "C%23") {
                  //   keyResult = "C#";
                  // }
                  // if (keyResult === "C%2B%2B") {
                  //   keyResult = "C++";
                  // }
                  resultArrayFetch.push([keyResult, percentage, count]);
                  count++; //for the key later on
                }
                console.log("RESULTFETCH" + resultArrayFetch);
                if (resultArrayFetch.length < 10 || !resultArrayFetch) {
                  self.setState({
                    message:
                      "Cannot find input location, please enter valid city and state",
                    loading: false,
                    error: true,
                  });
                } else {
                  resultArrayFetch.forEach((element, index) => {
                    let percent = element[1];
                    element[1] = parseFloat(percent);

                    element.push(0);
                  });
                  console.log(resultArrayFetch);
                  const resultArrayCopy = JSON.parse(
                    JSON.stringify(resultArrayFetch)
                  );

                  self.setState({
                    loading: false,
                    resultArrayOriginal: resultArrayCopy,
                    resultArray: resultArrayFetch,
                    locationSubmitted: true,
                    initialData: true,
                    error: false,
                  });

                  console.log("resultarray: " + self.state.resultArray);
                  console.log("resultarray: " + self.state.resultArray[1]);
                }
              });
          }
        );
      } else {
        self.setState({
          message: "Please enter valid city and state",
          error: true,
        });
        console.log("here");
      }
    }
  };

  bubbleSort = () => {
    //check that no other sorts are selected
    if (
      this.state.bubbleColor === "" &&
      this.state.quickColor === "" &&
      this.state.mergeColor === "" &&
      this.state.onSort === false &&
      this.state.locationSubmitted === true
    ) {
      //select the sort, change font color
      this.setState({
        bubbleColor: "#f08a5d",
        onSort: true,
        buttonColor: "#00587a",
      });

      console.log("on bubblesort");

      //variables
      let self = this;
      // let dataArray = self.state.resultArray;
      //Count for number of bars
      let count = 0;
      //Round for how many times run through entire graph
      let round = 0;
      //indicates whether a bar has been swapped during this round
      let flag = true;
      let endFlag = false;

      let myInterval = setInterval(() => {
        if (count === 0) {
        }
        //Function swaps the bars in the array
        function swap(input, indexA, indexB) {
          flag = false;
          let temp = input[indexA];
          input[indexA] = input[indexB];
          input[indexB] = temp;
          return input;
        }

        //if at the end of the bar chart
        if (endFlag === true || count === 9) {
          let dataArray = self.state.resultArray;
          //if next one is greater, swap
          if (dataArray[8][1] > dataArray[9][1]) {
            swap(dataArray, 8, 9);
            self.setState({
              resultArray: dataArray,
            });
          }
          //Update colors
          if (round < 9) {
            dataArray[9 - round][3] = 2;
            dataArray[9 - round - 1][3] = 0;
          } else {
            dataArray[9 - round][3] = 2;
          }

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
              onSort: false,
              buttonColor: "#fff",
            });
            //Clear interval, sorting is complete
            clearInterval(myInterval);
          } else {
            count = 0;
            flag = true;
          }
          endFlag = false;
          return;
        }
        // else not at the end of the graph
        else {
          let dataArray = self.state.resultArray;
          if (count === 0) {
            //if first count, have to color first two yellow
            dataArray[0][3] = 1;
            dataArray[1][3] = 1;
            self.setState({
              resultArray: dataArray,
            });
            count++;
          } else {
            //if the item is greater than the next, swap
            if (dataArray[count - 1][1] > dataArray[count][1]) {
              swap(dataArray, count - 1, count);
              //update state
              self.setState({
                resultArray: dataArray,
              });
            }
            // } else if ((count === 1 && dataArray[0][3] = 1)) {
            else {
              // if (dataArray[count + 1][3] !== 2)
              if (dataArray[count + 1][3] !== 2) {
                //if the next one isn't green/sorted, continue
                //update colors of the bars, and update the state
                dataArray[count - 1][3] = 0;
                dataArray[count + 1][3] = 1;
                self.setState({
                  resultArray: dataArray,
                });
              } else if (dataArray[count + 1][3] === 2) {
                endFlag = true;
              }
              //Increase count at the end of round
              count++;
            }
          }
        }
      }, 140);
    }
  };

  quickSort = async () => {
    if (
      this.state.bubbleColor === "" &&
      this.state.quickColor === "" &&
      this.state.mergeColor === "" &&
      this.state.onSort === false &&
      this.state.locationSubmitted === true
    ) {
      this.setState({
        quickColor: "#f08a5d",
        onSort: true,
        buttonColor: "#00587a",
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
        await sleep(170);
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

        await sleep(170);
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
        //pause, and then change colors to green
        setTimeout(() => {
          dataArray.forEach((bar, barIndex) => {
            bar[3] = 2;
          });
          self.setState({
            resultArray: dataArray,
            onSort: false,
            buttonColor: "#fff",
          });
        }, 170);
      });
    }
  };

  mergeSort = async () => {
    if (
      this.state.bubbleColor === "" &&
      this.state.quickColor === "" &&
      this.state.mergeColor === "" &&
      this.state.onSort === false &&
      this.state.locationSubmitted === true
    ) {
      this.setState({
        mergeColor: "#f08a5d",
        onSort: true,
        buttonColor: "#00587a",
      });

      console.log("on mergesort");

      let self = this;

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function changeColors(index, number) {
        let dataArray = self.state.resultArray;
        dataArray[index][3] = number;
        self.setState({
          resultArray: dataArray,
        });
        await sleep(170);
      }

      //changes color of one item with unknown index
      async function changeSingleColor(item, number) {
        let dataArray = self.state.resultArray;

        //find where the item is in dataArray
        let index = dataArray.indexOf(item);
        dataArray[index][3] = number;

        //update state
        self.setState({
          resultArray: dataArray,
        });

        //pause then return
        await sleep(170);
      }

      async function mergeSortAlgorithm(array) {
        //end recursion
        if (array.length <= 1) {
          return array;
        }

        //get midpoint, split into left and right arrays, recursion
        let middlePoint = Math.floor(array.length / 2),
          leftArray = await mergeSortAlgorithm(array.slice(0, middlePoint)),
          rightArray = await mergeSortAlgorithm(array.slice(middlePoint));

        //merge the two arrays
        let mergeResult = await merge(leftArray, rightArray);

        //return result
        return mergeResult;
      }

      //merge arrayA and arrayB
      async function merge(arrayA, arrayB) {
        if (arrayA.length > 0 && arrayB.length > 0) {
          //variables
          let arrayAIndex = arrayA[0][0];
          let lengthTotal = arrayA.length + arrayB.length;
          let sorted = [];
          let dataArray = self.state.resultArray;
          let dataArrayCopy = dataArray;
          let indexA = 0;

          //identify first where we are in dataArray, set it to be indexA
          dataArray.forEach((element, index) => {
            if (element[0] === arrayAIndex) {
              indexA = index;
              return;
            }
          });

          //change the color of arrays so we can identify the left from right, arrayA = yellow, arrayB = purple
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

          //pause
          await sleep(370);
          while (arrayA.length && arrayB.length) {
            let dataArray = self.state.resultArray;
            let dataArrayCopy = dataArray;

            //change the colors of the current bars being compared to red
            await Promise.all([
              changeSingleColor(arrayA[0], 4),
              changeSingleColor(arrayB[0], 4),
            ]);

            //sort
            if (arrayA[0][1] < arrayB[0][1]) {
              sorted.push(arrayA.shift());
            } else {
              sorted.push(arrayB.shift());
            }

            // combine sorted with rest of arrayA and arrayB
            let resultMergeArray = sorted.concat(
              arrayA.slice().concat(arrayB.slice())
            );

            //merge the sorte with the entire dataArray
            let resultMergeReturn = dataArray
              .slice(0, indexA)
              .concat(resultMergeArray)
              .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));

            //update state to reflect new sort
            self.setState({
              resultArray: resultMergeReturn,
            });

            //change colors for the next loop
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

          //create new updated array
          let resultMergeArray = sorted.concat(
            arrayA.slice().concat(arrayB.slice())
          );

          //merge updated array with dataArray
          let resultMergeReturn = dataArray
            .slice(0, indexA)
            .concat(resultMergeArray)
            .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));
          self.setState({
            resultArray: resultMergeReturn,
          });

          //update all colors
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

      //update all bar colors to green at end
      await Promise.all([
        dataArray.forEach((element, index) => {
          changeColors(index, 2);
        }),
      ]);
      self.setState({
        onSort: false,
        buttonColor: "#fff",
      });
    }
  };

  render() {
    // console.log("rerendered!");
    const { city, state } = this.state;
    var self = this;
    return (
      <div className="container">
        <div className="controls-container">
          <div className="controls">
            <h1>Job Skills Data Analysis</h1>
            <p>
              This app analyzes and compares the percentage of job openings for
              several of the most popular programming languages per location.
              Enter a city and state to retrieve the location's data. Next,
              choose a sorting algorithm to visually sort the data!
            </p>
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
                <button
                  className="btn"
                  style={{ color: this.state.buttonColor }}
                >
                  Submit Location
                </button>
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
              <button
                className="btn"
                style={{ color: this.state.buttonColor }}
                onClick={self.resetSort}
              >
                Reset Sort
              </button>
            </div>
          </div>
        </div>

        <div className="barGraph-container">
          {this.state.initialData === false ||
          this.state.error === true ||
          (this.state.initialData === true && this.state.loading === true) ? (
            <Loading
              loading={this.state.loading}
              message={this.state.message}
            />
          ) : (
            <BarGraph resultArray={this.state.resultArray} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
