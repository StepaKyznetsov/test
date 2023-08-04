import React from "react";
import css from "./Select.module.scss";
import { ISelect } from "../../interfaces/entryField";

const Select: React.FC<ISelect> = ({ label, options, value }) => {
  return (
    <div className={css.container}>
      <label htmlFor="select">{label}</label>
      <select name="select" id="select">
        {options.map((e, key) => (
          <option value={e} key={key} selected={value === e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
