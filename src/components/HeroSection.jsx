import Signin from "./Signin";
import Signup from "./Signup";
import { useState } from "react";
import ppl from "../assets/ppl.png";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [signIn, setSignin] = useState(1);
  // 1 -> signin
  // 0 -> Signup
  const [ref, inView] = useInView({
    triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes in view
  });

  const variants1 = {
    hidden: { opacity: 0, x: -100 }, // Start from left
    show: { opacity: 1, x: 0 }, // End at the original position
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 }, // Start from left
    show: { opacity: 1, x: 0 }, // End at the original position
  };

  return (
    <div className="relative block grow shrink-0 basis-auto">
      <div className="absolute inset-0 bg-world bg-no-repeat bg-opacity-5 opacity-25 bg-top bg-cover"></div>
      <div className="max-w-screen-lg mx-auto">
        <div className=" mx-auto pt-8  flex flex-col gap-15 justify-around items-center md:flex-row  ">
          <div className="relative md:pl-3">
            {/* <div className = "absolute blur-3xl w-[200px] h-[200px] opacity-40 z-0 rounded top-1/3 inset-0 mx-auto -translate-x-10  abstract_motion"></div> */}
            <div className="w-full max-w-[550px] text-b font-bold ">
              <h1 className="text-balck  text-center md:text-left text-3xl text-wrap m-5 ">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  Explore,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-cblue transform hover:scale-105 transition-transform ease-out duration-10.50"
                >
                  {" "}
                  Connect
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
                >
                  , Share
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.9 }}
                >
                  , Chat and
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 1.2 }}
                  className="text-cblue transform hover:scale-105 transition-transform ease-out duration-150 "
                >
                  {" "}
                  Spread
                </motion.span>
              </h1>
            </div>
            <p className="text-center md:text-left text-sm text-cblue m-5 font-semibold">
              Connecting People <br /> Connecting Communities
            </p>
            <img className="mx-auto" src={ppl} />
          </div>
          <div className=" w-full mb-1 md:pl-3 pt-16">
            <AnimatePresence mode="popLayout">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ bounce: "spring", duration: 0.75, delay: 1 }}
                className="h-[584px] "
              >
                {signIn == 1 && <Signin setSignin={setSignin} />}
                {!signIn == 1 && <Signup setSignin={setSignin} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
