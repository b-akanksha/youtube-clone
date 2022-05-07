import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Body from "./components/layout/body";
import Header from "./components/layout/header";
import Loader from "./components/layout/loader";

function App() {
  const { loading } = useSelector((state) => state.youtubeify);
  return (
    <div className="app">
      <Header />
      {loading ? <Loader /> : <Body />}
    </div>
  );
}

export default App;
