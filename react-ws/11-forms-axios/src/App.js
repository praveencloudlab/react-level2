import React,{useEffect,useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import ProductService from './api/ApiService'

const App = () => {

  const{register,handleSubmit,watch,formState: { errors }}=useForm();
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories= ()=>{
     ProductService.getCategories()
     .then(response => setCategories(response.data))
  }

   function saveProduct(product){
    ProductService.createProduct(product)
    .then(response=>console.log(response.data))
    .then(error=>console.log(error));
  }

  const onSubmit=(data)=>{
    console.log(data);
    saveProduct(data);
  }

 
  return (
    <div className='container'>

      <h1>Product Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <label>Product Title:</label>
      <input  {...register("productTitle", { required: true })} />
      {errors.productTitle && <p>This field is required</p>}
      <br/>
      <label>Rating:</label>
      <input  {...register("rating", { required: true })} />
      {errors.rating && <p>This field is required</p>}
      <br/>
      <label>Description:</label>
      <textarea  {...register("description")} />
      <br/>
      <label>Keywords:</label>
      <textarea  {...register("keywords")} />
      <br/>
      <label>Price:</label>
      <input {...register("price", { required: true })} />
      {errors.price && <p>This field is required</p>}
      <br/>
      <label>Stock:</label>
      <input {...register("stock", { required: true })} />
      {errors.stock && <p>This field is required</p>}
      <br/>
      
          <label htmlFor="category">Category:</label>
          <select id="category" {...register('category')}>
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryTitle}
              </option>
            ))}
          </select>
          <br/>
          <label htmlFor="brand">Brand:</label>
          <select id="brand" {...register('brand')}>
            {categories.map((category) =>
              category.categoryId.toString() === watch('category') ? (
                category.brands.map((brand) => (
                  <option key={brand.brandId} value={brand.brandId}>
                    {brand.brandTitle}
                  </option>
                ))
              ) : null
            )}
          </select>

          <button type="submit">Submit</button>
        </form>

      
    </div>
  );
};

export default App;