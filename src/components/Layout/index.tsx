import { Outlet } from "@tanstack/react-router";
import Aside from "../Aside";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import style from "./index.module.css"
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useWindowSize } from "../../hooks/useWindowSize";

interface AsideProps {
    page: "profile" | "settings" | "support" | "manage" | "balance" | "more"
    title: string
}

export default function Layout() {
    const path = useLocation();
    const [currentPage, setCurrentPage] = useState<AsideProps>({ page: "profile", title: "" });
    const [isAsideOpen, setIsAsideOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width < 768;

    useEffect(() => {
        switch (path.pathname) {
            case "/profile":
                setCurrentPage({ page: "profile", title: "Профиль" });
                break;
            case "/settings":
                setCurrentPage({ page: "settings", title: "Настройка оборудования" });
                break;
            case "/support":
                setCurrentPage({ page: "support", title: "Чат с поддержкой" });
                break;
            case "/manage":
                setCurrentPage({ page: "manage", title: "Управление доступом" });
                break;
            case "/balance":
                setCurrentPage({ page: "balance", title: "Состояние счета и история платежей" });
                break;
            case "/more":
                setCurrentPage({ page: "more", title: "Дополнительные сервисы" });
                break;
        }
    }, [path.pathname]);

    return (


        <div className={!isMobile ? style.layout : style.layoutMobile}>
            <Header isMobile={isMobile} page={currentPage.page} title={currentPage.title} toggleAside={() => setIsAsideOpen(!isAsideOpen)} />
            <Aside isMobile={isMobile} page={currentPage.page} isOpen={isAsideOpen}  toggleAside={() => {setIsAsideOpen(!isAsideOpen)}}/>
            <div className={style.content}>
                    <Outlet />
            </div>
            <Footer />
        </div>
    );
}
