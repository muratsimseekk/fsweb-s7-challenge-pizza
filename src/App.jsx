import "./App.css";
import HomePage from "./Components/HomePage";
import { Route, Link } from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import OrderReceived from "./Components/OrderReceived";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sentData, setSentData] = useState(null);
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza">
        <OrderForm setSentData={setSentData} />
      </Route>
      <Route path="/summary">
        <OrderReceived sentData={sentData} />
      </Route>
    </>
  );
}

export default App;
