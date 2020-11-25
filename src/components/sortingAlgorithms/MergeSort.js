import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateResultArray, updateMergeStart, setOnSort } from '../../actions';

const MergeSort = props => {
  useEffect(() => {
    if (props.mergeStart === true && props.onSort === false) {
      props.setOnSort(true);
      const mergeSortStartAlgorithm = async () => {
        let dataArray = [...props.resultArray];

        console.log('on mergesort');

        let self = this;

        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function changeColors(index, number) {
          dataArray[index][3] = number;
          // props.updateResultArray(dataArray);

          //   props.updateResultArray([
          //     ['Swift', 2.34, 5, 0, 4],
          //     ['Javascript', 17.16, 6, 0, 5],
          //     ['PHP', 2.44, 7, 0, 6],
          //     ['Java', 17.56, 8, 0, 7],
          //     ['C#', 8.22, 9, 0, 8],
          //     ['Typescript', 0.2, 0, 0, 0],
          //     ['Ruby', 1.52, 1, 0, 1],
          //     ['Python', 27.21, 2, 0, 2],
          //     ['C++', 22.84, 3, 0, 3],
          //     ['Golang', 0.4, 4, 0, 9],
          //   ]);

          // await sleep(170);
        }

        async function changeSingleColor(item, number) {
          // let dataArray = [...props.resultArray];

          //find where the item is in dataArray
          let index = dataArray.indexOf(item);
          dataArray[index][3] = number;

          // props.updateResultArray(dataArray);

          // props.updateResultArray([
          //   ['Swift', 2.34, 5, 0, 4],
          //   ['Javascript', 17.16, 6, 0, 5],
          //   ['PHP', 2.44, 7, 0, 6],
          //   ['Java', 17.56, 8, 0, 7],
          //   ['C#', 8.22, 9, 0, 8],
          //   ['Typescript', 0.2, 0, 0, 0],
          //   ['Ruby', 1.52, 1, 0, 1],
          //   ['Python', 27.21, 2, 0, 2],
          //   ['C++', 22.84, 3, 0, 3],
          //   ['Golang', 0.4, 4, 0, 9],
          // ]);

          // await sleep(170);
        }

        async function updateArray(arr) {
          //   props.updateResultArray(arr);
          console.log('IN UPDATE FUNCTION');
          props.updateResultArray(arr);
          await sleep(500);
          //   props.updateResultArray([
          //     ['Swift', 2.34, 5, 0, 4],
          //     ['Javascript', 17.16, 6, 0, 5],
          //     ['PHP', 2.44, 7, 0, 6],
          //     ['Java', 17.56, 8, 0, 7],
          //     ['C#', 8.22, 9, 0, 8],
          //     ['Typescript', 0.2, 0, 0, 0],
          //     ['Ruby', 1.52, 1, 0, 1],
          //     ['Python', 27.21, 2, 0, 2],
          //     ['C++', 22.84, 3, 0, 3],
          //     ['Golang', 0.4, 4, 0, 9],
          //   ]);
        }
        let firstHalf = [];
        async function mergeSortAlgorithm(array) {
          if (array.length <= 1) {
            return array;
          }
          // let test = [...firstHalf, array.slice(middlePoint)];

          let middlePoint = Math.floor(array.length / 2);
          let leftArray = await mergeSortAlgorithm(array.slice(0, middlePoint));
          let rightArray = await mergeSortAlgorithm(array.slice(middlePoint));

          let mergeResult = await merge(leftArray, rightArray);
          console.log('MERGESULT' + mergeResult);
          //   console.log('STATE' + props.resultArray);
          return mergeResult;
        }

        async function merge(arrayA, arrayB) {
          if (arrayA.length > 0 && arrayB.length > 0) {
            let arrayAIndex = arrayA[0][0];
            let lengthTotal = arrayA.length + arrayB.length;
            let sorted = [];
            // let dataArray = [...props.resultArray];
            let dataArrayCopy = [...dataArray];
            let indexA = 0;

            //identify first where we are in dataArray, set it to be indexA
            dataArray.forEach((element, index) => {
              if (element[0] === arrayAIndex) {
                indexA = index;
                console.log('RETURNED!!!' + arrayA);
                console.log('RETURNED!! B' + arrayB);
                if (arrayA.length + arrayB.length === 5) {
                  console.log('LENGTH 5!!!!!!!!!!!' + [...arrayA, ...arrayB]);
                  updateArray([...arrayA, ...arrayB]);
                  firstHalf = [...arrayA, ...arrayB];
                  return [...arrayA, ...arrayB];
                } else {
                  return;
                }
              }
            });

            //change the color of arrays so we can identify the left from right
            //arrayA = yellow, arrayB = purple
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
            // await sleep(370);
            while (arrayA.length && arrayB.length) {
              // let dataArray = [...props.resultArray];
              // let dataArrayCopy = [...dataArray];

              await Promise.all([
                changeSingleColor(arrayA[0], 4),
                changeSingleColor(arrayB[0], 4),
              ]);

              if (arrayA[0][1] < arrayB[0][1]) {
                sorted.push(arrayA.shift());
              } else {
                sorted.push(arrayB.shift());
              }

              let resultMergeArray = sorted.concat(
                arrayA.slice().concat(arrayB.slice())
              );

              //merge the sorte with the entire dataArray
              let resultMergeReturn = dataArray
                .slice(0, indexA)
                .concat(resultMergeArray)
                .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));

              // props.updateResultArray(resultMergeReturn);
              await updateArray(resultMergeReturn);
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

            let resultMergeReturn = dataArray
              .slice(0, indexA)
              .concat(resultMergeArray)
              .concat(dataArrayCopy.slice(lengthTotal + indexA, 10));
            console.log('RESULTMERGERETURN' + resultMergeReturn);
            console.log('BEFORE STATE UPDATE ' + props.resultArray);
            const resultMergeReturnCopy = [...resultMergeReturn];
            await updateArray(resultMergeReturnCopy);
            // props.updateResultArray(resultMergeReturnCopy);
            // props.updateResultArray([
            //   ['Swift', 2.34, 5, 0, 4],
            //   ['Javascript', 17.16, 6, 0, 5],
            //   ['PHP', 2.44, 7, 0, 6],
            //   ['Java', 17.56, 8, 0, 7],
            //   ['C#', 8.22, 9, 0, 8],
            //   ['Typescript', 0.2, 0, 0, 0],
            //   ['Ruby', 1.52, 1, 0, 1],
            //   ['Python', 27.21, 2, 0, 2],
            //   ['C++', 22.84, 3, 0, 3],
            //   ['Golang', 0.4, 4, 0, 9],
            // ]);
            console.log('AFTER STATE UPDATE' + props.resultArray);
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
            // updateArray(dataArray);

            return resultMergeArray;
          } else {
            return;
          }
        }

        // let dataArray = [...props.resultArray];
        dataArray = await mergeSortAlgorithm(dataArray);
        console.log('DATAARRAY' + dataArray);
        //update all bar colors to green at end
        await Promise.all([
          dataArray.forEach((element, index) => {
            changeColors(index, 2);
          }),
        ]);
        updateArray(dataArray);
        props.setOnSort(false);
        // self.setState({
        //   onSort: false,
        //   buttonColor: '#fff',
        // });
      };

      mergeSortStartAlgorithm();
    }
  }, [props.mergeStart, props.resultArray]);

  return (
    <div>
      <button
        // onClick={() => bubbleSort(props.resultArray, props.updateResultArray)}
        onClick={() => props.updateMergeStart(true)}
        className='sortingAlgorithm'
        // style={{ color: this.state.bubbleColor }}
      >
        Merge Sort
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
