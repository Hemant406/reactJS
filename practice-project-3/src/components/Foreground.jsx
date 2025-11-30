import React, { useRef } from "react";

import Card from "./Card";
const Foreground = () => {

  const data = [
    {
      text:"Hey , I'm Hemant",
      mbs : "0.4mb",
      icon :"download",
      tags:{
        isTag:true,
        footerColor:"green",
        tagText:"Download Now"
      }
    },
    {
      text:"Welcome to my YT channel",
      mbs : "0.9mb",
      icon :"download",
      tags:{
        isTag:true,
        footerColor:"red",
        tagText:"Visit"
      }
    },
    {
      text:"My daily routine",
      mbs : "10mb",
      icon:"cross",
      tags:{
        isTag:false,
      }
    }
  ]

  const ref = useRef(null)
  return (
    <div ref={ref} className="fixed top-0 left-0 h-full w-full flex items-start p-5 gap-5">
      {data.map((elem,idx)=>{
        return <Card elem={elem} referance={ref} key={idx} />
      })}
      
    </div>
  );
};

export default Foreground;
