import React from 'react';
import { connect } from 'react-redux';
import { updateResultArray } from '../../actions';

// const bubbleSort = (resultArray, updateResultArray) => {
//   console.log('Here');
//   //   if (
//   //     this.state.bubbleColor === '' &&
//   //     this.state.quickColor === '' &&
//   //     this.state.mergeColor === '' &&
//   //     this.props.onSortBool === false &&
//   //     this.state.locationSubmitted === true
//   //   ) {
//   // this.setState({
//   //   bubbleColor: '#f08a5d',
//   // onSort: true,
//   //   buttonColor: '#00587a',
//   // });
//   //   this.props.onSort(true);

//   let self = this;
//   let count = 0;
//   let round = 0;
//   //flag indicates whether a bar has been swapped during this round

//   let flag = true;
//   let endFlag = false;
//   let dataArray = [...resultArray];

//   let myInterval = setInterval(() => {
//     console.log(dataArray);
//     console.log('count' + count);
//     function swap(input, indexA, indexB) {
//       flag = false;
//       let temp = input[indexA];
//       input[indexA] = input[indexB];
//       input[indexB] = temp;
//       return input;
//     }

//     if (endFlag === true || count === 9) {
//       if (dataArray[8][1] > dataArray[9][1]) {
//         swap(dataArray, 8, 9);
//         props.updateResultArray(dataArray);
//       }

//       if (round < 9) {
//         dataArray[9 - round][3] = 2;
//         dataArray[9 - round - 1][3] = 0;
//       } else {
//         dataArray[9 - round][3] = 2;
//       }

//       props.updateResultArray(dataArray);
//       round++;
//       //if at the end of the array and no swaps, all items are sorted
//       if (flag === true) {
//         // let dataArray = [...resultArray];
//         //Update each bar color to green
//         dataArray.forEach(element => {
//           element[3] = 2;
//         });
//         updateResultArray(
//           dataArray
//           // onSort: false,
//           //   buttonColor: '#fff',
//         );
//         // this.props.onSort(false);
//         // console.log('PROPS' + this.props.onSortBool);
//         console.log('CLEAR');
//         clearInterval(myInterval);
//       } else {
//         count = 0;
//         flag = true;
//       }
//       endFlag = false;
//       return;
//     } else {
//       //   let dataArray = [...resultArray];
//       if (count === 0) {
//         //if first count, have to color first two yellow
//         dataArray[0][3] = 1;
//         dataArray[1][3] = 1;
//         updateResultArray(dataArray);
//         count++;
//       } else {
//         console.log('IN ELSE');
//         if (dataArray[count - 1][1] > dataArray[count][1]) {
//           console.log('FIRST IF');
//           swap(dataArray, count - 1, count);
//           updateResultArray(dataArray);
//           //   count++;
//         } else {
//           console.log('SECONDIF');
//           if (dataArray[count + 1][3] !== 2) {
//             //if the next one isn't green/already sorted, continue
//             dataArray[count - 1][3] = 0;
//             dataArray[count + 1][3] = 1;
//             updateResultArray(dataArray);
//           } else if (dataArray[count + 1][3] === 2) {
//             endFlag = true;
//           }
//           count++;
//         }
//       }
//     }
//   }, 140);
// };
// }

const BubbleSort = props => {
  //   console.log(this);
  //   let self = this;
  return (
    <div>
      <button
        // onClick={() => bubbleSort(props.resultArray, props.updateResultArray)}
        onClick={() => {
          console.log('Here');
          //   if (
          //     this.state.bubbleColor === '' &&
          //     this.state.quickColor === '' &&
          //     this.state.mergeColor === '' &&
          //     this.props.onSortBool === false &&
          //     this.state.locationSubmitted === true
          //   ) {
          // this.setState({
          //   bubbleColor: '#f08a5d',
          // onSort: true,
          //   buttonColor: '#00587a',
          // });
          //   this.props.onSort(true);

          let count = 0;
          let round = 0;
          //flag indicates whether a bar has been swapped during this round

          let flag = true;
          let endFlag = false;
          //   let dataArray = [...props.resultArray];

          let myInterval = setInterval(() => {
            // let dataArray = [...props.dArray];
            let dataArray = [...props.resultArray];
            console.log('PROPS ARRAY' + props.resultArray);
            // console.log(dataArray);
            console.log('round' + round);
            function swap(input, indexA, indexB) {
              flag = false;
              let temp = input[indexA];
              input[indexA] = input[indexB];
              input[indexB] = temp;
              return input;
            }

            if (endFlag === true || count === 9) {
              let dataArray = [...props.resultArray];

              if (dataArray[8][1] > dataArray[9][1]) {
                let dataArray = [...props.resultArray];
                swap(dataArray, 8, 9);
                props.updateResultArray(dataArray);
              }

              if (round < 9) {
                let dataArray = [...props.resultArray];

                dataArray[9 - round][3] = 2;
                dataArray[9 - round - 1][3] = 0;
              } else {
                let dataArray = [...props.resultArray];

                dataArray[9 - round][3] = 2;
              }

              props.updateResultArray(dataArray);
              round++;
              //if at the end of the array and no swaps, all items are sorted
              if (flag === true) {
                let dataArray = [...props.resultArray];

                // let dataArray = [...resultArray];
                //Update each bar color to green
                dataArray.forEach(element => {
                  element[3] = 2;
                });
                props.updateResultArray(
                  dataArray
                  // onSort: false,
                  //   buttonColor: '#fff',
                );
                // this.props.onSort(false);
                // console.log('PROPS' + this.props.onSortBool);
                console.log('CLEAR');
                clearInterval(myInterval);
              } else {
                count = 0;
                flag = true;
              }
              endFlag = false;
              return;
            } else {
              //   let dataArray = [...resultArray];
              if (count === 0) {
                // let dataArray = ;

                //if first count, have to color first two yellow
                dataArray[0][3] = 1;
                dataArray[1][3] = 1;
                props.updateResultArray(dataArray);
                count++;
              } else {
                let dataArray = [...props.resultArray];
                console.log('CHECK THIS ONE' + dataArray);
                console.log('IN ELSE');
                if (dataArray[count - 1][1] > dataArray[count][1]) {
                  console.log(count + 'COUNT');
                  //   console.log(dataArray + 'DATAARRAY');
                  let dataArray = [...props.resultArray];
                  console.log('FIRST IF');
                  dataArray = swap(dataArray, count - 1, count);
                  console.log('BEFORE SWAP' + dataArray);
                  props.updateResultArray(dataArray);
                  console.log(props.resultArray);

                  //   count++;
                } else {
                  console.log('SECONDIF');
                  let dataArray = [...props.resultArray];
                  if (dataArray[count + 1][3] !== 2) {
                    let dataArray = [...props.resultArray];

                    //if the next one isn't green/already sorted, continue
                    dataArray[count - 1][3] = 0;
                    dataArray[count + 1][3] = 1;
                    props.updateResultArray(dataArray);
                  } else if (dataArray[count + 1][3] === 2) {
                    endFlag = true;
                  }
                  count++;
                }
              }
            }
          }, 140);
        }}
        className='sortingAlgorithm'
        // style={{ color: this.state.bubbleColor }}
      >
        Bubble Sort
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { resultArray: state.resultArray };
};

function mapDispatchToProps(dispatch) {
  return {
    updateResultArray: e => dispatch(updateResultArray(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BubbleSort);
