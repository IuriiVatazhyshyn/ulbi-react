import { AboutPageAsync } from 'pages/about-page';
import { MainPageAsync } from 'pages/main-page';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
};

export default AppRouter;