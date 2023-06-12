import React from "react";
import { useNavigate } from "react-router-dom";

export const ExperimentalBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate("/test")} className="exp">
        <h3>Experimental Page</h3>
      </div>
    </>
  );
};
