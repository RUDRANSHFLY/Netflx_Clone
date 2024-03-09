import "./App.css";
import LogIn from "./components/auth/logIn/LogIn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <>
      <div className="app">
        {!user ? (
          <LogIn />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
