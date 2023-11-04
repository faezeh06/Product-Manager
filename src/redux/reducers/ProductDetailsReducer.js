
const initialState = [
    { id: 1, title: 'محصول 1', description: 'توضیحات محصول 1', time: new Date() },
    { id: 2, title: 'محصول 2', description: 'توضیحات محصول 2', time: new Date() },
  ];
  
 
const ProductDetailsReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_PRODUCT-REDUCER':
            return action.payload;
        default:
            return state    
    }
};
export default ProductDetailsReducer;

