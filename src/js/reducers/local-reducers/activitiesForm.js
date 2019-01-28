

export default (state, action) => {
  switch (action.type) {
    case "CHANGE_TYPE":
      return {
        ...state,
        type: action.value
      };

    case "CHANGE_PRICE":
      return {
        ...state,
        price: action.value
      };

    case "CHANGE_KEY":
      return {
        ...state,
        key: action.value
      };

    case "CHANGE_ACCESSIBILITY":
      return {
        ...state,
        accessibility: action.value
      };

    case "VALIDATION":
      return {
        ...state,
        validation: action.validation
      };

    default:
      return state;
  }
}