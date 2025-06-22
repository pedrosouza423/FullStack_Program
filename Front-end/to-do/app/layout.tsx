import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { TodoProvider } from "@/context/todo-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ToDo List",
  description: "Lista de tarefas com Shadcn + Context + Reducer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  )
}
