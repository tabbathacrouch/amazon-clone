export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((acc, curr) => curr.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    // case "REMOVE_FROM_CART":
    //   return {
    //     const index = state.cart.findIndex(
    //       (cartItem) => cartItem.id === action.id
    //     );
    //     if (index >= 0) {
    //       newCart
    //     } else {
    //       console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`)
    //     }
    //   }
    default:
      return state;
  }
};

export default reducer;
