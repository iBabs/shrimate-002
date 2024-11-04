import "./App.css";
import Navigation from "./components/Navigation";
import DashBoard from "./pages/DashBoard";
import CreateStudent from "./pages/CreateStudent";
import { Route, Routes } from "react-router-dom";
import StudentDetail from "./pages/StudentDetail";
import EditStudent from "./pages/EditStudent";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  const {
    state: { user },
  } = useContext(AppContext);

  if (!user) {
    return (
      <>
        <Routes>
          <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/signup" element={<CreateStudent />} />
        <Route path="/student/:_id" element={<StudentDetail />} />
        <Route path="/edit/:_id" element={<EditStudent />} />
      </Routes>
    </>
  );
}

export default App;
