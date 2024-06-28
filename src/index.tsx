import { render } from "react-dom";
import { Counter } from "./components/Counter";


render(
    <div>Hello World!
        <Counter />
    </div>, document.getElementById('root')
)