import React, { useState } from 'react';
import employees from '../../employees.json';
import Nav from '../nav/Nav';

function EmployeeTable() {


    const [employeeState, setEmployeeState] = useState(employees);
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
        let arrayCopy = [...employeeState];
        arrayCopy.sort(compareBy(name));
        setEmployeeState(arrayCopy);
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
                        <th scope="col">#
                        <i onClick={() => sortBy('id')}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg>
                            </i>
                        </th>
                        <th scope="col">Name
                        <i onClick={() => sortBy('name')}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg>
                            </i>
                        </th>
                        <th scope="col">Occupation
                        <i onClick={() => sortBy('occupation')}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg>
                            </i>
                        </th>
                        <th scope="col">Location
                        <i onClick={() => sortBy('location')}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg>
                            </i>
                        </th>
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