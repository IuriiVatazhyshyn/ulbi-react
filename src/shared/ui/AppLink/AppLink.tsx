import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import styles from './applink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({ className, children, theme = AppLinkTheme.PRIMARY, to, ...props }) => {
  return (
    <Link 
      {...props}
      to={to} 
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
    > 
      {children}
    </Link>
  )
}

export default AppLink;