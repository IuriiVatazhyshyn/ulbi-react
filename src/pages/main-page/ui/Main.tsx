import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();

  return <div>{t('main page')}</div>;
}

export default Main;
