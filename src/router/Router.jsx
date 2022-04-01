import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element />
            <Route path="/create-employee" element />
            <Route path="/employee-list" element />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    );
};

export default Router;