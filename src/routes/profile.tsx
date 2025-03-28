import { createFileRoute } from '@tanstack/react-router'
import style from "../styles/profile.module.css"
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../hooks/useUser'
import { UserInfoResponse } from '../types/user'
import { useEffect } from 'react'
import ProfileComponent from '../components/Profile'

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  const {data: user, isError, isLoading, isSuccess} = useQuery<UserInfoResponse>({
    queryKey: ["user"],
    queryFn: getUserInfo
  })
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div>
      <p className={style.title}>Профиль</p>
      {isLoading ?
      <p>Загрузка данных</p>
      : isError ?
      <p>Ошибка при получении данных</p>
      : null}
    {isSuccess ? <ProfileComponent user={user}/> : null}
    </div>
  )
}
