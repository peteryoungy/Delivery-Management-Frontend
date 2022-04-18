import { useLoadScript } from "@react-google-maps/api";
import TopBar from "./TopBar";
import { Layout } from "antd";
import Main from "./Main";
import { Route, Switch } from "react-router-dom";
import Login from "./main/Login";
import Register from "./main/Register";

const libraries = ["places", "drawing", "geometry"];
function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env["REACT_APP_GOOGLE_API_KEY"],
    libraries: libraries,
  });

  if (!isLoaded) {
    return <div>Loading....</div>;
  }

  const renderMain = () => {
    return (
      <Layout>
        <TopBar />
        <Main />
      </Layout>
    );
  };

  const renderLogin = () => {
      return (
          <Login/>
      )
  }

  const renderRegister = () => {
      return (
          <Register/>
      )
  }
  
  return (
    <Switch>
      <Route path="/login" exact render={renderLogin} />
      <Route path="/register" exact render={renderRegister} />
      <Route path="/" render={renderMain} />
    </Switch>

    // <CreateOrder/>
  );
}

export default App;
