import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder, moveOrder } from "../actions/orderActions";

const PizzaMain = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  const handleMoveOrder = (orderId, nextStage) => {
    dispatch(moveOrder(orderId, nextStage));
  };

  return (
    <div
      className="container"
      style={{ border: "solid 1px black", marginLeft: "5px" }}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item) => (
            <tr key={item.id}>
              <td>{item?.id}</td>
              <td>{item?.stage}</td>
              <td>{item?.totalTimeSpent}</td>
              <td>
                {item.stage === "Order Placed" ||
                item.stage === "Order In Making" ? (
                  <>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleMoveOrder(item.id, "Order Picked")}
                      disabled={item.stage === "Order Ready"}
                    >
                      Picked
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelOrder(item.id)}
                      disabled={item.stage === "Order Ready"}
                    >
                      Cancel
                    </button>
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total order delivered</td>
            <td>
              {orders.filter((item) => item.stage === "Order Picked").length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PizzaMain;
