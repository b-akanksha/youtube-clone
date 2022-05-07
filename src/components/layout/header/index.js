import React from "react";
import { useDispatch } from "react-redux";
import { searchThunk } from "../../../redux/thunks";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = React.useState("");
  const handleChange = (e) => setSearchText(e.target.value);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchThunk(searchText));
    }
  };

  return (
    <div className="header">
      <input
        type="search"
        placeholder="Search.."
        className="header__search"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Header;
