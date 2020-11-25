import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateResultArray, updateBubbleStart, setOnSort } from '../../actions';

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
  let dataArray = [...props.resultArray];

  useEffect(() => {
    if (props.bubbleStart === true && props.onSort === false) {
      props.setOnSort(true);
      console.log('Here');
      let count = 0;
      let round = 0;

      //flag indicates whether a bar has been swapped during this round
      let flag = true;
      let endFlag = false;

      // let dataArray = [...props.resultArray];

      let myInterval = setInterval(() => {
        console.log('ROUND' + round);
        console.log('COUNT' + count);
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
            props.updateBubbleStart(false);
            clearInterval(myInterval);
          } else {
            count = 0;
            flag = true;
          }
          endFlag = false;
          return;
        } else {
          let dataArray = [...props.resultArray];
          if (count === 0) {
            //if first count, have to color first two yellow
            dataArray[0][3] = 1;
            dataArray[1][3] = 1;
            props.updateResultArray(dataArray);
            count++;
          } else {
            if (dataArray[count - 1][1] > dataArray[count][1]) {
              swap(dataArray, count - 1, count);
              props.updateResultArray(dataArray);
            } else {
              if (dataArray[count + 1][3] !== 2) {
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
      }, 200);
    }
  }, [props.bubbleStart, props.resultArray]);

  return (
    <div>
      <button
        // onClick={() => bubbleSort(props.resultArray, props.updateResultArray)}
        onClick={() => props.updateBubbleStart(true)}
        className='sortingAlgorithm'
        // style={{ color: this.state.bubbleColor }}
      >
        Bubble Sort
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resultArray: state.resultArray,
    bubbleStart: state.bubbleStart,
    onSort: state.onSort,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateResultArray: e => dispatch(updateResultArray(e)),
    updateBubbleStart: e => dispatch(updateBubbleStart(e)),
    setOnSort: e => dispatch(setOnSort(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BubbleSort);
