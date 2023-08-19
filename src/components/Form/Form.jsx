import React from "react";
import { useState } from "react";
import style from "./Form.module.css";
import {validation} from "./validation"

  const Form = ({login}) => {
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }));
    
        // Validar el campo cambiado
        const newErrors = validation({ ...userData, [name]: value });
        setErrors(newErrors);
      };
  
    // Manejador para el envío del formulario
    const handleSubmit = (event) => {
      event.preventDefault(); 
      login(userData);
    };
  
    return (
      <form onSubmit={handleSubmit} className={style.form}>
       <img src={'https://www.xtrafondos.com/wallpapers/resized/rick-y-morty-escapando-de-portal-9235.jpg?s=large'} alt="R&M" style={{ width: '450px' }}/>
        <div>
        <label htmlFor="email">EMAIL:</label>
          <input
            type="text" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className={errors.email ? style.error : style.success}
          />
          <p>{errors.email}</p> 
        </div>
        <div>
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? style.error : style.success}
            />
        <p>{errors.password}</p> 
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Form;
  