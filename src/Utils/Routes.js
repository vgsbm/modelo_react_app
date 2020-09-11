import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* ---------- PAGINAS ---------- */
import Inicio from '../Pages/Inicio/Inicio'
/* ---------- PAGINAS ---------- */

export default function Rotas(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio}/> 
            </Switch>
        </Router>
    )
}