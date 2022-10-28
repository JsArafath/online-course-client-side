import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsFilePdf } from "react-icons/bs";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { id, courseName, description, name, img, } = courseData;
  
  return (
    <div className="">
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className="w-[25%] rounded-lg shadow-2xl ms-10 " src={img} alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-teal-500 pb-5">{name}</h1>
                    <h4 className="text-2xl font-bold">{courseName}</h4>
                    <p className="py-6 p-10"><span className="text-teal-500 font-bold text-xl"> Description:</span> {description}</p>
                    <Link
                        to={`/checkout/${id}`}
                        className="inline-flex items-center justify-center w-1/2 h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-teal-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                        Get Premium Access
                    </Link>
                    <div className="py-6">
                    
                    <Pdf targetRef={ref} filename="trainig-online.pdf">
                {({ toPdf }) => (
                  <button className=" text-3xl " onClick={toPdf}>
                    <BsFilePdf></BsFilePdf>
                  </button>
                )}
              </Pdf>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    
  );
};

export default CourseDetails;
