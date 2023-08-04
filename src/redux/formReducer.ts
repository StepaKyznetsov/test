import { TFieldType } from "../interfaces/entryField";

export interface Description {
  label: string;
  type: TFieldType;
  options?: string[];
}

export interface Data {
  value: number | string;
}

export interface FormState {
  descriptionItems: Description[];
  dataItems: Data[];
}

export enum FormActionTypes {
  ADD_DESCRIPTION = "ADD_DESCRIPTION",
  ADD_DATA = "ADD_DATA",
}

interface AddDescription {
  type: FormActionTypes.ADD_DESCRIPTION;
  payload: Description[];
}

interface AddData {
  type: FormActionTypes.ADD_DATA;
  payload: Data[];
}

export type FormAction = AddDescription | AddData;

const initialState: FormState = {
  descriptionItems: [],
  dataItems: [],
};

export const formReducer = (state = initialState, action: FormAction): FormState => {
  switch (action.type) {
    case FormActionTypes.ADD_DESCRIPTION:
      return {
        ...state,
        descriptionItems: action.payload,
      };
    case FormActionTypes.ADD_DATA:
      return {
        ...state,
        dataItems: action.payload,
      };
    default:
      return state;
  }
};
