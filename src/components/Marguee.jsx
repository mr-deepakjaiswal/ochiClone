import React from "react";
import { motion } from "framer-motion";
function Marguee() {
  return (
    <div className="w-full py-20 rounded-3xl bg-zinc-800 bg-[#004D43] overflow-hidden ">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden text-white px-20">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[15vw] leading-none  font-["Founders_Grotesk_X-Condensed"] uppercase pt-4  font-semibold'
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text-[15vw] leading-none  font-["Founders_Grotesk_X-Condensed"] uppercase pt-4 font-semibold'
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marguee;
