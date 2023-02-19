import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { TbArrowTopTail } from "react-icons/tb";
const ScrollToTop = () => {
  const { scroll } = useLocomotiveScroll();
  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        // top: "1000px",
        right: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        zIndex: 1000,
        color: "black",
      }}
      onClick={() => {
        scroll.scrollTo("#main", {
          duration: 1000,
          offset: 0,
          easing: [0.165, 0.84, 0.44, 1],
        });
        console.log(scroll)
      }}
      className="animate-bounce"
    >
      <TbArrowTopTail size={20} />
    </button>
  );
};

export default ScrollToTop;
