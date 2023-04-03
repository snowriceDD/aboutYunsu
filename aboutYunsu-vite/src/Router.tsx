import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Landing } from "@/pages/Landing";
import { About } from "@/pages/About";
import { Works } from "@/pages/Works";
import { Market } from "@/pages/Market";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
};