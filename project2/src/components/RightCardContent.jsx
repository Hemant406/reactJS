import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute h-full top-0 left-0 p-6 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed mb-7 text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          praesentium et. Quod odio cum obcaecati!
        </p>
        <div className="flex justify-between text-white">
          <button style={{backgroundColor:props.color}} className="font-medium rounded-full py-2 px-8 cursor-pointer">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className="font-medium rounded-full py-2 px-3 cursor-pointer">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
