import style from "./index.module.css"
import KeyImage from "../../assets/img/key.png"
import { NotifyIcon, WalletIcon } from "../../assets/icons"
import { color } from "../../styles/colors"
import { Circle } from "../ui/circle.ui"
import { Link } from "@tanstack/react-router";
import { BurgerIcon } from "../../assets/icons/burger.svg"
import { useEffect, useState } from "react"
import Aside from "../Aside"
import { AsideProps } from "../../types/props"


export function Header({ isMobile, page, title }: AsideProps) {
    const [isAsideOpened, setIsAsideOpened] = useState<boolean>(false)
    const burgerHandleClick = () => setIsAsideOpened(!isAsideOpened)
    return (
        <header className={style.header}>
            <div className={style.first} style={{ backgroundColor: color.ACCENT }}>
                <img src={KeyImage} alt="KeyImage" className={style.key} />
                <h1>Личный кабинет</h1>
                <NotifyIcon fill="white" isNotify={true} />
            </div>
            <div className={style.second}>
                <div className={style.balance}>
                    <Link to="/balance" className={style.link}>
                        <Circle fill={color.ACCENT} padding="10px 10px">
                            <WalletIcon fill="white" width="30" height="30" />
                        </Circle>
                        <span className={style.title} style={{ color: color.ACCENT }}>Баланс: </span>
                        <span className={style.price}>450 €</span>
                    </Link>
                </div>
                <div className={style.balance}>
                    <span className={style.title} style={{ color: color.ACCENT }}>Тариф: </span>
                    <span className={style.price}>750 €</span>
                </div>
            </div>
            <div>
                <p className={style.pageName}>
                    <button className={style.burger} style={{ display: isMobile ? "block" : "none" }} onClick={burgerHandleClick}>
                        <BurgerIcon width="20" height="20" fill="white" /></button>{title}
                </p>
            </div>
        </header>
    )
}