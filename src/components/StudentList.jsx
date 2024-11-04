import { useEffect, useState } from "react";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaExpand } from "react-icons/fa6";

const StudentList = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("user"));
  console.log(token.token);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/students/",
          {headers:{
            authorization:`Bearer ${token.token}`
          }}
        );
        console.log(res.data.students);
        setStudents(res.data.students);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, [token.token]);



  return (
    <div className="my-20">
      <table className="border table-auto w-full">
        <thead>
          <tr className=" bg-emerald-600 text-white font-bold">
            <th className="border border-emerald-500 px-4 py-2">Name</th>
            <th className="border border-emerald-500 px-4 py-2">Age</th>
            <th className="border border-emerald-500 px-4 py-2">
              Matric Number
            </th>
            <th className="border border-emerald-500 px-4 py-2">Department</th>
            <th className="border border-emerald-500 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="h-36 grid place-content-center w-full text-emerald-600 ">
              <VscLoading className="text-3xl animate-spin" />
            </div>
          ) : (
            students &&
            students.map((student, index) => (
              <tr key={index} className="table-row">
                <td className="border border-emerald-500 px-4 py-2 text-center">
                  {student.name}
                </td>
                <td className="border border-emerald-500 px-4 py-2 text-center">
                  {student.age}
                </td>
                <td className="border border-emerald-500 px-4 py-2 text-center">
                  {student.matric_number}
                </td>
                <td className="border border-emerald-500 px-4 py-2 text-center">
                  {student.department}
                </td>
                <td className="border border-emerald-500 px-4 py-2 text-center">
                  <Link
                    to={`/student/${student._id}`}
                    className="grid place-items-center"
                  >
                    <FaExpand className="text-emerald-600" />
                  </Link>
                  
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
