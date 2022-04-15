import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateOrder from "./CreateOrder";
import Home from "./Home";
import OrderList from "./OrderList";
import Login from "./Login";
import Register from "./Register";
function Main(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/login" component={Login} />
      <Route path="/register" component={Register} /> */}
      <Route path="/create-order/page/1" component={CreateOrder} />
      <Route path="/order-list" component={OrderList} />
    </Switch>
  );
}

export default Main;
