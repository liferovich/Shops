import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Order } from '../models/response/OrderResponse';
import { Product } from '../models/response/ProductResponse';
import OrderService from '../services/OrderService';
import ProductService from '../services/ProductService';

const initialState = {
  products: [] as Product[],
  fProducts: [] as Product[],
  wishlist: [] as Product[],
  product: {} as Product,
  cart: [] as Product[],
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  'app/getproducts',
  async (category: string,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await ProductService.getProducts(category);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

export const getProductById = createAsyncThunk(
  'app/getproduct',
  async (id: number,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await ProductService.getProduct(id);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

export const addOrder = createAsyncThunk(
  'app/addorder',
  async (data: Order,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await OrderService.addOrder(data);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const index = state.cart.findIndex(x => x.id == action.payload.id);
      if (index == -1) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart.splice(index, 1);
      }
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex(x => x.id == action.payload.id);
      state.cart.splice(index, 1);
    },
    addWishList: (state, action) => {
      const index = state.wishlist.findIndex(x => x.id == action.payload.id);
      if (index == -1) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist.splice(index, 1);
      }
    },
    deleteWishlist: (state, action) => {
      const index = state.wishlist.findIndex(x => x.id == action.payload.id);
      state.wishlist.splice(index, 1);
    },
    getProduct: (state, action) => {
      state.product = state.products.find(x => x.id == action.payload) || {} as Product;
    },
    filterProducts: (state, action) => {
      const selected = action.payload.filters;
      if (!selected.length) {
        state.fProducts = [];
      } else {
        state.fProducts = state.products.filter(x => selected.indexOf(String(x.force)) > -1);
      }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      console.log(action.payload)
      state.product = { ...action.payload.product };
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.cart = [];
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setLoading, getProduct, addCart, addWishList, deleteCart, filterProducts } = appSlice.actions;
export const cartLength = (state: any) => state.app.cart.length;
export const wishlistLength = (state: any) => state.app.wishlist.length;
export const cart = (state: any) => state.app.cart;
export const wishlist = (state: any) => state.app.wishlist;
export const product = (state: any) => state.app.product;
export const products = (state: any) => state.app.products;
export const fProducts = (state: any) => state.app.fProducts;
export const isLoading = (state: any) => state.chats.isLoading;
export const orderCost = (state: any) => state.app.cart.reduce((previousValue: number, product: Product) => {
  return previousValue + product.price;
}, 0);

export default appSlice.reducer;
