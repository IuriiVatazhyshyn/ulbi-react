import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from './helpers/classNames';

import { AboutPageAsync } from './pages/about-page/About.async';
import { MainPageAsync } from './pages/main-page/Main.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';



const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}> 
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>} />
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;