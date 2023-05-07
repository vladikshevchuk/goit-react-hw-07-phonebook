import { useDispatch } from "react-redux";
import { filterContact } from "redux/contactsSlice";

export const FindNumberByName = () => {
  const dispatch = useDispatch();

  const handleFindNumber = (e) => {
    dispatch(filterContact(e.target.value));
  }

  return (
    <label>
      Find number by name
      <input type="text" onChange={handleFindNumber} />
    </label>
  );
};
