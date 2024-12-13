import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";
import History from "./Pages/History/History";
import Mentors from "./Pages/Mentors/Mentors";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sponsors" element={<Sponsors />} />
                <Route path="/History" element={<History />} />
                <Route path="/Mentors" element={<Mentors />} />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
