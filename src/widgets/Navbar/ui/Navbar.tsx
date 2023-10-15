import { classNames } from "shared/lib/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}> 
      <div className={styles.links}>
        <AppLink to={'/'} className={styles.mainLink} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>        
      </div>
    </div>
  )
}

export default Navbar;