import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, deleteProduct } from '../redux/actions/index';

function ProductList() {
  const products = useSelector((state) => state.ProductDetails);
  const dispatch = useDispatch();

  const handleEdit = (product) => {
    dispatch(selectProduct(product));
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div>
      <h2>لیست محصولات</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.description} - {product.time.toDateString()}
            <button onClick={() => handleEdit(product)}>ویرایش</button>
            <button onClick={() => handleDelete(product.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
