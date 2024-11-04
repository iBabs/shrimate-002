import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  department: "",
  matric_number: "",
  age: "",
};

const EditStudent = () => {
  const [studentDet, setStudentDet] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const { _id } = useParams();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setStudentDet({ ...studentDet, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(
        `http://localhost:5000/api/students/${_id}`,
        studentDet
      );
      if (response.status === 200) {
        console.log("Student updated");
        console.log(response.status);
        history("/");
      }

      console.log(studentDet);

      setError(null);
      setLoading(false);
    } catch (err) {
      setError(
        "Can't register student. Please make sure all fields are filled or try again later."
      );
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/students/${_id}`
        );
        console.log(res.data.student);
        setStudentDet(res.data.student);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudent();
  }, [_id]);

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
            onChange={handleChange}
            value={studentDet.name}
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
            onChange={handleChange}
            value={studentDet.age}
          />
        </div>
        <div className="grid grid-cols-3 items-center place-items-center">
          <label htmlFor="name" className="col-span-1 font-bold text-xl">
            Matric No.:
          </label>
          <input
            type="number"
            name="matric_number"
            id="matric"
            className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none"
            onChange={handleChange}
            value={studentDet.matric_number}
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
            value={studentDet.department}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="border border-emerald-600 py-2 text-2xl font-bold rounded my-5"
        >
          {loading ? "Updating..." : "Update"}
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

export default EditStudent;
