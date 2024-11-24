import React from "react";

const StatusIndicator = ({ isSuccess }) => {
  const icon = isSuccess ? "✔" : "✖"; 
  return (
    <span className="statuscontainer">
      <span className={`statusdetail ${isSuccess ? "statusSuccess" : "statusFail"}`}>
        {icon}
      </span>
    </span>
  );
};

export default StatusIndicator;
