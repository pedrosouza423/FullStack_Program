"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodos } from "@/context/todo-context";
import { useState } from "react";
import { CheckSquare, Square, Trash2 } from "lucide-react";

export default function Home() {
  const { state, dispatch } = useTodos();
  const [texto, setTexto] = useState("");

  function adicionarTarefa() {
    if (!texto.trim()) return;
    dispatch({ type: "ADICIONAR", payload: texto });
    setTexto("");
  }

  function removerConcluidas() {
    state
      .filter((todo) => todo.feito)
      .forEach((todo) =>
        dispatch({ type: "REMOVER", payload: todo.id })
      );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-zinc-100 text-zinc-900 p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center">📝 Lista de Tarefas</h1>

        <div className="flex gap-2">
          <Input
            className="bg-white border-zinc-300"
            placeholder="Digite uma tarefa"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <Button onClick={adicionarTarefa}>Adicionar</Button>
        </div>

        {state.length > 0 && (
          <Button
            variant="secondary"
            className="w-full"
            onClick={removerConcluidas}
          >
            Remover Concluídas
          </Button>
        )}

        <ul className="space-y-3">
          {state.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg border hover:shadow transition"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: todo.id })
                }
              >
                {todo.feito ? (
                  <CheckSquare className="text-green-500" />
                ) : (
                  <Square className="text-zinc-400" />
                )}
                <span
                  className={`${
                    todo.feito
                      ? "line-through text-zinc-500"
                      : "text-zinc-900"
                  }`}
                >
                  {todo.texto}
                </span>
              </div>

              <Button
                variant="destructive"
                size="icon"
                onClick={() =>
                  dispatch({ type: "REMOVER", payload: todo.id })
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
