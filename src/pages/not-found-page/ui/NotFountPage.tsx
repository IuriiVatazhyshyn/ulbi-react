import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFountPageProps {
  className?: string;
}

function NotFountPage({ className }: NotFountPageProps) {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.NotFountPage, {}, [className])}
    >
      {t('not found page')}
    </div>
  );
}

export default NotFountPage;
