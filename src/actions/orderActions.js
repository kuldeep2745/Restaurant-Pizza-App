export const placeOrder = (order) => ({
  type: "PLACE_ORDER",
  payload: order,
});

export const moveOrder = (orderId, nextStage) => ({
  type: "MOVE_ORDER",
  payload: { orderId, nextStage },
});

export const cancelOrder = (orderId) => ({
  type: "CANCEL_ORDER",
  payload: orderId,
});

export const orderMaking = (orderId) => ({
  type: "Order_Making",
  payload: { orderId: "005", remainingTime: " 1 min 10 sec" },
});

export const moveOrderInMaking = (payload) => ({
  type: "moveOrderInMaking",
  payload: payload,
});
