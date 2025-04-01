import { BrowserIcon, HumanIcon, LeftArrowIcon, MessageIcon, ToolsIcon, WalletIcon, WarnIcon } from "../../assets/icons";
import { color } from "../../styles/colors";
import { Circle } from "../ui/circle.ui";
import style from "./index.module.css"
import { Link } from "@tanstack/react-router";

interface ActivePage {
    isActive: "profile" | "settings" | "support" | "manage" | "balance" | "more"
}

export default function Menu({ isActive, toggleAside }: ActivePage & {toggleAside: () => void}) {
    return (
        <menu className={style.menu} style={{
            backgroundColor: color.GRAY_50
        }}>
            <h3 className={style.connect_world}>Подключи весь мир!</h3>
            <div  style={{ backgroundColor: isActive === "profile" ? color.ACCENT : "transparent" }}>
                <Link to="/profile" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "profile" ? "white" : color.ACCENT}>
                        <HumanIcon fill={isActive == "profile" ? color.ACCENT : "white"} width="22" height="22" />
                    </Circle>
                    <span style={{color: isActive === "profile" ? "white" : "black"}}>Профиль</span>
                </Link>
            </div>

            <div style={{ backgroundColor: isActive === "settings" ? color.ACCENT : "transparent" }}>
                <Link to="/settings" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "settings" ? "white" : color.ACCENT}>
                        <ToolsIcon fill={isActive == "settings" ? color.ACCENT : "white"} width="22" height="22" />
                    </Circle>
                    <span style={{color: isActive === "settings" ? "white" : "black"}}>Настройка оборудования</span>
                </Link>
            </div>

            <div style={{backgroundColor: isActive === "support" ? color.ACCENT : "transparent" }}>
                <Link to="/support" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "support" ? "white" : color.ACCENT}>
                        <MessageIcon fill={isActive == "support" ? color.ACCENT : "white"} width="22" height="22" rectFill={isActive == "support" ? "white" : color.ACCENT} />
                    </Circle>
                    <span style={{color: isActive === "support" ? "white" : "black"}}>Чат с поддержкой</span>
                </Link>
            </div>

            <div style={{ backgroundColor: isActive === "manage" ? color.ACCENT : "transparent" }}>
                <Link to="/manage" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "manage" ? "white" : color.ACCENT}>
                        <BrowserIcon fill={isActive == "manage" ? color.ACCENT : "white"} width="22" height="22" />
                    </Circle>
                    <span style={{color: isActive === "manage" ? "white" : "black"}}>Управление доступом</span>
                </Link>
            </div>

            <div style={{backgroundColor: isActive === "balance" ? color.ACCENT : "transparent"}}>
                <Link to="/balance" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "balance" ? "white" : color.ACCENT}>
                        <WalletIcon fill={isActive == "balance" ? color.ACCENT : "white"} width="22" height="22" />
                    </Circle>
                    <span style={{color: isActive === "balance" ? "white" : "black"}}>Сосотяние счета и история платежей</span>
                </Link>
            </div>

            <div style={{backgroundColor: isActive === "more" ? color.ACCENT : "transparent"}}>
                <Link to="/more" className={style.link} onClick={toggleAside}>
                    <Circle fill={isActive == "more" ? "white" : color.ACCENT}>
                        <WarnIcon fill={isActive == "more" ? color.ACCENT : "white"} width="22" height="22" />
                    </Circle>
                    <span style={{color: isActive === "more" ? "white" : "black"}}>Дополнительные сервисы (скоро)</span>
                </Link>
            </div>
            <Link to=".." className={style.logout} style={{backgroundColor: color.ACCENT}}>
                <LeftArrowIcon fill="white"/>
                <span>Выйти из аккаунта</span>
            </Link>
        </menu>
    )
}