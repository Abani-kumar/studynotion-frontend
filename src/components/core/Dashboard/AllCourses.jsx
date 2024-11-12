import React from "react";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../../services/operations/courseDetailsAPI";
import CourseSlider from "../Catalog/CourseSlider";
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  async function getallcourses() {
    try {
      const result = await getAllCourses();
      //console.log("API_DATA  ",result);
      setCourses(result);
    } catch (err) {
      console.log("Error while fetcging all course", "=>", err);
    }
  }
  useEffect(() => {
    getallcourses();
  }, []);
  console.log(courses);
  return (
    <div className=" max-h-[calc(100vh-3.5rem)] overflow-y-scroll  w-full flex flex-col mx-auto  text-white">
      <h1 className=" lg:text-3xl font-bold ">All Courses Of StudyNotion</h1>
      <div className="w-full mt-5">
       <CourseSlider Courses={courses} />
      </div>
    </div>
  );
};

export default AllCourses;
