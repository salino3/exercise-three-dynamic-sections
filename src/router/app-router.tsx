import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/home/home.component';
import { SwitchRouter } from './interface';

export const AppRouter: React.FC = () => {
    
  return (
    <Routes>
        <Route path={SwitchRouter.home} element={<Home />} />
    </Routes>
  )
}
