import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Application from '@components/Application/Application';

export const BaseRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Application/>}/>
    </Routes>
  );
};
