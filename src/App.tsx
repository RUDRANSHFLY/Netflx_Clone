import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LogIn from "./components/auth/logIn/LogIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./fireBase/FireBase";
import { logIn, logOut, selectUser } from "./stateManagement/userReducer";
import Profile from "./components/profile/Profile";
import SignUp from "./components/auth/signUp/SignUp";
import SignIn from "./components/auth/signin/SignIn";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          logIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logOut());
      }
    });

    return () => {
      unSubscribe;
    };
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={!user ? <LogIn /> : <Home />} />
            <Route path="/profile" element={!user ? <LogIn /> : <Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/auth" element={<LogIn />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
