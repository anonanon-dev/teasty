import { createSlice } from '@reduxjs/toolkit';

const fakeUser = {
  id: 1,
  name: 'sama',
  phone: '01012345678',
  password: '1234',
  cart: {
    discount: 0,
    shipping: 10,
    cartItems: [
      {
        id: 512,
        name: 'Porterhouse Steak',
        img: '/steakCart.png',
        price: 10.99,
        discount: 2,
        quantity: 2,
        shipping: 10,
        ingredient: ['1 STEAK', '1 BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      // {
      //   id: 513,
      //   name: 'Porterhouse Steak',
      //   img: '/Rectangle157.jpg',
      //   price: 11.99,
      //   discount: 2,
      //   quantity: 3,
      // },
      // {
      //   id: 515,
      //   name: 'Porterhouse Steak',
      //   img: '/Rectangle157.jpg',
      //   price: 11.99,
      //   discount: 2,
      //   quantity: 3,
      // },
    ],
  },
  favourites: [
    {
      id: 513,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 514,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 515,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 516,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 517,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
    {
      id: 518,
      name: 'cheese burger',
      img: '/image4.png',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
  ],
  notifications: [
    {
      id: 513,
      name: 'cheese burger',
      img: '/Rectangle157.jpg',
      price: 11.99,
      discount: 2,
      quantity: 3,
    },
  ],
};

const initialState = {
  user: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.phone === fakeUser.phone &&
        action.payload.password === fakeUser.password
      ) {
        state.user = fakeUser;
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    // addToCart(state, action) {
    //   if (state.user) {
    //     const existingItem = state.user.cart.cartItems.find(
    //       (item) => item.id === action.payload.id
    //     );
    //     if (!existingItem) {
    //       state.user.cart.cartItems = [
    //         ...state.user.cart.cartItems,
    //         action.payload,
    //       ];
    //     }
    //   }
    // },
    addToCart(state, action) {
      if (state.user) {
        const existingItem = state.user.cart.cartItems.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.user.cart.cartItems = [
            ...state.user.cart.cartItems,
            action.payload,
          ];
        }
      }
    },
    removeFromCart(state, action) {
      if (state.user) {
        state.user.cart.cartItems = state.user.cart.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    addToFav(state, action) {
      if (state.user) {
        state.user.favourites = [...state.user.favourites, action.payload];
      }
    },
    removeFromFav(state, action) {
      if (state.user) {
        state.user.favourites = state.user.favourites.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    increaseQuantity(state, action) {
      if (state.user) {
        const item = state.user.cart.cartItems.find(
          (item) => item.id === action.payload
        );
        if (item) {
          item.quantity += 1;
        }
      }
    },

    decreaseQuantity(state, action) {
      if (state.user) {
        const item = state.user.cart.cartItems.find(
          (item) => item.id === action.payload
        );
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});
export const {
  login,
  logout,
  addToCart,
  addToFav,
  removeFromCart,
  removeFromFav,
  increaseQuantity,
  decreaseQuantity,
} = userSlice.actions;
export default userSlice.reducer;
