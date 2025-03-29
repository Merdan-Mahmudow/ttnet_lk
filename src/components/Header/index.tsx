import style from "./index.module.css"
import KeyImage from "../../assets/img/key.png"
import { NotifyIcon, WalletIcon } from "../../assets/icons"
import { color } from "../../styles/colors"
import { Circle } from "../ui/circle.ui"
export function Header (){
    return (
        <header>
            <div className={style.first} style={{backgroundColor: color.ACCENT}}>
                <img src={KeyImage} alt="KeyImage" />
                <h1>Личный кабинет</h1>
                <NotifyIcon fill="white" isNotify={true}/>
            </div>
            <div className={style.second}>
                <div className={style.balance}>
                    <Circle fill={color.ACCENT} padding="10px 10px">
                        <WalletIcon fill="white" width="30" height="30"/>
                    </Circle>
                    <span className={style.title} style={{color: color.ACCENT}}>Баланс: </span> 
                    <span className={style.price}>450 €</span>
                </div>
                <div className={style.balance}>
                    <span className={style.title} style={{color: color.ACCENT}}>Тариф: </span>
                    <span className={style.price}>750 €</span>
                </div>
            </div>
        </header>
    )
}