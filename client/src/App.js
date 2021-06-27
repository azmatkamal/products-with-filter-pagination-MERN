import React, { Component, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={loading()}>
            <div className="container mx-auto mt-3"></div>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
