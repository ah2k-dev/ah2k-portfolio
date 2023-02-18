import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface SmallProjectsProps {
  projects: allDataType["smallProjects"];
}

const SmallProjects: FC<SmallProjectsProps> = ({ projects }) => {
  return (
    <div className="flex justify-center mx-[5vw] mt-16">
      <div className="w-full max-w-[1100px]">
        <h1 className="text-4xl text-center">Personal Projects</h1>
        <p className="mt-4 mb-10 text-gray-400 text-lg text-center">{`I'm sure you will like some of my hobby projects`}</p>

        <div
          data-scroll
          data-scroll-speed="1"
          className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]"
        >
          {projects.map((project) => (
            <a
              // href={project.link}
              // target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:bg-slate-900 p-3 transition duration-300"
              key={project.id}
            >
              {/* <img
                className="h-[40px] w-[40px] my-1 object-cover"
                src={project.icon.url}
                alt=""
              /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div>
                  <h1>{project.title}</h1>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <a
                    // href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "max-content",
                      backgroundColor: "rgb(130, 6, 155)",
                      color: "white",
                      borderRadius: "5px",
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <FaGithub size={25} />
                    <span> View Github</span>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
