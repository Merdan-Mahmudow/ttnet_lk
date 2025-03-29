import { Outlet } from "@tanstack/react-router";
import Aside from "../Aside";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import style from "./index.module.css"
import { Header } from "../Header";
import { Footer } from "../Footer";

interface AsideProps{
    page: "profile" | "settings" | "support" | "manage" | "balance" | "more"
}

export default function () {
    const path = useLocation()
    const [currentPage, setCurrentPage] = useState<AsideProps>({ page: "profile" })

    useEffect(() => {
        switch (path.pathname) {
            case "/profile":
                setCurrentPage({ page: "profile" })
                break;
            case "/settings":
                setCurrentPage({ page: "settings" })
                break;
            case "/support":
                setCurrentPage({ page: "support" })
                break;
            case "/manage":
                setCurrentPage({ page: "manage" })
                break;
            case "/balance":
                setCurrentPage({ page: "balance" })
                break;
            case "/more":
                setCurrentPage({ page: "more" })
                break;
        }
    }, [path.pathname])
    return (
        <div className={style.layout}>
            <Aside page={currentPage.page} />
            <Header />
            <div className={style.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}