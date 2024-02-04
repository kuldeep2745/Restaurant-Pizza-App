const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      const time = {
        Small: 180,
        Medium: 240,
        Large: 300,
      };

      const maxOrderId = state.orders.reduce((maxId, order) => Math.max(maxId, order.id), 0);

      const newOrder = {
        id: maxOrderId + 1,
        ...action.payload,
        stage: "Order Placed",
        totalTimeSpent: 0,
        totalTimeTaken: formatTime(time[action.payload.pizzaSize] * 1000),
        totalTimeNeed: formatTime(time[action.payload.pizzaSize] * 1000),
        startTime: new Date(),
      };

      return {
        ...state,
        orders: [...state.orders, newOrder],
      };

    case "MOVE_ORDER":
      const updatedOrders = state.orders.map((order) => {
        if (order.id === action.payload.orderId) {
          const totalTimeInMilliseconds = new Date() - order.startTime;
          const updatedOrder = {
            ...order,
            stage: action.payload.nextStage,
            totalTimeSpent: formatTime(totalTimeInMilliseconds),
            totalTimeNeed: formatTime(
              order.totalTimeTaken - totalTimeInMilliseconds
            ),
          };
          return updatedOrder;
        } else {
          return order;
        }
      });
      return { ...state, orders: updatedOrders };

    case "CANCEL_ORDER":
      const filteredOrders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      return {
        ...state,
        orders: filteredOrders,
      };

    default:
      return state;
  }
};

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return `${minutes} min ${seconds} sec`;
};

export default orderReducer;
