import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import MovieCard from "./MovieCard";

function Router() {
    return(
    <BrowserRouter>
       <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/movieCard/:id" component={MovieCard}/>
       </Switch>
    </BrowserRouter>
    )
}

export default Router;