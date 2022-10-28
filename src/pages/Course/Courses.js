import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesGrid from "../Course/CoursesGrid";


const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-12 ">

      <div className="col-span-12 md:col-span-3 px-4 mt-5 text-start">
        {data.map((option) => (
          <p
            key={option.id}
            className="mb-4 font-semibold text-lg text-gray-100 mt-5"
          >
            <Link to={`/course/${option.id}`}>
              {" "}
              {" "}
              {option.name}
            </Link>
          </p>
        ))}
      </div>

      <div className="col-span-12 md:col-span-9 px-5 grid grid-cols-1 md:grid-cols-3 gap-5 my-5 ">
        {data.map((option) => (
          <CoursesGrid key={option.id} data={option}></CoursesGrid>
        ))}
      </div>
      
    </div>
  );
};

export default Courses;
