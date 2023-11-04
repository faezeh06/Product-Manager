import { useSelector } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const ProductDetailsData = useSelector(state => state.ProductDetails)

const initialState = [
    { id: 1, title: 'محصول 1', description: 'توضیحات محصول 1', time: new Date() },
    { id: 2, title: 'محصول 2', description: 'توضیحات محصول 2', time: new Date() },
  ];

// add product
export const addProduct = createAsyncThunk('products/addProduct', async (product, thunkAPI) => {
  product.id = Math.floor(Math.random() * 1000);
  return product;
});

// edit product
export const editProduct = createAsyncThunk('products/editProduct', async (product, thunkAPI) => {

  const index = initialState.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    initialState[index] = product;
  }
  return product;
});

// delete product
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId, thunkAPI) => {
  initialState = initialState.filter((p) => p.id !== productId);
  return productId;
});


const productsSlice = createSlice({
  name: 'products',
  // initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.selectedProduct = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
        state.selectedProduct = null;
      });
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
