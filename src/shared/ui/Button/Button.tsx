import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
  className, children, theme, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    {...props}
    className={classNames(styles.Button, {}, [className, styles[theme]])}
  >
    {children}
  </button>
);

export default Button;
