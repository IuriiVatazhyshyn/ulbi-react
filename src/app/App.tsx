import { classNames } from '../shared/lib/classNames';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/routes';
import { Navbar } from "widgets/Navbar";



const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}> 
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App;