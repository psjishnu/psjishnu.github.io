import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import { useSelector, useDispatch } from "react-redux";
import { focusInput } from "./redux/actions/productActions";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key.toLowerCase() === "k") {
        dispatch(focusInput(true));
      }
    });
  }, [dispatch]);

  return (
    <div style={{ ...theme, minHeight: "100vh" }} className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>
            <br></br>
            <br></br>
            <br></br>
            <div
              style={{
                width: "100vw",
                textAlign: "center",
                fontSize: "35px",
                marginTop: "10vh",
                maxHeight: "10vh",
              }}
            >
              Not found !!
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
