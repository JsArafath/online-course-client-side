import React from "react";
import { Link } from "react-router-dom";

const CoursesGrid = ({ data }) => {
  const { id, img, name, descp, price } =
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
              {/* <div className="flex items-center">
                <img className="mr-2" src={providerImage} alt="" />
                
              </div> */}
              <h2 className="card-title mt-1 text-teal-400">{name}</h2>
              <span className="text-gray-200">{descp}</span>
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