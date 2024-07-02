import App from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { render } from "react-dom";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App /> 
        </ThemeProvider>
    </BrowserRouter>
   , document.getElementById('root')
)