import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));

const Menu = React.lazy(() => import("./components/Menu"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={loading()}>
            <Menu />
            <div className="container mx-auto mt-3">
              <Switch>
                <Route
                  exact
                  path="/product/:id"
                  name="Product Page"
                  render={(props) => <Product {...props} />}
                />
                <Route
                  path="/"
                  name="Home"
                  render={(props) => <Home {...props} />}
                />
              </Switch>
            </div>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
