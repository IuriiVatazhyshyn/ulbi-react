import { Link } from "react-router-dom";
import { classNames } from '../shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/routes';



const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}> 
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter />
    </div>
  )
}

export default App;