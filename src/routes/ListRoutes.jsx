import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { SearchResult } from "../pages/SearchResult";
import { CekApiVip } from "../pages/CekApiVip";
import { FormLogin } from "../pages/FormLogin";
import { SearchReduxResult } from "../pages/SearchReduxResult";

export const ListRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/searchresult" element={<SearchResult/>}/>
        <Route path="/cek" element={<CekApiVip/>}/>
        <Route path="/searchredux" element={<SearchReduxResult/>}/>
      </Routes>
    </BrowserRouter>
  );
};
