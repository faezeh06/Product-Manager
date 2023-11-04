import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { addProduct, editProduct, selectProduct } from '../redux/actions/index';

function ProductForm() {
  const selectedProduct = useSelector((state) => state.ProductDetails);
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    if (selectedProduct) {
      reset(selectedProduct);
    }
  }, [selectedProduct, reset]);

  const onSubmit = (data) => {
    if (selectedProduct) {
      dispatch(editProduct(data));
    } else {
      dispatch(addProduct(data));
    }
    reset();
    dispatch(selectProduct(null));
  };

  return (
    <div>
      <h2>اضافه کردن/ویرایش محصول</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>عنوان:</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>توضیحات:</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>زمان:</label>
          <Controller
            name="time"
            control={control}
            render={({ field }) => <DatePicker selected={field.value} onChange={field.onChange} showTimeSelect dateFormat="Pp" />}
          />
        </div>
        <div>
          <button type="submit">ذخیره</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
