const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
