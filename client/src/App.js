import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "./App.css";

import RoutesLayout from "./components/Routes";

const App = () => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <RoutesLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
