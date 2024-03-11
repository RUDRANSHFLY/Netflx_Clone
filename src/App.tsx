import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LogIn from "./components/auth/logIn/LogIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./fireBase/FireBase";
import { logIn, logOut, selectUser } from "./stateManagement/userReducer";
import Profile from "./components/profile/Profile";

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
      <div className="app">
        {!user ? (
          <LogIn />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
