const initialState = {
  menu: [],
  loading: true,
  error: null,
  items: [],
  cartSum: 0
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: null
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: null
      };
    case 'MENU_ERROR':
      return {
        ...state,
        menu: state.menu,
        loading: false,
        error: action.error
      };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      let incSum = state.cartSum;
      const item = state.menu.find(item => item.id === id);
      incSum += item.price;

      const createNewItem = () => {
        const clone = state.items.filter(item => item.id === id);

        if (clone.length !== 0) {
          return [
            ...state.items.filter(item => item.id !== id),
            {
              title: item.title,
              price: item.price,
              url: item.url,
              id: item.id,
              count: clone[0].count ? clone[0].count + 1 : 1
            }
          ]
        } else {
          return [
            ...state.items,
            {
              title: item.title,
              price: item.price,
              url: item.url,
              id: item.id,
              count: 1
            }
          ]
        }
      }

      return {
        ...state,
        items: createNewItem(),
        cartSum: incSum
      }
    case 'ITEM_REMOVE_FROM_CART':
      const idx = action.payload;
      let decSum = state.cartSum;
      const itemIndex = state.items.findIndex(item => item.id === idx);

      if (state.items[itemIndex].count > 1) {
        decSum = decSum - state.items[itemIndex].price * state.items[itemIndex].count;
      } else {
        decSum -= state.items[itemIndex].price;
      }

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        cartSum: decSum
      }
    default:
      return state;
  }
}

export default reducer;
