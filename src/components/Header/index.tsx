import style from "./index.module.css"
import KeyImage from "../../assets/img/key.png"
import { NotifyIcon, WalletIcon } from "../../assets/icons"
import { color } from "../../styles/colors"
import { Circle } from "../ui/circle.ui"
import { Link } from "@tanstack/react-router";
import { BurgerIcon } from "../../assets/icons/burger.svg"
import { AsideProps } from "../../types/props"


export function Header({ isMobile, title, toggleAside }: AsideProps & { toggleAside: () => void }) {
    return (
        <header className={style.header}>
            <div className={style.first} style={{ backgroundColor: color.ACCENT }}>
                <img src={KeyImage} alt="KeyImage" className={style.key} />
                <h1>Личный кабинет</h1>
                <NotifyIcon fill="white" width="30px" height="30px" isNotify={true}/>
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
                    <button className={style.burger} style={{ display: isMobile ? "block" : "none" }} onClick={toggleAside}>
                        <BurgerIcon width="20" height="20" fill="white" />
                    </button>
                    {title}
                </p>
            </div>
        </header>
    );
}
