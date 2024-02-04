import React from "react";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";

const PizzaStatus = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="status-container">
      <div className="table-responsive">
        <table
          className="table table-bordered"
          style={{ border: "1px solid black" }}
        >
          <thead>
            <tr>
              <th>
                <h4 style={{ fontSize: "20px" }}>Order Placed</h4>
              </th>
              <th>
                <h4 style={{ fontSize: "20px" }}>Order in Making</h4>
              </th>
              <th>
                <h4 style={{ fontSize: "20px" }}>Order Ready</h4>
              </th>
              <th>
                <h4 style={{ fontSize: "20px" }}>Order Picked</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>
                {orders?.map((item) =>
                  item.stage === "Order Placed" ? (
                    <OrderCard key={item.id} data={item} />
                  ) : null
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                {orders?.map((item) =>
                  item.stage === "Order In Making" ? (
                    <OrderCard key={item.id} data={item} />
                  ) : null
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                {orders?.map((item) =>
                  item.stage === "Order Ready" ? (
                    <OrderCard key={item.id} data={item} />
                  ) : null
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                {orders?.map((item) =>
                  item.stage === "Order Picked" ? (
                    <OrderCard key={item.id} data={item} />
                  ) : null
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PizzaStatus;
