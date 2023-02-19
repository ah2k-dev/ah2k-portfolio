import React from "react";
import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Nav = () => {
  const { scroll } = useLocomotiveScroll();
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
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#main")}
          >
            {"{Home}"}
          </a>
        ),
        // link: "#main",
      },
      {
        text: (
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#who")}
          >
            {"{About}"}
          </a>
        ),
        // link: "#docs",
      },
      {
        text: (
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#skills")}
          >
            {"{Skills}"}
          </a>
        ),
        // link: "#custom-bar",
      },
      {
        text: (
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#projects")}
          >
            {"{Projects}"}
          </a>
        ),
        // link: "#contact",
      },
      {
        text: (
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#personal-projects")}
          >
            {"{Personal Projects}"}
          </a>
        ),
      },
      {
        text: (
          <a
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#contact")}
          >
            {"{Contact}"}
          </a>
        ),
      },
    ],
    logo: {
      text: <span>WebFolio</span>,
    },
    style: {
      barStyles: {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: 1000,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.8)",
        backDropFilter: "blur(20px)",
        // display: "flex",
        // justifyContent: "center",
      },
      sidebarStyles: {
        background: "#1a1a1a",
        buttonColor: "white",
      },
      linlStyles: {
        color: "#efefef",
      },
    },
  };
  return (
    <div>
      <Navbar {...props} />
    </div>
  );
};

export default Nav;
