import "./Loading.css";
import React from "react";

const Loading = props => {
  let displayMsg = [
    "Please enter location",
    "Please enter both City and State",
  ];
  return (
    <div>
      {props.loading ? (
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div class="info">
          <p>{props.message}</p>
        </div>
      )}
    </div>
  );
};

// Loading.defaultProps = {
//   message: "Please enter location",
// };

export default Loading;
