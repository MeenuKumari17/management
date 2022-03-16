import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

const UserForm = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       
    const { name, email, phone, address } = formValues;
    if(phone.length!=10){
        toast("Please Enter valid phone number", {type:"error"});
        return;
    }
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
      }),
    });
    const data = await response.json();
    console.log(response.status);

    if (response.status === 200) {
      toast('Registration Success', {type:"success"});
      console.log(data);
    } else {
      toast(`${data}`, {type:"error"});
    }
  };

  return (
    <div>
    <ToastContainer/>
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
          >
            <Form method="POST">
              <FormGroup>
                <Label for="name" className="fw-bold">
                  Name :
                </Label>
                <Input
                  onChange={handleInputs}
                  value={formValues.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className="fw-bold">
                  Email :
                </Label>
                <Input
                  onChange={handleInputs}
                  value={formValues.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone" className="fw-bold">
                  Phone No. :
                </Label>
                <Input
                  onChange={handleInputs}
                  value={formValues.phone}
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="address" className="fw-bold">
                  Address
                </Label>
                <Input
                  onChange={handleInputs}
                  value={formValues.address}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                />
              </FormGroup>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-success"
              >
                Add
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserForm;
