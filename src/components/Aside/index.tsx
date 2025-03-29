import { HomeIcon } from "../../assets/icons"
import SiteLogo from "../../assets/img/logo.png"
import { color } from "../../styles/colors"
import Menu from "../Menu"
import { Circle } from "../ui/circle.ui"
import style from "./index.module.css"
import { Link } from "@tanstack/react-router"
interface AsideProps {
    page: "profile" | "settings" | "support" | "manage" | "balance" | "more"
}

export default function Aside({ page }: AsideProps) {
    return (
        <>
            <div className={style.aside}>
                <img src={SiteLogo} alt="site_logo" width={"280px"} />
                <Link to="/" className={style.navigation}>
                        <Circle fill={color.ACCENT} padding="7px 7px">
                            <HomeIcon fill="white" width="30" height="30" />
                        </Circle>
                        <span><Circle fill={color.ACCENT} padding="3px 8px">Г</Circle>лавная страница</span>
                </Link>


                <Menu isActive={page} />
            </div>
        </>
    )
}