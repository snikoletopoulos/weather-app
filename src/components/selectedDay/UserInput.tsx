import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const UserInput: React.FC<Props> = ({ changeCity }) => {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: Yup.object().shape({
      city: Yup.string().required("Required"),
    }),
    onSubmit: values => {
      changeCity(values.city);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="city">Your city</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.city && formik.errors.city && <p>{formik.errors.city}</p>}
    </form>
  );
};

export default UserInput;

interface Props {
  changeCity: React.Dispatch<React.SetStateAction<string>>;
}
