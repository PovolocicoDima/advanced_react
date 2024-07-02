import './styles/index.scss';
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'} >About page</Link>
            <Link to={'/'}>Main page</Link>
            <button onClick={toggleTheme}>Change theme</button>
            <AppRouter />
        </div>
    );
};

export default App;