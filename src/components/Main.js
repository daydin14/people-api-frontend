import { render } from "@testing-library/react";
import {Route} from "react-router-dom";
import index from "../pages/Index";


const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/people/:id" render={ (renderProps) => (
                    <Show {...renderProps} /> 
                )} />
            </Switch>
        </main>
    )
};

export default Main;