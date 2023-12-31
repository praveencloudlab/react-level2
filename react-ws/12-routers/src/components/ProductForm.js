import React,{useEffect,useState} from 'react';
import {useForm} from 'react-hook-form'
import ProductService from '../api/ApiService'
import { useNavigate,useParams } from 'react-router-dom';
const ProductForm = () => {
    const{register,handleSubmit,watch,formState: { errors }}=useForm();
    const [categories, setCategories] = useState([]);
    const[product,setProduct] = useState({});

    const navigate=useNavigate();
    const{pid}=useParams()
    useEffect(()=>{
        if(pid){
            console.log(">>>> EDIT : "+pid);
            fetchCategories();
            ProductService.getProductById(pid)
            .then(response=>{
              console.log(response.data);
              setProduct(response.data);

            })


          }else{
            console.log(">>> SAVE");
            fetchCategories();
            setProduct({})
          }  
     
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
      if(pid){
        ProductService.updateProduct(pid,data);
        navigate('/products')
      }else{
        saveProduct(data);
        navigate('/products')
      }
      
    }
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>

<label>Product Title:</label>
<input defaultValue={product.productTitle}  {...register("productTitle", { required: true })} />
{errors.productTitle && <p>This field is required</p>}
<br/>
<label>Rating:</label>
<input defaultValue={product.rating}  {...register("rating", { required: true })} />
{errors.rating && <p>This field is required</p>}
<br/>
<label>Description:</label>
<textarea  defaultValue={product.description} {...register("description")} />
<br/>
<label>Keywords:</label>
<textarea defaultValue={product.keywords} {...register("keywords")} />
<br/>
<label>Price:</label>
<input defaultValue={0} {...register("price", { required: true })} />
{errors.price && <p>This field is required</p>}
<br/>
<label>Stock:</label>
<input defaultValue={0}{...register("stock", { required: true })} />
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
            <option key={product.produtId} value={brand.brandId}>
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

export default ProductForm;