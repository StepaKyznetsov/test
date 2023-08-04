import React from "react";
import css from "./Input.module.scss";
import { IInput } from "../../interfaces/entryField";

const Input: React.FC<IInput> = ({ type, value, label, onChange }) => {
  return (
    <div
      className={
        type === "date" ? `${css.container} ${css.date}` : `${css.container}`
      }
    >
      <label htmlFor="input">{label}</label>
      <input type={type} value={value} name="input" onChange={onChange} />
    </div>
  );
};

export default Input;
