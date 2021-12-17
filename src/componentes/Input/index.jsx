import React from "react";
import { StyledInput } from "./style";

{
  /*export const Input = ({ type, id, name, value, onChange, onClick }) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};*/
}

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};
