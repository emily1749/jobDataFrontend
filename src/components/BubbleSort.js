import { render } from "@testing-library/react";
import React from "react";
// import "./BubbleSort.css"

const BubbleSort = props => {
  let dataArray = props.dataArray;
  // for ()
  // function onClick() {
  //   console.log("on bubblesort");
  //   console.log(dataArray[0]);
  //   //start sorting here...
  //   // setTimeout
  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length; j++) {
      // bar div of dataArray[j], div of dataArray[j+1] = change to yellow
      //
      if (dataArray[j][1] > dataArray[j + 1][1]) {
        //switch bar div of dataArray[j], dataArray[j+1]
        //just switch the state of it and it'll rerender
      }
      //dataArray[j] change back to
    }
  }
  // }

  return (
    <div>
      <button
        onClick={function() {
          console.log(props.dataArray);
          props.dataArray.map((round, roundIndex) => {
            {
              props.dataArray.map((bar, barIndex) => {
                bar[3] = 1;
                props.dataArray[barIndex + 1] = 1;
                if (bar[1] > props.dataArray[barIndex + 1][1]) {
                  // switch()
                }
              });
            }
          });
        }}
      ></button>

      {/* <button
        onClick={function() {
          dataArray.map((round, roundIndex) => {
            // console.log(element + index);
            {
              dataArray.map((bar, barIndex) => {
                
                console.log("test");
                return (
<div
                  className="bar"
                  style={{ height: `${value[1] * 10}px` }}
                ></div>
                <h2>{value[0]}</h2>
                <p>{value[1]}%</p>{" "}
             
                </div>;
                )
                  
              });
            }
            return <div>test</div>;
          });
        }}
      >
        {" "}
        MergeSort{" "}
      </button> */}
    </div>
  );
};

export default BubbleSort;
