import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center "
    >
      <div className="rounded-full border border-[#333333] absolute h-[200px] w-[200px] mt-80 animate-ping" />
      <div className="rounded-full border border-[#333333] absolute h-[300px] w-[300px] mt-80 animate-ping" />
      <div className="rounded-full border border-[#333333] absolute h-[500px] w-[500px] mt-80 animate-pulse" />
      <div className="rounded-full border border-[#F7AB0A] absolute h-[650px] w-[650px] mt-80  opacity-20 animate-ping" />
      <div className="rounded-full border border-[#333333] absolute h-[800px] w-[800px] mt-80  animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircle;
