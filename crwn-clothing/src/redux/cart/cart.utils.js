export const addItemCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cart => cart.id === cartItemToAdd.id);

  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity+1} :
      cartItem
      );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}

export const removeItemCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cart => cart.id === cartItemToRemove.id);
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity-1} : cartItem);
};
