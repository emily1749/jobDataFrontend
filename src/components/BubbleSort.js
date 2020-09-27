import { render } from "@testing-library/react";
import React from "react";
// import "./BubbleSort.css"

const BubbleSort = props => {
  let dataArray = props.dataArray;
  // function onClick() {
  //   console.log("on bubblesort");
  //   console.log(dataArray[0]);
  //   //start sorting here...
  //   // setTimeout
  //   for (let i = 0; i < dataArray.length; i++) {
  //     // code
  //     if (dataArray[i][1] < dataArray[i + 1][1]) {
  //     }
  //   }
  // }

  return (
    <div>
      <button
        onClick={function() {
          dataArray.map((round, roundIndex) => {
            // console.log(element + index);
            {
              dataArray.map((bar, barIndex) => {
                console.log("test");
                return (
                  <div
                    className="bar"
                    // style={{ height: `${value[1] * 10}px` }}
                  ></div>
                  // <h2>{value[0]}</h2>
                  // <p>{value[1]}%</p>{" "}
                );
              });
            }
            return <div>test</div>;
          });
        }}
      >
        {" "}
        MergeSort{" "}
      </button>
    </div>
  );
};

export default BubbleSort;
