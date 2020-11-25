import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateResultArray, updateMergeStart, setOnSort } from '../../actions';

const MergeSort = props => {
  useEffect(() => {
    if (props.mergeStart === true && props.onSort === false) {
      let self = this;

      //https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

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
    }
  }, [props.mergeStart, props.resultArray]);

  return (
    <div>
      <button
        // onClick={() => bubbleSort(props.resultArray, props.updateResultArray)}
        onClick={() => props.updateQuickStart(true)}
        className='sortingAlgorithm'
        // style={{ color: this.state.bubbleColor }}
      >
        Quick Sort
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resultArray: state.resultArray,
    mergeStart: state.mergeStart,
    onSort: state.onSort,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     updateResultArray: e => dispatch(updateResultArray(e)),
//     updateMergeStart: e => dispatch(updateMergeStart(e)),
//     setOnSort: e => dispatch(setOnSort(e)),
//   };
// }

export default connect(mapStateToProps, {
  updateResultArray,
  updateMergeStart,
  setOnSort,
})(MergeSort);
