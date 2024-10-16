import React from 'react';
import { Table } from 'react-bootstrap';

function Employee() {
    let emps=[
        {
            "id":1,
            "name":"Gayatri",
            "salary":50000,
            "job":"CEO"
        },
        {
            "id":2,
            "name":"Poonam",
            "salary":70000,
            "job":"Director"
        },
        {
            "id":3,
            "name":"Valmik",
            "salary":40000,
            "job":"Manager"
        },
        {
            "id":4,
            "name":"Deepak",
            "salary":30000,
            "job":"Clerk"
        }
    ]
    return (
        <div>
            <Table striped variant='dark' bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map((emp)=>
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.job}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Employee;