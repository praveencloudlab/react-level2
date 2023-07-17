import React,{useEffect,useState} from 'react';
import {useForm} from 'react-hook-form'

const App = () => {

  const{register,handleSubmit,watch}=useForm();
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories= async()=>{
    try{
      const response=await fetch('http://localhost:8080/api/products/withBrands');
      const data=await response.json();
      setCategories(data);

    }catch(error){
      console.log(error);
    }
  }

  const onSubmit=(data)=>{
    console.log(data);
  }

 
  return (
    <div className='container'>

      <h1>Product Form</h1>


      <form onSubmit={handleSubmit(onSubmit)}>
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