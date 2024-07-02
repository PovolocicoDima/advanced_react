import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss';
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'} >About page</Link>
            <Link to={'/'}>Main page</Link>
            <button onClick={toggleTheme}>Change theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;