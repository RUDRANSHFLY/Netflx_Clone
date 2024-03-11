import { useEffect, useState } from "react";
import { Netflix_Avatar, Netflix_Logo } from "../Utility/Utility";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div
      className={`${
        show ? "bg-black" : "bg-transparent"
      } z-50 w-screen fixed pt-4 pb-4 px-12 flex flex-row justify-between items-center`}
    >
      <img
        onClick={() => navigate("/")}
        className="h-10 hover:cursor-pointer"
        src={Netflix_Logo}
        alt=""
        srcSet=""
      />
      <img
        className="h-10 cursor-pointer"
        src={Netflix_Avatar}
        alt=""
        srcSet=""
        onClick={() => navigate("/profile")}
      />
    </div>
  );
};

export default Navbar;
