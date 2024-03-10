import { useState } from "react";
import { Netflix_Background, Netflix_Logo } from "../../../Utility/Utility.ts";
import SignIn from "../signin/SignIn.tsx";

const LogIn = () => {
  const [sign, setSign] = useState(false);

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
          onClick={() => {
            setSign(!sign);
          }}
          className="align-middle fixed right-5 top-5 pt-1 pr-3 pl-3 pb-1 sm:pr-6 sm:pl-6 sm:pt-3 sm:pb-3 text-white bg-[#e50914] border-none cursor-pointer font-semibold"
        >
          Sign In
        </button>
        <div className="w-full h-screen z-10 bg-black/40" />
      </div>

      <div className="loginScreenBody w-full absolute top-28 left-0 right-0 sm:top-1/3 ml-auto mr-auto text-center z-20 text-white p-5">
        {sign ? (
          <SignIn />
        ) : (
          <>
            <h1 className="text-3xl sm:text-6xl pb-5">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-2xl sm:text-4xl font-normal mb-5">
              Watch anywhere. Cancel at any time
            </h2>
            <h3 className="sm:text-2xl mb-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreenInput">
              <form>
                <input
                  className="text-black align-middle inline-block p-3 outline-0 w-1/3 h-10 border-none"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="align-middle inline-block p-2 pr-5 pl-5 h-10 bg-[#e50914]">
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;
