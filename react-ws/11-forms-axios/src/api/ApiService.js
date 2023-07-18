import axios from "axios";
const API_URL='http://localhost:8080/api/products'
class ProductService{

    // fetch all products
    getAllProducts() {
    return axios.get(API_URL);
    }

    //get categories and brands
    getCategories(){
        return axios.get(`${API_URL}/withBrands`)
    }

    // post new product
    createProduct(product){
       return  axios.post(API_URL,product)
    }

    // find products by id
    getProductById(id){
     return axios.get(`${API_URL}/${id}`)
    }

    // update product
    updateProduct(id,product){
        return axios.put(`${API_URL}/${id}`,product)
    }

    // delete product

    deleteProduct(id){
        return axios.delete(`${API_URL}/${id}`)

    }
}
export default new ProductService();