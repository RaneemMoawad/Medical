import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormContact = ()=>{
    const [name, setname] = useState("");
    const [show, setshow] = useState(true);
    const [email, setemail] =useState("");
    const [number, setnumber] = useState("");


    const changename =(event)=>{
        setname(event.target.value)
    }
    const changeemail =(event)=>{
        setemail(event.target.value)
    }
    const changenumber = (event) => {
        setnumber (event.target.value)
    }


    const FormHandler = (event) => {
        event.preventDefault();
        if(name.length==""){
            setshow (false);
            // alert('not empty');
            return;
        }
    
        console.log(name); // Corrected 'con' to 'console'
        setshow(true);
    }
    
    
    return(
        <Form onSubmit={FormHandler}>
            <Form.Group  >
                <Form.Control type="text" placeholder="Your Name" className="inputs" onChange={changename} />
                 {!show && <p>not empty</p>} 
            </Form.Group>

            <Form.Group  >
                <Form.Control type="email" placeholder="Your email.." className="inputs" onChange={changeemail}/>
                {!show && <p>not empty</p>}
            </Form.Group>

            <Form.Group  >
                <Form.Control type="tel" placeholder="Phone Number" className="inputs" onChange={changenumber} />
                {!show && <p>not empty</p>}
            </Form.Group>
            <Form.Select aria-label="Default select example" className="mb form-selection">
                <option>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Group className="mb" >
                <Form.Control as="textarea" rows={3} placeholder="Type Msg"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}
export default FormContact;