import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element />
            <Route path="/create-employee" element />
            <Route path="/employee-list" element />
            <Route path="*" element />
        </Routes>
        </>
    );
};

export default Router;