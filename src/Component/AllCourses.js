import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from 'axios';


const AllCourses = () => {
    // Define state to hold the courses fetched from the server
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Set the document title when component mounts
        document.title = "All Courses || Learn Code with Chandani";
    }, []);

    // Function to call the server and fetch all courses
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`)
            .then((response) => {
                // Set the courses data fetched from the server
                console.log(response.data);
                setCourses(response.data);
                
            })
            .catch((error) => {
                console.log(error);
                
            });
    };

    // Fetch courses on component mount
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    return (
        <div>
           
            
            <h1>All Courses</h1>
            <p>List of Courses as follows</p>
            
            {/* Display courses dynamically from the fetched data */}
            {courses.length > 0 ? (
                courses.map((item, index) => (
                    <Course key={item.id} course={item} />
                ))
            ) : (
                <p>No Courses Available</p>
            )}
        </div>
    );
};

export default AllCourses;
