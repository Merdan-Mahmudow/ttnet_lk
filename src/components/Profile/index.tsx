import { HumanIcon } from "../../assets/icons";
import { color } from "../../styles/colors";
import { UserProfileProps } from "../../types/props";
import { Circle } from "../ui/circle.ui";
import style from "./index.module.css"
import Image from "../ui/image.ui";

export default function ProfileComponent({ user }: UserProfileProps) {
    const hasAvatar = user.avatar ? true : false
    return (
        <div className={style.user_content}>
            <div className={style.img_name}>
                {hasAvatar ?
                    <Image src={user.avatar} alt={"ProfileLogo"} radius="50%" width="100" height="100" />
                    : <Circle fill={color.ACCENT}>
                        <HumanIcon fill="white" width="50" height="40" />
                    </Circle>}
                    <h2 className={style.user_name}>{user.name}</h2>
            </div>
        </div>
    )
}