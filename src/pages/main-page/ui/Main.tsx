import { useTranslation } from "react-i18next";

const Main = () => {
  const {t} = useTranslation('about');

  return <div>{t('main page')}</div>
}

export default Main;