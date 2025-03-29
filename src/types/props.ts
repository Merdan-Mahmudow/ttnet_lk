import React from "react"
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


export interface EnterElemntProps {
    element: "textarea" | "input" | "select"
    type?: string
    required?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLElement>) => void
    onClick?: (e:React.ChangeEvent<HTMLElement>) => void
    padding?: string
    mask?: any
    placeholder?: string
    ref?: any
}