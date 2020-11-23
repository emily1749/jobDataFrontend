import React from 'react';
import { connect } from 'react-redux';
import { updateResultArray } from '../../actions';

function bubbleSort() {
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
  this.props.onSort(true);

  let self = this;
  let count = 0;
  let round = 0;
  //flag indicates whether a bar has been swapped during this round

  let flag = true;
  let endFlag = false;

  let myInterval = setInterval(() => {
    if (count === 0) {
    }
    function swap(input, indexA, indexB) {
      flag = false;
      let temp = input[indexA];
      input[indexA] = input[indexB];
      input[indexB] = temp;
      return input;
    }

    if (endFlag === true || count === 9) {
      let dataArray = self.state.resultArray;
      if (dataArray[8][1] > dataArray[9][1]) {
        swap(dataArray, 8, 9);
        self.setState({
          resultArray: dataArray,
        });
      }

      if (round < 9) {
        dataArray[9 - round][3] = 2;
        dataArray[9 - round - 1][3] = 0;
      } else {
        dataArray[9 - round][3] = 2;
      }

      self.setState({
        resultArray: dataArray,
      });
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
          // onSort: false,
          buttonColor: '#fff',
        });
        this.props.onSort(false);
        console.log('PROPS' + this.props.onSortBool);
        clearInterval(myInterval);
      } else {
        count = 0;
        flag = true;
      }
      endFlag = false;
      return;
    } else {
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
        if (dataArray[count - 1][1] > dataArray[count][1]) {
          swap(dataArray, count - 1, count);
          self.setState({
            resultArray: dataArray,
          });
        } else {
          if (dataArray[count + 1][3] !== 2) {
            //if the next one isn't green/already sorted, continue
            dataArray[count - 1][3] = 0;
            dataArray[count + 1][3] = 1;
            self.setState({
              resultArray: dataArray,
            });
          } else if (dataArray[count + 1][3] === 2) {
            endFlag = true;
          }
          count++;
        }
      }
    }
  }, 140);
}
// }

const BubbleSort = () => {
  return (
    <div>
      <button
        onClick={bubbleSort}
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

export default connect(mapStateToProps, { updateResultArray })(BubbleSort);
