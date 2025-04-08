import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Layout from '../components/Layout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

const RootComponent: React.FC  = () => {
  return (
    <>
      <Layout />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent
})

