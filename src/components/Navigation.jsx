import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
const Navigation = () => {
const {dispatch} = useContext(AppContext)

const logout = ()=>{
  const leave = confirm("Are you sure you want to log out?")

  if(leave){
    dispatch({type:"LOGOUT"})
    localStorage.removeItem("user")
  }
}

  return (
    <header className="flex justify-between px-10 py-7 items-center shadow-md sticky top-0 backdrop-blur-md">
      <div className="flex space-x-3 items-center">
        <img src="/assets/logo.svg" alt="logo" width={75}/>
        <h2 className="text-3xl font-calli font-bold">
          Shool<span className="text-sky-700">Up</span>
        </h2>
      </div>
      <nav >
        <ul className="flex space-x-5 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Create Student</NavLink>
          </li>
          <li>
            <button 
            className="bg-sky-700 text-white px-3 py-1 rounded-lg"
            onClick={logout}
            >
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
