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
      "linear-gradient( #f76a8c, #ffaaa5)",
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
  // componentDidUpdate() {
  //   console.log("remounted");
  //   // if (this.state.bubbleSort == true) {
  //   //   console.log("oncomponentdidmount bubblesort");
  //   //   this.bubbleSort();
  //   //   //execute
  //   // }
  // }
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

      if (count === 8) {
        let dataArray = self.state.resultArray;
        if (dataArray[count][1] > dataArray[count + 1][1]) {
          swap(dataArray, count, count + 1);
          self.setState({
            resultArray: dataArray,
          });
        }
        dataArray[9 - round][3] = 2;
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
    }, 150);

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

  quickSort = async () => {
    console.log("on quicksort");

    let self = this;
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function swap(input, indexA, indexB) {
      // let dataArray = self.state.resultArray;
      // let substringIndex = dataArray.indexOf(input[0]);
      // console.log("substringIndex: " + substringIndex);
      // console.log("input:" + input + "indexA  " + indexA + "indexB " + indexB);
      // console.log("INPUT:");

      // let dataArray = self.state.resultArray;
      await sleep(200);
      console.log("swapped");
      // flag = false;
      let temp = input[indexA];
      input[indexA] = input[indexB];
      input[indexB] = temp;
      // let dataArray = self.state.resultArray;

      // let spliceArray = dataArray.splice(substringIndex, input.length, input);
      // console.log("splicearray: " + spliceArray);
      // self.setState({
      //   resultArray: spliceArray,
      // });
      // dataArray = input;
      //NEED TO UPDATE STATE AFTER SWAP!!

      // self.setState({
      //   resultArray:
      // })
      return input;
    }

    async function changeColors(endIndex, number) {
      let dataArray = self.state.resultArray;
      // if (dataArray[endIndex]) {
      dataArray[endIndex][3] = number;
      self.setState({
        resultArray: dataArray,
      });
      await sleep(200);

      // }
    }

    async function resetColor(endIndex) {
      let dataArray = self.state.resultArray;
      // if (dataArray[endIndex]) {
      dataArray[endIndex][3] = 0;
      self.setState({
        resultArray: dataArray,
      });
      await sleep(0.1);

      // }
    }
    // async function setPivotIndex(index) {
    //   let dataArray = self.state.resultArray;
    //   dataArray[index][2] = 1;
    //   // await sleep(500);
    //   self.setState({
    //     resultArray: dataArray,
    //   });
    // }
    // async function reset(arrayInput) {
    //   // await setTimeout(() => {
    //   arrayInput.map((element, index) => {
    //     element[3] = 0;
    //   });
    //   let dataArray = self.state.resultArray;

    //   let substringIndex = dataArray.indexOf(arrayInput[0]);

    //   let spliceArray = dataArray.splice(
    //     substringIndex,
    //     arrayInput.length,
    //     arrayInput
    //   );
    //   console.log("splicearray: " + spliceArray);
    //   self.setState({
    //     resultArray: spliceArray,
    //   });
    //   console.log("resultaray:" + self.state.resultArray);
    //   // await sleep(500);
    //   // array.map((element, index)=>{
    //   //   array[]
    //   // })
    //   // }, 500);
    // }
    async function getPivotIndex(array, startIndex, endIndex) {
      // let startPivot
      // let dataArray = self.state.resultArray;
      // console.log("the start index is " + startIndex);
      // console.log("the end index is " + endIndex);
      // console.log("getpivotinde" + array);
      // console.log("endindex: " + array[endIndex]);
      // let arrayInput = array;
      let pivotValue = array[endIndex][1];

      let pivotIndex = startIndex;
      await changeColors(endIndex, 3);
      // dataArray[endIndex][3] = 2;

      // self.setState({
      //   resultArray: dataArray,
      // });
      for (let i = startIndex; i < endIndex; i++) {
        let startPivotIndex = pivotIndex;
        // console.log("array:" + array);
        // console.log("count i is: " + i);
        // console.log("pivotIndex: " + pivotIndex);
        await Promise.all([changeColors(i, 2), changeColors(pivotIndex, 1)]);
        console.log("array at error " + array);
        if (array[i][1] < pivotValue) {
          if (i === pivotIndex) {
            //   // await swap(array, i, pivotIndex);
            // await changeColors(i, 2);
            // if (i === pivotIndex) {
            //   // await swap(array, i, pivotIndex);
            await resetColor(i);
            pivotIndex++;
          } else {
            // await changeColors(i);

            await Promise.all([
              changeColors(i, 4),
              changeColors(pivotIndex, 4),
            ]);
            await swap(array, i, pivotIndex);
            await Promise.all([
              changeColors(i, 2),
              changeColors(pivotIndex, 2),
            ]);
            await Promise.all([resetColor(i), resetColor(pivotIndex)]);
            pivotIndex++;
            //swap(array[pivotIndex], array[pivotIndex]
          }
        }

        if (startPivotIndex != pivotIndex) {
          await Promise.all([resetColor(i), resetColor(pivotIndex)]);
        } else {
          await resetColor(i);
        }

        // else {
        //   await changeColors(i, 2);
        // }

        // else {
        //pivotindex++
        // }
        //code
      }
      // array.map((element, index) => {

      // });

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
      // await reset(array);
      // await setTimeout(() => {
      // array.map((element, index) => {
      //   changeColors(index, 0);
      // });
      // // changeColors(pivotIndex, 3);
      // await changeColors(pivotIndex, 0);
      // // }, 1000);

      // await sleep(100);
      // await Promise.all([
      //   array.map(async (bar, barIndex) => {
      //     console.log("changebarcolor");
      //     // if (barIndex === pivotIndex && bar[2] === 1) {
      //     //   setPivotIndex(barIndex);
      //     // } else if (barIndex === pivotIndex) {
      //     //   changeColors(pivotIndex, 3);
      //     // } else {
      //     await changeColors(barIndex, 0);
      //     // }
      //   }),

      // await Promise.all([
      //   array.map(async (bar, barIndex) => {
      //     console.log("changebarcolor");
      //     // if (barIndex === pivotIndex && bar[2] === 1) {
      //     //   setPivotIndex(barIndex);
      //     // } else if (barIndex === pivotIndex) {
      //     //   changeColors(pivotIndex, 3);
      //     // } else {
      //     await changeColors(barIndex, 0);

      //     // }
      //   }),
      // ]);
      // await changeColors(0, 0);

      // ]);
      console.log("now return");
      return pivotIndex;
    }

    async function quickSortAlgorithm(array, startingIndex, endingIndex) {
      console.log("startingindex" + startingIndex);
      console.log("endingindex" + endingIndex);
      if (startingIndex > endingIndex) {
        // let dataArray = self.state.resultArray;
        // dataArray.map(element => {
        //   element[3] = 2;
        // });
        // self.setState({
        //   resultArray: dataArray,
        // });
        // await sleep(3000);
        return;
      } else {
        let index = await getPivotIndex(array, startingIndex, endingIndex);
        // await sleep(1000);

        await Promise.all([
          quickSortAlgorithm(array, startingIndex, index - 1),
          quickSortAlgorithm(array, index + 1, endingIndex),
        ]);
        // let dataArray = self.state.resultArray;
        // await dataArray.map(async (bar, barIndex) => {
        //   await sleep(100);
        //   bar[3] = 2;
        // });
        // self.setState({
        //   resultArray: dataArray,
        // });
      }
    }

    let dataArray = this.state.resultArray;
    await quickSortAlgorithm(dataArray, 0, 9).then(async () => {
      // await sleep(200);
      setTimeout(() => {
        dataArray.map((bar, barIndex) => {
          console.log("in dataarraymap");
          // await sleep(100);
          bar[3] = 2;
        });
        self.setState({
          resultArray: dataArray,
        });
      }, 200);
    });

    //   let index=position(array,startIndex,endIndex){
    //     quickSortAlgorithm(array, startIndex, index-1)
    //     quickSortAlgorithm(array, index+1, end)
    //   }
    // }
    //code
  };

  mergeSort = () => {
    let self = this;
    console.log("on mergesort");
    let round = 0;

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function swap(input, indexA, indexB) {
      await sleep(200);
      console.log("swapped");
      let temp = input[indexA];
      input[indexA] = input[indexB];
      input[indexB] = temp;

      return input;
    }

    async function changeColors(endIndex, number) {
      let dataArray = self.state.resultArray;
      dataArray[endIndex][3] = number;
      self.setState({
        resultArray: dataArray,
      });
      await sleep(200);

      // }
    }

    async function resetColor(endIndex) {
      let dataArray = self.state.resultArray;
      dataArray[endIndex][3] = 0;
      self.setState({
        resultArray: dataArray,
      });
      await sleep(0.1);
    }

    function mergeSortAlgorithm(array) {
      if (array.length <= 1) {
        return array;
      }
      //code
      let midPoint = Math.floor(array.length / 2);
      console.log(midPoint);
      let leftArray = array.slice(0, midPoint);
      let rightArray = array.slice(midPoint);
      console.log("rightArraY: " + rightArray + "leftArray" + leftArray);
      return sortArray(
        mergeSortAlgorithm(leftArray),
        mergeSortAlgorithm(rightArray)
      );
    }

    function sortArray(arrayA, arrayB) {
      round++;
      if (round === 11 || round === 12 || round === 13 || round === 14) {
      }
      //code
      let result = [];
      let countA = 0;
      let countB = 0;
      // for(let i=0;i< arrayA.length; i++){

      // }
      while (countA < arrayA.length && countB < arrayB.length) {
        console.log("arrayA: " + arrayA[countA]);
        console.log("arrayB: " + arrayB[countB]);
        if (arrayA[countA][1] < arrayB[countB][1]) {
          result.push(arrayA[countA]);
          countA++;
          // countA++;
        } else {
          result.push(arrayB[countB]);
          countB++;
          // countB++;
        }
        console.log("resultPush: " + result);
      }
      console.log(
        "return from func:" +
          result.concat(arrayA.slice(countA).concat(arrayB.slice(countB)))
      );
      console.log("ROUND: " + round);
      return result.concat(arrayA.slice(countA).concat(arrayB.slice(countB)));
    }

    // function
    let dataArray = self.state.resultArray;
    console.log("final result" + mergeSortAlgorithm(dataArray));
    dataArray = mergeSortAlgorithm(dataArray);
    self.setState({
      resultArray: dataArray,
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
            <br />
            <button className="QuickSort" onClick={self.quickSort}>
              Quick Sort
            </button>
            <br />
            <button className="MergeSort" onClick={self.mergeSort}>
              Merge Sort
            </button>
            {/* <p>Sorting 2</p>
            <p>Sorting 3</p> */}
          </div>
        </div>

        <div className="barGraph-container">
          <div className="barGraph">
            {this.state.resultArray.map(function(value, index) {
              // console.log("test");

              const color = [
                "linear-gradient( #0278ae, #59b5d7)", //blue
                "linear-gradient( #fddb3a, #ffefa0)", //yellow
                "linear-gradient( #79d70f, #bbd196)", //green
                "linear-gradient( #5c2a9d, #d789d7)", //purple
                "linear-gradient( #f76a8c, #ffaaa5)", //pink/orange
              ];

              return (
                <div className="bargroup" key={value[4]}>
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
