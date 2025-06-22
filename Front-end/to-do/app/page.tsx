"use client";

import { useState } from "react";
import { useTodos } from "@/context/todo-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

export default function Home() {
  const { state, dispatch } = useTodos();
  const [texto, setTexto] = useState("");

  function handleAdd() {
    if (!texto.trim()) return;
    dispatch({ type: "ADICIONAR", payload: texto.trim() });
    setTexto("");
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      {/* Caixa principal */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Lista de Tarefas</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Formulário */}
          <div className="flex gap-2">
            <Input
              placeholder="Digite uma tarefa"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
            <Button onClick={handleAdd}>Adicionar</Button>
          </div>

          {/* Lista */}
          <ul className="space-y-2 max-h-[50vh] overflow-auto">
            {state.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-md border p-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={todo.feito}
                    onCheckedChange={() =>
                      dispatch({ type: "TOGGLE", payload: todo.id })
                    }
                    aria-label="Marcar concluída"
                  />
                  <span
                    className={`select-none ${
                      todo.feito ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {todo.texto}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Remover tarefa"
                  onClick={() => dispatch({ type: "REMOVER", payload: todo.id })}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}

            {state.length === 0 && (
              <p className="text-center text-muted-foreground">
                Nenhuma tarefa cadastrada
              </p>
            )}
          </ul>

          {/* Rodapé */}
          {state.some((t) => t.feito) && (
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => dispatch({ type: "LIMPAR_CONCLUIDOS" })}
            >
              Limpar concluídas
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
