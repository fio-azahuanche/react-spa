import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={<MarvelPage />}/>
            <Route path="dc" element={<DcPage />}/>

            <Route path="login" element={<LoginPage />}/>
            <Route path="/" element={<Navigate to="/marvel" />}/>
        </Routes>
    </>
  )
}
