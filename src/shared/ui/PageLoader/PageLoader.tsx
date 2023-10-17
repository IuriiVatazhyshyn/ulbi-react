import { classNames } from 'shared/lib/classNames';
import './PageLoader.scss';
import Loader from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({
  className,
}: PageLoaderProps) => (
  <div className={classNames('page__loader', {}, [className])}>
    <Loader />
  </div>
);

export default PageLoader;
