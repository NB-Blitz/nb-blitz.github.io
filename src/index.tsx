import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";
import History from "./Pages/History/History";
import Mentors from "./Pages/Mentors/Mentors";
import Gallery from "./Pages/Gallery/Gallery";
import NotFound from "./Pages/NotFound/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sponsors" element={<Sponsors />} />
                <Route path="history" element={<History />} />
                <Route path="mentors" element={<Mentors />} />
                <Route path="gallery" element={<Gallery />} />
                <Route element={<NotFound />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
