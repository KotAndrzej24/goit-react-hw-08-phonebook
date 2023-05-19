import { Outlet } from 'react-router-dom';
import { AppBarMain } from './AppBarMain/AppBarMain';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarMain />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
