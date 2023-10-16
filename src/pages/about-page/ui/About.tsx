import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation('about');

  return <div>{t('about page')}</div>;
}

export default About;
