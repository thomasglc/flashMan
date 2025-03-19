const { ValidationError } = require("@strapi/utils").errors;


const allowedValues = ["5", "10", "20", "30+"];


const validate = (data: { duration?: string }): void => {
    if (data.duration && !allowedValues.includes(data.duration)) {
      throw new ValidationError("La valeur du champ 'duration' doit être 5, 10, 20 ou 30+.");
    }
  };
  
  export default validate;