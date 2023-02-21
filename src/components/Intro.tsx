import { FC, Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";
import Typewriter from "typewriter-effect";
const Intro: FC = () => {
  return (
    <div className="intro relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <svg
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 750 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {characters.map((character, index) => (
          <Fragment key={character}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1.8 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            ></m.path>
            <m.path
              initial={{ fill: "#ffffff00" }}
              animate={{ fill: "#ffffff" }}
              transition={{ delay: 0.7 + index / 10, duration: 10 }}
              fill="none"
              d={character}
            ></m.path>
          </Fragment>
        ))}
      </svg>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
        className="text-3xl text-center z-[1] overflow-hidden"
      >
        <span
          style={{
            display: "flex",
          }}
        >
          Aloha! I'm a{" "}
          <span
            style={{
              marginLeft: "10px",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Web App Developer",
                  "MERN Stack Developer",
                  "Pern Stack Developer",
                  "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                // delay: 100,
              }}
            />
          </span>
        </span>
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
