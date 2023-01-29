import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return { formData, onChangeHandler };
};

export default useForm;
