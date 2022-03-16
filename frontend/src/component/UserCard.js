import React from 'react'
import {Card,CardBody} from 'reactstrap';
function UserCard({user}) {
    return (
        <Card className="text-center mt-3 mb-4 rounded-pill border border-4 border shadow ">
            <CardBody>
                <div className="text-danger fw-bold">{user.name}</div>
                <div className="text-danger fst-italic">{user.email}</div>
                <div className="text-danger fst-italic">{user.phone}</div>
                <div className="text-danger fst-italic">{user.address}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;
