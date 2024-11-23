import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../src/Views/Layout/Layout";
import products from "./Views/Products/Productsjsx";
import Home from "../src/Views/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path = "/products" element = {<Home/>}/>
          Route path="products" element
          index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
