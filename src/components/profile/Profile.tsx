import { useSelector } from "react-redux";
import { Netflix_Avatar } from "../../Utility/Utility";
import Navbar from "../Navbar";
import { selectUser } from "../../stateManagement/userReducer";
import { auth } from "../../fireBase/FireBase";
import PlanScreen from "./PlanScreen";

type User = {
  uid: string;
  email: string;
};

const Profile = () => {
  const user: User = useSelector(selectUser);

  return (
    <div className="h-screen text-white">
      <Navbar />
      <div className="profileScreenBody w-full flex flex-col  sm:w-1/2 ml-auto mr-auto pt-10 sm:max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-normal border-b-stone-500 mb-5 mt-5 hidden">
          Edit Profile
        </h1>
        <div className="profileScreenInfo sm:flex">
          <img
            className="h-14 mb-3 ml-auto mr-auto sm:h-20 mt-10"
            src={Netflix_Avatar}
            alt=""
          />
          <div className="profileScreenDetails ml-7 sm:flex-1 pt-5">
            <h1 className="bg-gray-500 p-4 text-xl sm:text-2xl pl-5">
              {user.email}
            </h1>
            <div className="profileScreenPlans mt-5">
              <h3 className="text-xl">Plans</h3>

              <PlanScreen />

              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profileScreenSignOut text-xl sm:text-2xl pt-3 pb-3 pr-5 pl-5 w-full mt-5 bg-[#e50914] font-semibold cursor-pointer border-none"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
