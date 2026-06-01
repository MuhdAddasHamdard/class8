import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const Course = (props) => {
  return (
    <div className="container flex">
      <Container className="">
        <Card className="bg-amber-200 rounded mb-1 w-[12rem] p-3">
          <Card.Body>
            <div>
              <h1>Course Name: {props.CourseName}</h1>
              <h1>Course Duration: {props.CourseDuration} </h1>
              <h1>Course Teacher: {props.CourseTeacher} </h1>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Course;
