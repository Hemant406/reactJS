import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="bg-blue-400 shrink-0 px-4 py-3  rounded-2xl h-full w-[300px]">
      <div className="flex items-center justify-between ">
        <h2 className="text-md font-semibold bg-red-500 w-fit rounded-xl py-2 px-4">
          {data.category}
        </h2>
        <h4 className="text-sm font-medium ">{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.taskTitle}</h2>
      <p className="font-medium mt-2 ">
        {data.taskDescription}
      </p>
    </div>
  );
};

export default FailedTask;
