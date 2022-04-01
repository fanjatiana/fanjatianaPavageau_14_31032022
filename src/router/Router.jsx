import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-employee" element />
            <Route path="/employee-list" element />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    );
};

export default Router;