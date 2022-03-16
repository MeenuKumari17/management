import React, { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

import UserCard from "../component/UserCard";

const Search = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/users/${phone}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if(response.status===200){
      toast("User Found", {type:"success"});
      setUser(data);
    }
    else{
      toast(`${data}`, {type:"error"});
    }
  };
  console.log(phone);
  return (
      <Container>
      <ToastContainer/>
        <div
        >
          <InputGroup className="m-2 mb-5">
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone number..."
            />
            <Button onClick={fetchUser} color="primary">
              Fetch User
            </Button>
          </InputGroup>
        </div>
        <Row
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', width: '100%'}}>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
            
          >
            {user ? <UserCard user={user} /> : null}
          </Col>
        </Row>
      </Container>
  );
};

export default Search;
