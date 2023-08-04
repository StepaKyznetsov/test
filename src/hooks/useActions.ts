import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as formActionCreators from "../redux/formActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(formActionCreators, dispatch);
};
