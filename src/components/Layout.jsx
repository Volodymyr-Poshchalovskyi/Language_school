import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProgresBar from "./ProgressBar";
import CallBackWidget from "./CallBackWidget";
import ScrollToTop from './ScrollToTop'; 
import SupportSection from "./SupportSection";


export default function Layout() {
    return (
        <div className="layout">
        <ScrollToTop /> 
            <ProgresBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <CallBackWidget />
           <SupportSection />
            <Footer />
        </div>
    );
}
