import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className } : NotFoundProps) => (
    <div className={classNames(cls.NotFound, {}, [className])} />
);
