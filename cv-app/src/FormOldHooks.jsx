import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit="">
          <input
            type="text"
            name="firstName"
            placeholder="First Name..."
          />
         
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
   
          />
         
          <input
            type="text"
            name="email"
            placeholder="Email..."
           
          />
       
          <input type="text" name="age" placeholder="Age..."  />
         
          <input
            type="password"
            name="password"
            placeholder="Password..."
           
          />
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            
          />
       
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;