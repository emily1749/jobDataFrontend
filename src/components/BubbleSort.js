import { render } from "@testing-library/react";
import React from "react";

const BubbleSort = props => {
  console.log("on bubblesort");
  let self = this;
  let count = 0;
  let dataArray = props.resultArray;
  dataArray[0][3] = 1;
  dataArray[1][3] = 1;
  let round = 0;
  props.handler(dataArray);
  let flag = true;

  // let myInterval = setInterval(() => {
  //   function swap(input, indexA, indexB) {
  //     console.log("swapped");
  //     flag = false;
  //     let temp = input[indexA];
  //     input[indexA] = input[indexB];
  //     input[indexB] = temp;
  //     return input;
  //   }

  //   if (count === 8) {
  //     let dataArray = self.state.resultArray;
  //     if (dataArray[count][1] > dataArray[count + 1][1]) {
  //       swap(dataArray, count, count + 1);
  //       self.setState({
  //         resultArray: dataArray,
  //       });
  //     }
  //     dataArray[9 - round][3] = 2;
  //     self.setState({
  //       resultArray: dataArray,
  //     });
  //     round++;
  //     if (flag === true) {
  //       let dataArray = self.state.resultArray;
  //       dataArray.map(element => {
  //         element[3] = 2;
  //       });
  //       self.setState({
  //         resultArray: dataArray,
  //       });

  //       clearInterval(myInterval);
  //     } else {
  //       count = 0;
  //       flag = true;
  //     }

  //     return;
  //   } else {
  //     let dataArray = self.state.resultArray;
  //     if (dataArray[count][1] > dataArray[count + 1][1]) {
  //       swap(dataArray, count, count + 1);
  //       self.setState({
  //         resultArray: dataArray,
  //       });
  //     } else {
  //       if (dataArray[count + 2][3] !== 2) {
  //         dataArray[count][3] = 0;
  //         dataArray[count + 2][3] = 1;
  //         self.setState({
  //           resultArray: dataArray,
  //         });
  //       }

  //       count++;
  //     }

  //     console.log(count);
  //   }
  // }, 150);
  // render();
  return null;
};

export default BubbleSort;
