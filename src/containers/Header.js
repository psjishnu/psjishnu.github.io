import { useDispatch, useSelector } from "react-redux";
import {
  changeTheme,
  searchItem,
  focusInput,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { mode, theme } = useSelector((state) => state.theme);
  const { focus, searchText } = useSelector((state) => state.allProducts);
  const onChange = (e) => dispatch(searchItem(e.target.value));
  useEffect(() => {
    if (focus) {
      document.getElementById("search").focus();
      dispatch(focusInput(false));
    }
  }, [focus, dispatch]);
  return (
    <div style={theme} className="ui fixed menu">
      <div className="ui  container center">
        <Link to="/">
          <h2 style={theme}>FakeShop</h2>
        </Link>
        <button
          style={{
            height: "30px",
            margin: "0px 8px",
            padding: 5,
            backgroundColor: "yellow",
            border: 0,
            borderRadius: 10,
            boxShadow: "1px 2px #888888",
          }}
          className="ui link cards"
          onClick={() => {
            dispatch(changeTheme(mode === "dark" ? "light" : "dark"));
          }}
        >
          Switch to {mode === "dark" ? "LIGHT " : "DARK"}Mode
        </button>
        <input
          onChange={onChange}
          placeholder="search"
          id="search"
          value={searchText}
          style={{
            height: "30px",
            borderRadius: 10,
            ...theme,
            outline: "none",
            padding: 10,
          }}
        ></input>
      </div>
    </div>
  );
};

export default Header;
