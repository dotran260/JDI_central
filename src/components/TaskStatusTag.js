import React from "react";

const TaskStatusTag = ({ type }) => {
  switch (type) {
    case "hired":
      return (
        <div className="flex items-center">
          <div className="progress-dot" />{" "}
          <span className="ml-10">In Progress</span>
        </div>
      );
    case "completed":
      return (
        <div className="flex items-center">
          <div className="completed-dot"></div>{" "}
          <span className="ml-10">Completed</span>
        </div>
      );
    default:
      return <></>;
  }
};

export default TaskStatusTag;
