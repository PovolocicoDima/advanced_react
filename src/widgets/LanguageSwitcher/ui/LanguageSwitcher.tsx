
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LanguageSwitcherProps {
  className?: string;
}


export const LanguageSwitcher = ({ className } : LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button 
      className={classNames(cls.LanguageSwitcher, {}, [className])} 
      onClick={toggle} theme={ThemeButton.CLEAR}
    >{t('change language')}</Button>
  )
};

