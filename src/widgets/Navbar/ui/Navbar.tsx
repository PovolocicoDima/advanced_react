import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>About page</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main page</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

