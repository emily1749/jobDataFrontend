// bubbleSort = () => {
//   //check that no other sorts are selected
//   if (
//     this.state.bubbleColor === "" &&
//     this.state.quickColor === "" &&
//     this.state.mergeColor === "" &&
//     this.state.onSort === false
//   ) {
//     //select the sort, change font color
//     this.setState({
//       bubbleColor: "#f08a5d",
//       onSort: true,
//       buttonColor: "#00587a",
//     });
//     console.log("on bubblesort");

//     //variables
//     let self = this;
//     let dataArray = self.state.resultArray;
//     //Count for number of bars
//     let count = 0;
//     //Round for how many times run through entire graph
//     let round = 0;
//     //indicates whether a bar has been swapped during this round
//     let flag = true;

//     //Set the color of first two bars to be yellow
//     dataArray[0][3] = 1;
//     dataArray[1][3] = 1;

//     //update state, rerender
//     self.setState({
//       resultArray: dataArray,
//     });

//     let myInterval = setInterval(() => {
//       if (count === 0) {
//       }
//       //Function swaps the bars in the array
//       function swap(input, indexA, indexB) {
//         flag = false;
//         let temp = input[indexA];
//         input[indexA] = input[indexB];
//         input[indexB] = temp;
//         return input;
//       }

//       //if at the end of the bar chart
//       if (count === 8) {
//         let dataArray = self.state.resultArray;
//         //if next one is greater, swap
//         if (dataArray[count][1] > dataArray[count + 1][1]) {
//           swap(dataArray, count, count + 1);
//           self.setState({
//             resultArray: dataArray,
//           });
//         }
//         //Update colors
//         dataArray[9 - round][3] = 2;
//         self.setState({
//           resultArray: dataArray,
//         });
//         //Increase the round count
//         round++;
//         //if at the end of the array and no swaps, all items are sorted
//         if (flag === true) {
//           let dataArray = self.state.resultArray;
//           //Update each bar color to green
//           dataArray.forEach(element => {
//             element[3] = 2;
//           });
//           self.setState({
//             resultArray: dataArray,
//             onSort: false,
//             buttonColor: "#fff",
//           });
//           //Clear interval, sorting is complete
//           clearInterval(myInterval);
//         } else {
//           count = 0;
//           flag = true;
//         }
//         return;
//       }
//       // else not at the end of the graph
//       else {
//         let dataArray = self.state.resultArray;
//         //if the item is greater than the next, swap
//         if (dataArray[count][1] > dataArray[count + 1][1]) {
//           swap(dataArray, count, count + 1);
//           //update state
//           self.setState({
//             resultArray: dataArray,
//           });
//         }
//         // } else if ((count === 1 && dataArray[0][3] = 1)) {
//         else {
//           if (count === 0 && dataArray[count + 1][3] !== 2)
//             if (dataArray[count + 2][3] !== 2) {
//               //update colors of the bars, and update the state
//               dataArray[count][3] = 0;
//               dataArray[count + 2][3] = 1;
//               self.setState({
//                 resultArray: dataArray,
//               });
//             }
//           //Increase count at the end of round
//           count++;
//         }
//       }
//     }, 170);
//   }
// };
