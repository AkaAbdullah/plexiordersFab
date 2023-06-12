import React from "react";

export const ProgressBar = () => {
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar w-75"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};
