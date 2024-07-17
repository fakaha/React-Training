import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { SearchResult } from "../pages/SearchResult";

export const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/searchresult" element={<SearchResult/>}/>
      </Routes>
    </BrowserRouter>
  );
};
