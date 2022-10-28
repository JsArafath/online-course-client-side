import React from "react";
import { Link } from "react-router-dom";

const CoursesGrid = ({ data }) => {
  const { id, img, name, shortdescription, price } =
    data;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <div className="card rounded-lg card-compact h-full">
          <figure className="h-48 w-full">
            <img className="h-full w-full md:" src={img} alt="" />
          </figure>
          <div className="card-body  bg-gray-900 text-start">
            <div className="h-32">
              <h2 className="card-title mt-1 text-teal-400">{name}</h2>
              <span className="text-gray-200">{shortdescription}</span>
            </div>
            <div className="flex text-lg items-center text-white">
              <span>{price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesGrid;
