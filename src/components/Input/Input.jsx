import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./Input.module.css";

export default function Input() {
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);
  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={query} />
      <p>{query}</p>
    </>
  );
}
