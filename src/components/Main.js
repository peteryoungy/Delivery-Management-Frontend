import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateOrder from "./main/create_order/CreateOrder";
import Home from "./main/Home";
import OrderList from "./main/OrderList";
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
