import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import "./BubbleSort.css"

const BubbleSort = props => {
  // for ()
  // function onClick() {
  //   console.log("on bubblesort");
  //   console.log(dataArray[0]);
  //   //start sorting here...
  //   // setTimeout
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
  // }
  let dataArray = props.dataArray;
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= props.dataArray.length) {
        // clearInterval(interval);
        return;
      } else {
        setCount(count => count + 1);
        counter++;
        console.log("in useeffect");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [props.dataArray]);

  function btnFunction() {
    props.dataArray.slice(count - 1, count + 1).map((round, roundIndex) => {
      // console.log("here");
      console.log(round[3]);
      console.log(round);

      round[3] = 2;

      props.updateState(props.dataArray);
      console.log("here");
      return console.log("here");
    });
  }
  return (
    <div>
      <button
        onClick={btnFunction}
        // onClick={function() {
        //   console.log(props.dataArray);
        //   setTimeout(() => {
        //     props.dataArray.map((round, roundIndex) => {
        //       {
        //         console.log("here");
        //         console.log(round[3]);
        //         console.log(round);

        //         round[3] = 2;

        //         props.updateState(props.dataArray);

        //         // props.dataArray.map((bar, barIndex) => {
        //         //   // bar[3] = 1;
        //         //   props.dataArray[barIndex + 1] = 1;
        //         //   setTimeout(() => {
        //         //     if (bar[1] > props.dataArray[barIndex + 1][1]) {
        //         //       // switch()
        //         //     }
        //         //   }, 500);
        //         //   bar[3] = 0;
        //         // });
        //       }
        //     });
        //   }, 1000);
        // }}
      >
        Bubble Sort
      </button>

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
