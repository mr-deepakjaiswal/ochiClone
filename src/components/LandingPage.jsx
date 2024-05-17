import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full h-screen pt-1">
      <div className="textstructre mt-44 px-20">
        {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="bg-red-500 rounded-md w-[8vw] h-[5.2vw] relative mr-[1vw]"
                  >
                    <img
                      src="./images/ochiimg.jpg"
                      alt=""
                      className="w-[8vw] h-[5.2vw] rounded-xl"
                    />
                  </motion.div>
                )}
                <h1 className='uppercase text-[8vw]  leading-[6.5vw] tracking-tighter font-["Founders_Grotesk_X-Condensed"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between item-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p>{item}</p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-2 border-[1px] border-zinc-900 rounded-full font-light text-md uppercase ">
            Start The Project
          </div>
          <div className="w-9 h-9 border-[1px] rounded-full border-zinc-900 flex items-center justify-center">
            <FaArrowUpLong className="rotate-[45deg]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
