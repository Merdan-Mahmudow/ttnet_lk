import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Layout from '../components/Layout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
})