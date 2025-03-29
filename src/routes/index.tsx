import { createFileRoute } from '@tanstack/react-router'

export const Route: any = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      404 Not Found
    </div>
  )
}

