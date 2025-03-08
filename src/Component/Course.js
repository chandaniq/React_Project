import React from "react";
import { 
    Card, 
    CardBody, 
    CardSubtitle, 
    CardText, 
    Button, 
    Container 
} from 'reactstrap';

const Course = ({course}) => {
    return(
        <Card className="text-center">  
            <CardBody>
                <CardSubtitle>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" className="mr-3">Delete</Button> {/* Add margin-right */}
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;

