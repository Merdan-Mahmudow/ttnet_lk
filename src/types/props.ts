import React, { ChangeEvent, RefObject } from "react"
import { UserInfoResponse } from "./user"


export interface IconProps {
    fill: string
    width?: string
    height?: string
    rectFill?: string
    isNotify?: boolean
}

export interface UserProfileProps {
    user: UserInfoResponse,
}

export interface ImageProps {
    alt?: string
    src?: string
    width?: string
    height?: string
    radius?: string
}

export interface InputMaskedProps {
    mask: string
    type: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
}

export interface TextFieldProps {
    type?: string
    className?: string
    labelClassName?: string
    label?: string
    placeholder?: string
    ref?: RefObject<HTMLInputElement>
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
}

export interface AsideProps {
    page: "profile" | "settings" | "support" | "manage" | "balance" | "more"
    isMobile?: boolean
    title?: string
}

export interface MessageProps {
    id?: string
    role: string
    content: string
}