import { InputMask } from "@react-input/mask"
import { TextFieldProps } from "../../types/props"
import { ChangeEvent, useState } from "react"

export function TextField({ type, className, labelClassName, value, placeholder, ref, onChange, disabled = false, label }: TextFieldProps) {
    const [ip, setIP] = useState<string>("")
    const handleIPChange = (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value
        const cleaned = raw.replace(/[^\d.]/g, '')

        const parts = cleaned.split(".")
        const limitParts: string[] = []

        for (let i = 0; i < parts.length && i < 4; i++) {
            let part = parts[i]
            if (part.length > 3) part = part.slice(0, 3);

            let num = parseInt(part, 10)

            if (!isNaN(num)) {
                if (num > 255) num = 255;
                part = num.toString()
            }
            limitParts.push(part)
        }
        const final = limitParts.join('.')
        setIP(final)
    }
    return (
        <>
            {type === "phone" ?
                <div className="grid">
                    <label className={labelClassName}>{label || "Номер телефона: "}</label>
                    <InputMask ref={ref} className={className} value={value} placeholder={placeholder} mask="+7 (___) ___-__-__" replacement={{ _: /\d/ }} disabled={disabled} onChange={onChange} />
                </div>
                : type === "ip" ? 
                <div className="grid">
                    <label className={labelClassName}>{label || "IP адрес: "}</label>
                    <input  ref={ref} className={className} value={ip} placeholder={placeholder} disabled={disabled} onChange={handleIPChange} />
                </div>
                    :
                    <div className="grid">
                        <label htmlFor="text" className={labelClassName}>{label || null}</label>
                        <input type="text" ref={ref} className={className} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} />
                    </div>
            }
        </>
    )
}

export function PasswordField({ className, labelClassName, placeholder, ref, disabled = false, label }: TextFieldProps) {
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    return (
        <div className="grid">
            <label className={labelClassName}>{label || "Пароль: "}</label>
            <input type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            placeholder={placeholder}
            style={{paddingRight: "30px"}}
            className={className}
            disabled={disabled}
            ref={ref}
            />
            <button
            type="button"
            onClick={toggleShowPassword}
            style={{
                position: "relative",
                background: "transparent",
                border: "none",
                cursor: "pointer"                
            }}>{showPassword ? "Скрыть" : "Показать"}</button>
        </div>
    )
}