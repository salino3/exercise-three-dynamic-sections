import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { ComponentPage, Home } from '@/pages';
import { SwitchRouter } from '.';

export const AppRouter: React.FC = () => {
    
  return (
    <Routes>
      <Route path={SwitchRouter.home} element={<Home />} />
      <Route path={`${SwitchRouter.componentPage}/:type/:component/:brand`} element={<ComponentPage />} />
    </Routes>
  );
}
