import { createFileRoute } from '@tanstack/react-router'

export const Route: any = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      Страница как бы есть, но куда должна вести?
    </div>
  )
}

