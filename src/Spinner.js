import "./Spinner.css";
import React from "react";

const Spinner = () => {
  return (
    <div>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
