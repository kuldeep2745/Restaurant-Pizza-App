import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { moveOrder } from "../actions/orderActions";

const OrderCard = (props) => {
  console.log("propsprops", props);
  const [timer, setTimer] = useState("");
  const [color, setColor] = useState("White");
  let intervalId;
  const dispatch = useDispatch();
  const handleMoveOrder = (orderId, nextStage) => {
    dispatch(moveOrder(orderId, nextStage));
    clearInterval(intervalId);
  };
  useEffect(() => simulateClock(), []);

  const simulateClock = () => {
    const startTime = Date.now();
    let currentTime = 0;
    intervalId = setInterval(() => {
      const elapsedMillis = Date.now() - startTime;
      const elapsedSeconds = Math.floor(elapsedMillis / 1000);

      if (elapsedSeconds >= currentTime) {
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        setTimer(
          `${String(minutes).padStart(2, "0")} min ${String(seconds).padStart(
            2,
            "0"
          )} sec`
        );
        if (elapsedSeconds >= 180) {
          console.log("Something special happens after 3 minutes!");
          setColor("red");
        }
        currentTime += 1;
      }
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "6px",
        border: "solid 1px black",
        borderRadius: "25px",
        backgroundColor: `${
          props.data.stage !== "Order Picked" ? color : "white"
        }`,
        marginTop: "5px",
      }}
    >
      <h4 style={{ fontSize: "18px" }}>Order {props.data.id}</h4>
      {props.data.stage !== "Order Picked" ? (
        <h5 style={{ fontSize: "18px" }}>{timer}</h5>
      ) : null}
      {props.data.stage === "Order Placed" ? (
        <button
          className="btn btn-primary mr-2"
          style={{ borderRadius: "15px" }}
          onClick={() => handleMoveOrder(props.data.id, "Order In Making")}
        >
          Next
        </button>
      ) : null}
      {props.data.stage === "Order In Making" ? (
        <button
          style={{ borderRadius: "15px" }}
          className="btn btn-primary mr-2"
          onClick={() => handleMoveOrder(props.data.id, "Order Ready")}
        >
          Next
        </button>
      ) : null}
      {props.data.stage === "Order Ready" ? (
        <button
          style={{ borderRadius: "15px" }}
          className="btn btn-primary mr-2"
          onClick={() => handleMoveOrder(props.data.id, "Order Picked")}
        >
          Next
        </button>
      ) : null}
      {props.data.stage === "Order Picked" ? (
        <h3 style={{ fontSize: "20px" }}>Picked</h3>
      ) : null}
    </div>
  );
};

export default OrderCard;
