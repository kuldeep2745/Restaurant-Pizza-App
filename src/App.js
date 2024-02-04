import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import PizzaForm from "./components/PizzaForm";
import PizzaMain from "./components/PizzaMain";
import PizzaStatus from "./components/PizzaStatus";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Pizza Restaurant</h1>
        <div className="">
          <PizzaForm />
        </div>
        <div className="container" style={{ marginTop: "15px" }}>
          <div className="">
            <PizzaStatus />
          </div>
          <div className="">
            <PizzaMain />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
