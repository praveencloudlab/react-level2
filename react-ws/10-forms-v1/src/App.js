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

<form>
    <label>categories</label>
    <select id="category" {...register('category')}>
      {
        categories.map((category)=>(
          <option>{category.categoryTitle}</option>
        ))
      }
    </select>

    <label>Brand</label> 
    <select id="brand" {...register('brand')}>
      {
        categories.map((category)=>category.categoryId.toString()===watch('category')?(
          category.brands.map((brand)=>(
            <option>{brand.brandTitle}</option>
          ))
        ):null)
        )}
    </select>
  </form>
      
    </div>
  );
};

export default App;