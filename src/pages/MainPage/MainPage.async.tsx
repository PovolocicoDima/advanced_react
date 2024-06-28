import { lazy } from "react";
import MainPage from "./MainPage";


export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => res(import('./MainPage')), 1000)
}))