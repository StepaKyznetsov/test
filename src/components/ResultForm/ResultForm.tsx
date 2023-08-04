import React from "react";
import css from "./ResultForm.module.scss";
import { useTypedSelector } from "../../hooks";
import Input from "../../UI/Input";
import Select from "../../UI/Select";

const ResultForm: React.FC = () => {
  const { descriptionItems, dataItems } = useTypedSelector(
    (state) => state.form
  );

  return (
    <>
      {descriptionItems.length > 0 &&
        dataItems.length > 0 &&
        descriptionItems.length === dataItems.length && (
          <div className={css.container}>
            <div className={css.inner}>
              <span>Отрисованный результат формы</span>
              <form action="">
                <div className={css.items}>
                  {descriptionItems.map((e, key) =>
                    e.type === "select" && e.options ? (
                      <Select
                        key={key}
                        label={e.label}
                        options={e.options}
                        type={e.type}
                        value={String(dataItems[key].value)}
                      />
                    ) : (
                      <Input
                        key={key}
                        type={e.type}
                        label={e.label}
                        value={dataItems[key].value}
                      />
                    )
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
    </>
  );
};

export default ResultForm;
