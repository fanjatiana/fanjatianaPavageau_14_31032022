import React from 'react';
import Form from '../components/Form';

import '../styles/CreateEmployee.css'

const CreateEmployee = () => {
    return (
        <main className='create-employee-container'>
            <h2>Create Employee</h2>
            <Form />
        </main>
    );
};

export default CreateEmployee;