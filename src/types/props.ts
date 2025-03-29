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