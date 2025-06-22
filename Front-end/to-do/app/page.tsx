import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <Input placeholder="Digite uma nova tarefa..." />
          <Button>Adicionar</Button>
        </div>

        <div className="space-y-2">
          {/* Lista de tarefas vai aqui */}
          <p className="text-gray-400 text-center">Nenhuma tarefa adicionada.</p>
        </div>
      </div>
    </div>
  )
}
