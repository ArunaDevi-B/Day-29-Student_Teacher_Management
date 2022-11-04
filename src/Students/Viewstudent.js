import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Viewstudent() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [student, setStudent] = useState({})

  useEffect(() => {
    fetch(`https://62cbb33e3e924a01286a67a0.mockapi.io//student/${id}`, { method: "GET", })
      .then(data => data.json())
      .then((stud) => setStudent(stud))
  }, [id])

  return (
    <div className="editstudent">
      <div className="container py-4">

        <h1 className="display-4 text-white">Student Id : {id}</h1>
        <hr />
        <ul className="list-group w-100 py-4">
          <li className="list-group-item bg-light py-3">Student Name : {student.studentname}</li>
          <li className="list-group-item bg-light py-3">Teacher Name : {student.teachername}</li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary mt-3" >
          Back
        </button>
      </div>
    </div>

  )
}