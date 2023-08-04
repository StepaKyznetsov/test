import React, { useState } from "react";
import css from "./DataForm.module.scss";
import Input from "../../UI/Input";
import { useActions } from "../../hooks";

const DataForm: React.FC = () => {
  const [description, setDescription] = useState<string>(
    "/db/description.json"
  );
  const [data, setData] = useState<string>("/db/data.json");
  const { addDescription, addData } = useActions();

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(description)
      .then((res) => res.json())
      .then((data) => addDescription(data))
      .catch(() => addDescription([]));
    fetch(data)
      .then((res) => res.json())
      .then((data) => addData(data))
      .catch(() => addData([]));
  };

  return (
    <div className={css.container}>
      <form action="" onSubmit={handleSubmit} className={css.inner}>
        <Input
          label="URL 'Описание формы'"
          type="text"
          value={description}
          onChange={handleDescription}
        />
        <Input
          label="URL 'Данные'"
          type="text"
          value={data}
          onChange={handleData}
        />
        <button>Построить форму</button>
      </form>
    </div>
  );
};

export default DataForm;
