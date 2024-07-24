import { useEffect, useState } from "react";
import "../styles/Parallax.css";

const Parallax = ({ image, children }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="parallax-container ">
      <img
        src={image}
        className="parallax-background"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        alt="Parallax Background"
      />
      <div className="content ">{children}</div>
    </div>
  );
};

export default Parallax;
