import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  );
}

export default LangSwitcher;
