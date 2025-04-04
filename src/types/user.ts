export interface UserInfoResponse{
    name: string
    avatar?: string
    phone: string
    connection_address: string
    history?: UserHistory[]
    password: string
}

interface UserHistory {
    datetime: string
    ip: string
}

