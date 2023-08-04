import { Description, Data, FormAction, FormActionTypes } from "./formReducer";
import { Dispatch } from "redux";

export const addDescription = (descriptions: Description[]) => {
  return (dispatch: Dispatch<FormAction>) => {
    dispatch({
      type: FormActionTypes.ADD_DESCRIPTION,
      payload: descriptions,
    });
  };
};

export const addData = (data: Data[]) => {
  return (dispatch: Dispatch<FormAction>) => {
    dispatch({
      type: FormActionTypes.ADD_DATA,
      payload: data,
    });
  };
};
