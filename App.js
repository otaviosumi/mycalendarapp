import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Cadernos from "./pages/Cadernos";
import CentrodeCusto from "./pages/CentrodeCusto";
import Clientes from "./pages/Clientes";
import ContasContaveis from "./pages/ContasContabeis";
import Dashboard from "./pages/Dashboard";
import Prestadores from "./pages/Prestadores";
import Procedimentos from "./pages/Procedimentos";

import "./App.css";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/clientes" component={Clientes} />
            <Route path="/prestadores" component={Prestadores} />
            <Route path="/centrosdecusto" component={CentrodeCusto} />
            <Route path="/contascontabeis" component={ContasContaveis} />
            <Route path="/procedimentos" component={Procedimentos} />
            <Route path="/cadernos" component={Cadernos} />
            <Route component={() => <div> Page 404! </div>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
