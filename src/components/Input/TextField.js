import React from "react";
import { TextField as TextMaterial } from "@material-ui/core";

const TextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextMaterial
    autoComplete="fname"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    fullWidth
    autoFocus
    {...input}
    {...custom}
  />
);

export default TextField;
