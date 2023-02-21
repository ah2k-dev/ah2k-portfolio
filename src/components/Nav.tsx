import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect, useState } from "react";
import { m } from "framer-motion";

const Nav = () => {
  const { scroll } = useLocomotiveScroll();
  const [active, setActive] = useState("");
  useEffect(() => {
    // console.log(scroll);
    if (scroll) {
      scroll.on("scroll", (obj: any) => {
        // console.log(obj.currentElements)
        Object.keys(obj.currentElements).forEach((key) => {
          console.log(
            obj.currentElements[
              key
            ]?.el?.parentElement?.classList.value.toString()
          );
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("intro")
          ) {
            setActive("home");
          }
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("who")
          ) {
            setActive("about");
          }
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("skills")
          ) {
            setActive("skills");
          }
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("projects")
          ) {
            setActive("projects");
          }
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("personal-projects")
          ) {
            setActive("personal-projects");
          }
          if (
            obj.currentElements[key]?.el?.parentElement?.classList?.value
              ?.toString()
              ?.includes("contact")
          ) {
            setActive("contact");
          }
        });

        // if (obj.scroll.y > 500) {
        // } else {
        // }
      });
    }
  }, [scroll]);
  const handleNavClick = (link: string) => {
    scroll.scrollTo(link, {
      duration: 1000,
      offset: 0,
      easing: [0.165, 0.84, 0.44, 1],
    });
  };
  const props = {
    items: [
      {
        text: (
          <button
            className={`navBtn ${active === "home" && "styled"}`}
            onClick={() => handleNavClick("#main")}
          >
            {"Home"}
          </button>
        ),
        // link: "#main",
      },
      {
        text: (
          <button
            className={`navBtn ${active === "about" && "styled"}`}
            onClick={() => handleNavClick("#who")}
          >
            {"About"}
          </button>
        ),
        // link: "#docs",
      },
      {
        text: (
          <button
            className={`navBtn ${active === "skills" && "styled"}`}
            onClick={() => handleNavClick("#skills")}
          >
            {"Skills"}
          </button>
        ),
        // link: "#custom-bar",
      },
      {
        text: (
          <button
            className={`navBtn ${active === "projects" && "styled"}`}
            onClick={() => handleNavClick("#projects")}
          >
            {"Projects"}
          </button>
        ),
        // link: "#contact",
      },
      {
        text: (
          <button
            className={`navBtn ${active === "personal-projects" && "styled"}`}
            onClick={() => handleNavClick("#personal-projects")}
          >
            {"Personal Projects"}
          </button>
        ),
      },
      {
        text: (
          <button
            className={`navBtn ${active === "contact" && "styled"}`}
            onClick={() => handleNavClick("#contact")}
          >
            {"Contact"}
          </button>
        ),
      },
    ],
    logo: {
      text: <span className="logo">WebFolio</span>,
    },
    style: {
      barStyles: {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: 20,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.8)",
        backDropFilter: "blur(20px)",
        // display: "flex",
        // justifyContent: "center",
      },
      sidebarStyles: {
        background: "#1a1a1a",
        buttonColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1000,
        // justifyContent: "center",
      },
      linkStyles: {
        backgroundColor: "rgba(0, 0, 0, 0.9) !important",
        // width: "100%",
        // borderBottom: "1px solid #fff",
        // alignText: "center",
      },
    },
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.4 }}
    >
      <Navbar {...props} />
    </m.div>
  );
};

export default Nav;
