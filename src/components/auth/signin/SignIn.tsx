import React, { useRef } from "react";
import { auth } from "../../../fireBase/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    return;
  };

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error: Error) => {
        alert(error.message);
      });

    return;
  };

  return (
    <div className="SignUpInScreen w-96 max-w-96 p-14  ml-auto mr-auto bg-black/85">
      <form className="grid flex-col">
        <h1 className="text-left mb-6 text-3xl tracking-wider">Sign In</h1>
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
          onClick={signIn}
        >
          Sign In
        </button>

        <h4 className="text-left mt-7 ">
          <span className="text-gray-400 ">New to Netflix?</span>
          <span className="hover:cursor-pointer" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
