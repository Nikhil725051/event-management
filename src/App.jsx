import { useState } from "react";
import "./App.css";
import { EventTheme } from "./pages/home/components/EventTheme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 max-w-6xl lg:mx-auto my-10 mx-5 p-3 md:p-5">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};

export default App;
