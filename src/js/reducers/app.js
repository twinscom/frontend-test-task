

export default (state = {}, action) => {
  let mediaSize, menuIsOpen;

  switch (action.type) {
    case "SET_MEDIA_SIZE":
      mediaSize = action.mediaSize;
      return {
        ...state,
        mediaSize
      };

    case "SET_HEADER_MENU_STATE":
      menuIsOpen = action.menuIsOpen;
      return {
        ...state,
        menuIsOpen
      };

    default:
      return state;
  }
}