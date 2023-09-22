export function validation(userData) {
    const errors = {};
  
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!userData.email) {
      errors.email = "El email no puede estar vacío";
    } else if (!emailRegex.test(userData.email)) {
      errors.email = "El email no es válido";
    } else if (userData.email.length > 35) {
      errors.email = "El email no puede tener más de 35 caracteres";
    }
  
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    if (!userData.password) {
      errors.password = "La contraseña no puede estar vacía";
    } else if (!passwordRegex.test(userData.password)) {
      errors.password = "La contraseña no cumple los requisitos";
    }
  
    return errors;
  }
