import { render } from "@testing-library/react";
import {Route} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
    return (
        <main>
            <switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/people/:id" render={ (renderProps) => (
                    <Show {...renderProps} /> 
                )} />
            </switch>
        </main>
    )
};

export default Main;