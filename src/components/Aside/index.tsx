import { HomeIcon } from "../../assets/icons"
import SiteLogo from "../../assets/img/logo.png"
import { color } from "../../styles/colors"
import { AsideProps } from "../../types/props"
import Menu from "../Menu"
import { Circle } from "../ui/circle.ui"
import style from "./index.module.css"
import { Link } from "@tanstack/react-router"
import { Box, CloseButton } from "@chakra-ui/react"

export default function Aside({ page, isMobile, isOpen }: AsideProps & { isOpen: boolean }) {
    return (
        <div className={`${style.aside} ${isMobile ? style.asideMobile : ""} ${isOpen ? style.open : ""}`}>
            <Box display={"flex"} flexDirection={"column"} >
                {isMobile ?
                        <CloseButton padding={"5px"} bg={color.ACCENT} alignSelf={"end"} pos={"relative"} right={"15px"} top={"15px"} w={"min-content"} borderRadius={"full"}></CloseButton>
  : null}
                <img src={SiteLogo} alt="site_logo" width={"280px"} />
            </Box>
            <Link to="/" className={style.navigation}>
                <div className={style.homebar}>
                    <Circle fill={color.ACCENT} padding="7px 7px" radius="50%">
                        <HomeIcon fill="white" width="30" height="30" />
                    </Circle>
                    <span><Circle fill={color.ACCENT} padding="1px 8px">Г</Circle>лавная страница</span>
                </div>
            </Link>
            <Menu isActive={page} />
        </div>
    );
}
