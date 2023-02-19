import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="skills lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]" style={{
      // backgroundColor: "#1a1a1a",
      height: "100%",
    }}
    id="skills"
    >
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        Expertise & Skills
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        As a skilled creator and problem-solver, I harness the power of following tools and technologies to craft exceptional products that reflect my passion and expertise.<br/> Some of the technologies are as follow:
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-8 gap-y-[10px] md:gap-y-[20px]">
        {skills.map((skill) => (
          <a
            key={skill.title}
            // href={skill.link}
            // target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <p className="text-center">{skill.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
