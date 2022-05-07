import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Body from "./components/layout/body";
import Header from "./components/layout/header";
import Loader from "./components/layout/loader";
import { clearError } from "./redux/actions";

function App() {
  const { loading, error } = useSelector((state) => state.youtubeify);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(clearError());

  return (
    <>
      <div className="app">
        <Header />
        {loading ? <Loader /> : <Body />}
      </div>
      <Snackbar open={error.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose} variant="filled">
          {error.code}: {error.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
