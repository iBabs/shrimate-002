import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import anim from "../assets/Animation - 1728383866958.json";
import StudentList from "../components/StudentList";



const DashBoard = () => {

  const history = useNavigate();

 

  return (
    <main className="text-neutral-900 py-16  md:px-24 min-h-screen">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="space-y-5 md:w-1/2 text-center md:text-start px-4">
          <h1 className="text-3xl font-bold text-emerald-700 text-justify">
            Welcome to the SchoolUp App, Where you find All your school needs
          </h1>
          <p className="text-xl text-slate-800 text-center">
            Explore all basic need about education with our features, within and
            outside the school premises. 
          </p>

          <button
            onClick={() => history("/signup")}
            className="px-7 py-4 border border-emerald-700 text-emerald-700  mt-12 rounded-lg shadow-lg text-xl transition-all duration-200 hover:shadow-xl hover:font-bold "
          >
            Register
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie
            animationData={anim}
            loop={true}
            autoplay={true}
            style={{ height: 300, width: "100%" }}
          />
        </div>
      </div>

      <StudentList/>
      
    </main>
  );
};

export default DashBoard;
