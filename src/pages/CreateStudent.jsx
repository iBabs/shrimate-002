import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [matric_number, setMatric] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // the context usage

 




  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/students", {
        name,
        age,
        matric_number,
        department,
      });
      

      if (response.status === 201) {
        console.log("Student registered successfully");
        console.log(response.status);
        history("/");
      }
      setName("");
      setAge("");
      setMatric("");
      setDepartment("");
      setError(null);
      setLoading(false);
    } catch (err) {
      setError("Can't register student. Please make sure all fields are filled or try again later.");
      setLoading(false);
      console.log(err);

    }
  };

  return (
    <main className="min-h-screen text-emerald-700">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>

      <form
        className="shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-3 items-center place-items-center">
          <label htmlFor="name" className="col-span-1 font-bold text-xl">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 items-center place-items-center">
          <label htmlFor="name" className="col-span-1 font-bold text-xl">
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 items-center place-items-center">
          <label htmlFor="name" className="col-span-1 font-bold text-xl">
            Matric No.:
          </label>
          <input
            type="number"
            name="matric"
            id="matric"
            className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"
            onChange={(e) => setMatric(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 items-center place-items-center">
          <label htmlFor="name" className="col-span-1 font-bold text-xl">
            Department:
          </label>
          <input
            type="text"
            name="department"
            id="department"
            className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border border-emerald-600 py-2 text-2xl font-bold rounded my-5"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && (
          <p className="text-red-500 text-center p-3 border border-red-500 bg-red-300">
            {error}
          </p>
        )}
      </form>

    </main>
  );
};

export default CreateStudent;
 