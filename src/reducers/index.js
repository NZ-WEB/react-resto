const initialState = {
  menu: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payload,
        loading: false,
        error: null
      };
    case 'MENU_REQUESTED':
      return {
        menu: state.menu,
        loading: true,
        error: null
      };
    case 'MENU_ERROR':
      return {
        menu: state.menu,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default reducer;
