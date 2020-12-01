import React, { useState } from 'react';
import employees from '../../employees.json';
import Nav from '../nav/Nav';

function EmployeeTable() {


    const [employeeState, setEmployeeState] = useState(employees);
    const [employeeSortState, setEmployeeSortState] = useState(employees);
    const [searchState, setSearchState] = useState("");
   


    // sorting function

    const compareBy = (name) => {
        return function (a, b) {
            if (a[name] < b[name]) return -1;
            if (a[name] > b[name]) return 1;
            return 0;
        };
    }

    const sortBy = (name) => {
        let arrayCopy = [...employeeSortState];
        arrayCopy.sort(compareBy(name));
        setEmployeeSortState({ name: arrayCopy });
    }




    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;


        // Updating the input's state
        setSearchState(value);


    };



    return (

        <div className="App">

            <Nav searchState={searchState} onChange={handleInputChange} />

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" onClick={sortBy('name')}>Name</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeState.filter(employee => employee.name.toLowerCase().includes(searchState.toLowerCase())).map(employee => (<tr>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.name}</td>
                        <td>{employee.occupation}</td>
                        <td>{employee.location}</td>
                    </tr>))}

                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;