import {Route} from "react-router-dom";
import index from "../pages/Index";


const Main = (props) => {
    return (
        <main>
            <Route exact path="/">
                <Index />
            </Route>
            <Route path="/people/:id" render={ (renderProps) => <Show/> } />
        </main>
    )
};

export default Main;