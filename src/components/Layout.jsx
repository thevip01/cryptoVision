import { Outlet } from "react-router-dom"
import React,{ Suspense } from "react"

import Navbar from "./Navbar"
import Loader from "./Loader"
import Footer from "./Footer"

import "../styles/Layout.css"

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}