import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProgresBar from "./ProgressBar";
import CallBackWidget from "./CallBackWidget";


export default function Layout() {
    return (
        <div className="layout">
            <ProgresBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <CallBackWidget />
           
            <Footer />
        </div>
    );
}
