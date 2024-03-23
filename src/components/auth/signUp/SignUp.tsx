import React, { useRef } from "react";
import { auth } from "../../../fireBase/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Netflix_Background, Netflix_Logo } from "../../../Utility/Utility";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        navigate("/auth");
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  return (
    <div
      className={"relative h-full bg-no-repeat bg-cover bg-center"}
      style={{ backgroundImage: `url('${Netflix_Background}')` }}
    >
      <div className="loginScreenBG">
        <img
          className="align-middle fixed left-0 h-12 sm:h-16 pl-4 pt-5 object-contain"
          src={Netflix_Logo}
          alt="Netflix-Logo"
          srcSet=""
        />
        <button
          onClick={() => {}}
          className="align-middle fixed right-5 top-5 pt-1 pr-3 pl-3 pb-1 sm:pr-6 sm:pl-6 sm:pt-3 sm:pb-3 text-white bg-[#e50914] border-none cursor-pointer font-semibold"
        >
          Sign In
        </button>
        <div className="w-full h-screen z-10 bg-black/40" />
      </div>

      <div
        className={`loginScreenBody w-full absolute top-20
        } left-0 right-0 sm:top-1/3 ml-auto mr-auto text-center z-20 text-white p-5`}
      >
        <div className="SignUpInScreen sm:w-96 max-w-96 sm:p-14 p-10 ml-auto mr-auto bg-black/85">
          <form className="grid flex-col">
            <h1 className="text-left mb-6 text-3xl tracking-wider">Sign Up</h1>
            <input
              ref={emailRef}
              className="outline-0 h-10 mb-4 rounded-md border-none pt-2 pb-2 pr-4 pl-4 font-semibold text-black"
              type="email"
              placeholder="Email Address"
            />
            <input
              ref={passwordRef}
              className="text-black outline-0 h-10 mb-4 rounded-md border-none pt-2 pb-2 pr-4 pl-4 font-semibold"
              type="password"
              placeholder="Password"
            />
            <button
              className="pt-2 pb-2 text-2xl rounded-md bg-[#e50914] cursor-pointer border-none mt-5 font-bold"
              type="submit"
              onClick={register}
            >
              Sign Up
            </button>

            <h4 className="text-left mt-7 ">
              <span className="text-gray-400 ">New to Netflix?</span>
              <span
                className="hover:cursor-pointer hover:underline"
                onClick={register}
              >
                Sign In now.
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
