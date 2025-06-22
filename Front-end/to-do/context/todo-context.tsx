// context/todo-context.tsx
"use client";

import { createContext, useContext, useReducer } from "react";

export type Todo = {
  id: number;
  texto: string;
  feito: boolean;
};

type Action =
  | { type: "ADICIONAR"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVER"; payload: number }
  | { type: "LIMPAR_CONCLUIDOS" };

type State = Todo[];

const TodoContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADICIONAR":
      return [...state, { id: Date.now(), texto: action.payload, feito: false }];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, feito: !t.feito } : t
      );
    case "REMOVER":
      return state.filter((t) => t.id !== action.payload);
    case "LIMPAR_CONCLUIDOS":
      return state.filter((t) => !t.feito);
    default:
      return state;
  }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodos deve ser usado dentro do TodoProvider");
  return ctx;
}
