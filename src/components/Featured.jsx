import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 pb-16">
        <h1 className='text-7xl font-["Neue Montreal"]'>Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-14">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContaner relative w-1/2 h-[75vh] "
          >
            <h3 className="text-2xl pb-4 font-semibold">
              <li>FYDE</li>
            </h3>
            <h1 className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] font-semibold text-[#CDEA68] leading-none tracking-tighter text-8xl flex overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="cardBtn flex gap-2">
              {["audit", "copywright", "salse deck", "slides design"].map(
                (item, index) => (
                  <button
                    key={index}
                    className={
                      "px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase"
                    }
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContaner relative w-1/2 h-[75vh] "
          >
            <h3 className="text-2xl pb-4 font-semibold">
              <li>VISE</li>
            </h3>
            <h1 className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] font-semibold text-[#CDEA68] leading-none tracking-tighter text-8xl flex overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="cardBtn flex gap-2">
              {["Agency", "company presentation"].map((item, index) => (
                <button
                  key={index}
                  className={
                    "px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-28">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardContaner relative w-1/2 h-[75vh] "
          >
            <h3 className="text-2xl pb-4 font-semibold py-10">
              <li>TRAWA</li>
            </h3>
            <h1 className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] font-semibold text-[#CDEA68] leading-none tracking-tighter text-8xl flex overflow-hidden">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="cardBtn flex gap-2">
              {["brand identity", "design resarch", "investor deck"].map(
                (item, index) => (
                  <button
                    key={index}
                    className={
                      "px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase"
                    }
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardContaner relative w-1/2 h-[75vh] "
          >
            <h3 className="text-2xl pb-4 font-semibold py-10">
              <li>PREMIUM BLEND</li>
            </h3>
            <h1 className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] font-semibold text-[#CDEA68] leading-none tracking-tighter text-7xl flex overflow-hidden">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="cardBtn flex gap-2">
              {["branded template"].map((item, index) => (
                <button
                  key={index}
                  className={
                    "px-4 py-2 border-2 border-zinc-400 mt-4 rounded-full font-semibold text-xs uppercase"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" w-full mt-56 relative ">
        <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
          <button className="px-10 py-6 bg-zinc-900 flex  gap-5 items-center text-white rounded-full mt-6">
            VIEW ALL CASE STUDIES
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
