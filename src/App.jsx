import "./App.css";
import HomePage from "./Components/HomePage";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import OrderReceived from "./Components/OrderReceived";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={OrderForm} />
      <Route path="/summary" component={OrderReceived} />
    </>
  );
}

export default App;
