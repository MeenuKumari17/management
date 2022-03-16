import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";

const ViewData = () => {
  const [users, setUsers] = useState([{}]);

  const fetchAllUsers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setUsers(result);
        console.log("users: ", users);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchAllUsers();
  }, [users]);
  return (
    <Container>
        <div className="app-container">
      <Table className="table table-bordered mt-2">
        <thead className="table-success">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody className="table-secondary">
          {users.map((record) => {
            return (
              <tr>
                <td>{record._id}</td>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    </Container>
  );
};

export default ViewData;
