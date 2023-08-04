export type TFieldType = "text" | "number" | "date" | "select";

interface IEntryField {
  type: TFieldType;
  label: string;
}

export interface IInput extends IEntryField {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelect extends IEntryField {
  options: string[];
  value: string;
}
