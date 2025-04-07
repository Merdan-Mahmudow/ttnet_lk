import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../hooks/useUser'
import { UserInfoResponse } from '../types/user'
import ProfileComponent from '../components/Profile'
import { toaster, Toaster } from '../components/ui/toaster'
import { Text, Spinner, VStack, Circle } from '@chakra-ui/react'
import { color } from '../styles/colors'
import { useEffect } from 'react'
import { PiWifiSlashBold } from "react-icons/pi";

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  const { data: user, isError, isLoading, isSuccess } = useQuery<UserInfoResponse>({
    queryKey: ["user"],
    queryFn: getUserInfo
  })

  return (
    <div>

      {isLoading && <LoadingComponent/>}

      {isError && <ServerErrorToast/> }

      {isSuccess && <ProfileComponent user={user} />}

      <Toaster />
    </div>
  )
}


const ServerErrorToast = () => {
  useEffect(() => {
    toaster.create({
      type: 'error',
      description: "Произошла ошибка при получении данных. Проверьте подключение к интернету!"
    })
  }, [])

  return (
    <VStack lineHeight={"1.5em"} padding={"7em 0 0 0"} textAlign={'center'}>
      <Circle size={"5em"} bg={color.ERROR}>
        <PiWifiSlashBold fill={"white"} size={"3em"} />
      </Circle>
      <Text fontSize={"2xl"} mt={"1em"} maxW={"25em"}>Произошла ошибка при получении данных.</Text>
      <Text fontSize={"2xl"} maxW={"25em"}>Проверьте подключение к интернету</Text>
    </VStack>
  )
}

const LoadingComponent = () => {
  return (
    <VStack colorPalette="teal" >
      <Spinner color={color.ACCENT} size={"xl"} borderWidth={"5px"} mt={"20em"} />
      <Text color={color.ACCENT} fontSize={"1.3em"}>Загрузка...</Text>
    </VStack>
  )
}