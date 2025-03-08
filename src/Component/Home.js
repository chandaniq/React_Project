import React from 'react'; 
import { useEffect } from "react";
 // Add this line
import { Button, Container } from 'reactstrap';
const Home = () => {
    useEffect(()=>{
            document.title = "Home || Learn Code with Chandani";
        },[]);
    return <div>
    <Container className='text-center'>
        <h1 >Learn with Chandani</h1>
        <p>This developed by chandani</p>
        <Button color='primary'>Start Using</Button>
     </Container>
        
     
    </div>;
}

export default Home;