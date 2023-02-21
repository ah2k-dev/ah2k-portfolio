import { FC } from "react";
// import Canvas from "./Canvas";
import { BsDownload } from "react-icons/bs";
const Who: FC = () => {
  return (
    <div
      id="who"
      className="who flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
      style={{
        backgroundColor: "#1a1a1a",
        // height: "100%",
        minHeight: "100vh",
        maxHeight: "max-content",
        justifyContent: "space-between",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      {/* <Canvas /> */}
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px]"
        // style={{
        //   // marginLeft: "-100px",
        //   width: "325px",
        //   height: "225px",
        // }}
        src="/avatar.png"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          I am Ahmed Hassan, a software engineer, MERN stack developer with a BS
          degree, and I have a passion for creating immersive digital
          experiences. Over the past two years, I have gained extensive industry
          experience and have become proficient in a wide range of technologies
          such as React, Node, MongoDB, SQL, PostgreSQL, ExpressJS, AntD, MUI,
          Bootstrap, and AWS. As an expert in my field, I am dedicated to
          building innovative solutions that are not limited to the ordinary,
          using my skills to develop impactful software. From web applications
          to full-stack development, I apply my creativity and attention to
          detail to every project, ensuring that the end product is a work of
          art that exceeds all expectations.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <a
            // href={project.demo}
            download="resume.pdf"
            href="/resume.pdf"
            style={{
              width: "fit-content",
              justifySelf: "flex-end",
              cursor: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
          >
            <BsDownload size={25} />
            <span> Resume </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Who;
