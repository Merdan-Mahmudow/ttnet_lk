import { HumanIcon } from "../../assets/icons";
import { color } from "../../styles/colors";
import { UserProfileProps } from "../../types/props";
import { Circle } from "../ui/circle.ui";
import style from "./index.module.css"
import Image from "../ui/image.ui";
import { PasswordField, TextField } from "../ui/input.ui";

export default function ProfileComponent({ user }: UserProfileProps) {
    const hasAvatar = false
    return (
        <div className={style.user_content}>
            <div className={style.img_name}>
                {hasAvatar ?
                    <Image src={user.avatar} alt={"ProfileLogo"} radius="50%" width="100" height="100" />
                    : <Circle fill={color.ACCENT} padding="13px 13px">
                        <HumanIcon fill="white" width="60" height="60" />
                    </Circle>}
                <h2 className={style.user_name}>{user.name}</h2>
            </div>
            <div className={ style.inputs }>
                <TextField type="phone" placeholder="+7 (999) 999-99-99" className={style.phoneInput} labelClassName={style.phoneInputLabel} label="" value={user.phone} />
                <TextField type="text" label="Адрес: " className={style.addressInput} placeholder="Масницкая 13с3" labelClassName={style.addressInputLabel} value={user.connection_address}/>        
            </div>
            <PasswordField />
        </div>
    )
}