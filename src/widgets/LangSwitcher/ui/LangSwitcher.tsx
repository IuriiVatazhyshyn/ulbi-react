import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button 
      className={classNames(styles.LangSwitcher, {}, [className])} 
      theme={ThemeButton.CLEAR} 
      onClick={toggle}>
      {t('language')}
    </Button>
  )
}

export default LangSwitcher;

