import React from 'react';
import { useForm } from "react-hook-form"

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleUser = (user) => console.log(user)
  

  return (
    <div className='container'>
      <h1>use-form-hook</h1> <hr/>

      <div>
        <form onSubmit={handleSubmit(handleUser)}>
          <div>
              <label>First Name</label>
              <input {...register("firstName",{required:true,minLength:3,pattern: /^[A-Za-z]+$/i})}/>
              <div className="text-danger">
              {errors.firstName?.type === "required" && (<>First name is required</>)}
              {errors.firstName?.type === "minLength" && (<>First name should be  minimum 3 characters</>)}
              {errors.firstName?.type === "pattern" && (<>First name should have only alphabets</>)}

              </div>
          </div>

          <div>
              <label>Last Name</label>
              <input {...register("lastName",{required:true})}/>
              <div>
                  {errors.lastName?.type === "required" && (<>Last name is required</>)}
              </div>
          </div>

          <div>
              <label>Age</label>
              <input type="number" {...register("age", {required:true, min: 18, max: 99 })} />
              <div>
                  {errors.age?.type === "required" && (<>Age is required</>)}
                  {errors.age?.type === "min" && (<>Age shouble be minimum 18 years</>)}
                  {errors.age?.type === "max" && (<>Age shouble not be more than 99 years</>)}


              </div>
          </div>

          <div>
            <button>Save</button>
          </div>
        </form>

        <hr/>
      </div>






    </div>
  );
};

export default App;