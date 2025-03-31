import { HomeIcon } from "../../assets/icons"
import SiteLogo from "../../assets/img/logo.png"
import { color } from "../../styles/colors"
import { AsideProps } from "../../types/props"
import Menu from "../Menu"
import { Circle } from "../ui/circle.ui"
import style from "./index.module.css"
import { Link } from "@tanstack/react-router"

export default function Aside({ page, isMobile }: AsideProps) {
    return (
        <>
            <div className={!isMobile ? style.aside : style.asideMobile}>
                <img src={SiteLogo} alt="site_logo" width={"280px"} />
                <Link to="/" className={style.navigation}>
                    <div className={style.homebar}>
                    <Circle fill={color.ACCENT} padding="7px 7px">
                            <HomeIcon fill="white" width="30" height="30" />
                        </Circle>
                        <span><Circle fill={color.ACCENT} padding="3px 8px">Г</Circle>лавная страница</span>
                    </div> 
                </Link>


                <Menu isActive={page} />
            </div>
        </>
    )
}