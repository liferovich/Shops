import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Order } from '../models/response/OrderResponse';
import { Product } from '../models/response/ProductResponse';
import { UserResponse } from '../models/response/UserResponse';
import OrderService from '../services/OrderService';
import ProductService from '../services/ProductService';
import UserService from '../services/UserService';

const initialState = {
  products: [] as Product[],
  fProducts: [] as Product[],
  wishlist: [] as Product[],
  product: {} as Product,
  cart: [] as Product[],
  isLoading: false,
  user: {} as UserResponse,
  id: Number(localStorage.getItem('token')) || 0,
  isAuth: localStorage.getItem('token') ? true : false,
  orders: [] as Order[]
};

export const getAllProducts = createAsyncThunk(
  'app/getallproducts',
  async (_,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await ProductService.getAllProducts();

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

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

export const getOrdersById = createAsyncThunk(
  'app/getorders',
  async (id: number,
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await OrderService.getOrders(id);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

export const login = createAsyncThunk(
  'app/login',
  async ({ email, password }: { email: string; password: string },
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await UserService.login(email, password);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }
);

export const register = createAsyncThunk(
  'app/register',
  async ({ email, password }: { email: string; password: string },
    { rejectWithValue }) => {
    setLoading(true);
    try {
      const response = await UserService.register(email, password);

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
    sortByNewProducts: (state, action) => {
      state.products = state.products.sort((a: Product, b: Product) => parseFloat(a.id) - parseFloat(b.id))
    },
    sortByPriceUpProducts: (state, action) => {
      state.products = state.products.sort((a: Product, b: Product) => a.price - b.price)
    },
    sortByPriceDownProducts: (state, action) => {
      state.products = state.products.sort((a: Product, b: Product) => b.price - a.price)
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.user = {} as UserResponse;
      localStorage.removeItem('token');
      state.id = 0;
    },
    checkAuth: (state, action) => {
      const auth = localStorage.getItem('token');
      state.isAuth = auth ? true : false;
      state.user = {} as UserResponse;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = [...action.payload.products];
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      console.log(action.payload);
    });
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
    builder.addCase(getOrdersById.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
    });
    builder.addCase(getOrdersById.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem('token', String(action.payload.id));
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      localStorage.setItem('token', String(action.payload.id));
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { setLoading, getProduct, addCart, addWishList, deleteCart, sortByPriceUpProducts, sortByPriceDownProducts, sortByNewProducts, logout } = appSlice.actions;
export const cartLength = (state: any) => state.app.cart.length;
export const wishlistLength = (state: any) => state.app.wishlist.length;
export const cart = (state: any) => state.app.cart;
export const wishlist = (state: any) => state.app.wishlist;
export const product = (state: any) => state.app.product;
export const products = (state: any) => state.app.products;
export const fProducts = (state: any) => state.app.fProducts;
// export const isLoading = (state: any) => state.chats.isLoading;
export const isAuth = (state: any) => state.app.isAuth;
export const user = (state: any) => state.app.user;
export const id = (state: any) => state.app.id;
export const orders = (state: any) => state.app.orders;
export const orderCost = (state: any) => state.app.cart.reduce((previousValue: number, product: Product) => {
  return previousValue + product.price;
}, 0);

export default appSlice.reducer;
