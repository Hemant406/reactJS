import React from "react";
import { Bookmark, Download, X } from "lucide-react";
import { motion } from "motion/react";

const Card = ({ elem ,referance }) => {
  return (
    <motion.div
      drag
      dragConstraints={referance}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 10,
      }}
      whileDrag={{ scale: 1.1 }}
      className="relative h-60 w-50 bg-zinc-900 rounded-4xl overflow-hidden p-5 cursor-grab flex flex-col"
    >
      <h4>
        <Bookmark size={30} color="white" />
      </h4>
      <p className="text-sm leading-tight mt-5">
        {elem.text}
      </p>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="px-5 py-3 w-full flex justify-between items-center">
          <h4>{elem.mbs}</h4>
          <h4 className="h-8 w-8 bg-zinc-600 rounded-full flex items-center justify-center">
            {elem.icon == "download" ? <Download size={20} /> : <X size={20} />}
          </h4>
        </div>
        {elem.tags.isTag ? <div className={`w-full ${elem.tags.footerColor == "green" ? "bg-green-600" : "bg-blue-600"} p-3`}>
          <h4 className="text-sm font-semibold text-center">{elem.tags.tagText}</h4>
        </div> : null}
      </div>
    </motion.div>
  );
};

export default Card;
