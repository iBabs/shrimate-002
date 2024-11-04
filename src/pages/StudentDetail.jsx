import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


function StudentDetail() {
  const { _id } = useParams();
  const history = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/students/${_id}`
        );
        setStudent(res.data.student);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudent();
  }, [student, _id]);

  const deleteStudent = async () => {
    const sure = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (sure) {
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/students/${_id}`
        );
        if (res.status === 200) {
          console.log("Student deleted successfully");
          history("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const firstLetter = student?.name.split("")[0].toUpperCase(); // ?.

  return (
    <div className="flex flex-col items-center justify-center">
      {student && (
        <>
          <div className="bg-emerald-600 text-white rounded-full p-5 h-36 w-36 grid place-content-center m-10">
            <h2 className="text-7xl font-extrabold">{firstLetter}</h2>
          </div>

          <div>
            <h3 className="font-bold text-xl text-emerald-700 text-center">
              Student Detail
            </h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-emerald-500 mr-2">
                  Name:
                </span>{" "}
                {student.name}
              </p>
              <p>
                <span className="font-semibold text-emerald-500 mr-2">
                  Age:
                </span>{" "}
                {student.age} years old
              </p>
              <p>
                {" "}
                <span className="font-semibold text-emerald-500 mr-2">
                  Matric Number:
                </span>{" "}
                {student.matric_number}
              </p>
              <p>
                <span className="font-semibold text-emerald-500 mr-2">
                  Department:
                </span>{" "}
                {student.department}
              </p>
            </div>
          </div>

          <Link to= {`/edit/${_id}`}
          className="text-2xl "
          
          ><CiEdit/></Link>
          <button onClick={deleteStudent}
          className="bg-red-500 text-white px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-red-300"
          >
            <MdDelete className="text-white text-2xl" />
          </button>
        </>
      )}
    </div>
  );
}

export default StudentDetail;
