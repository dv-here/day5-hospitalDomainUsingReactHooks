import  {React,useState,useEffect } from 'react'
import {Container,Button,Form,Table} from 'react-bootstrap';
import axios from 'axios';

const Appointment = () => {
    const [doctors, setDoctors] = useState([]);
    const addDoctor = ()=>{
        setDoctors([...doctors,{id:4,fname:"Jeff",lname:"Dean",specialization:"Dietician"}])
    }
    useEffect(()=>{
        axios.get('doctors.json')
        .then((res)=>{
            setDoctors(res.data)
        })
    },[])
    return (
        <>
            <Container>
                <h1 className='text-center my-3'>Appointment</h1>
                <Form>
                <h3>Book Your Appointment</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter patient's name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control type="text" placeholder="Enter doctor's name" />
                    </Form.Group>
  
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <Container>
            <h3 className='my-3'>List of doctors</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doc=>{
                            console.log(doc);
                            return(<tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>{doc.fname}</td>
                                <td>{doc.lname}</td>
                                <td>{doc.specialization}</td>
                                </tr>)
                        })
                    }
                    </tbody>
                </Table>
                <Button variant="primary" type="submit" onClick={addDoctor}>
                        Add Doctor
                    </Button>
                
            </Container>
            </>
    )
}

export default Appointment
