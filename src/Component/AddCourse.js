import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Learn Code with Chandani";
  }, []);

  const [course, setCourses] = useState({});

  // Handle Form
  const handleForm = (e) => {
    e.preventDefault(); // Corrected the typo here
    postDataToServer(course);
    console.log(course);
  };

  //Creating function to Post data to server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
      },
      (error)=>{
        console.log(error);
        console.log("error");
      }
    )
  };
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourses({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourses({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourses({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="d-flex justify-content-center gap-3">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning" className="ml-3" >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
