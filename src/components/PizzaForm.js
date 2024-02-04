import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const PizzaForm = () => {
  const [pizzaType, setPizzaType] = useState("Veg");
  const [pizzaSize, setPizzaSize] = useState("Large");
  const [pizzaBase, setPizzaBase] = useState("Thin");
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orders.filter((item) => item.stage !== "Order Picked").length < 10) {
      dispatch(placeOrder({ pizzaType, pizzaSize, pizzaBase }));
    } else {
      alert("Not taking any more orders for now. Maximum orders reached.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <label>
        Pizza Type:
        <select
          value={pizzaType}
          onChange={(e) => setPizzaType(e.target.value)}
        >
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
      </label>
      <br />
      <label>
        Pizza Size:
        <select
          value={pizzaSize}
          onChange={(e) => setPizzaSize(e.target.value)}
        >
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </label>
      <br />
      <label>
        Pizza Base:
        <select
          value={pizzaBase}
          onChange={(e) => setPizzaBase(e.target.value)}
        >
          <option value="Thin">Thin</option>
          <option value="Thick">Thick</option>
        </select>
      </label>
      <br />
      <button type="submit" className="btn btn-primary mr-2">
        Place Order
      </button>
    </form>
  );
};

export default PizzaForm;
