"use client"

import { createContext, useContext, useReducer, ReactNode } from "react"

type Todo = {
  id: number
  texto: string
  feito: boolean
}

type Action =
  | { type: "ADICIONAR"; payload: string }
  | { type: "REMOVER"; payload: number }
  | { type: "TOGGLE"; payload: number }

const TodoContext = createContext<{
  todos: Todo[]
  dispatch: React.Dispatch<Action>
} | undefined>(undefined)

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADICIONAR":
      return [
        ...state,
        { id: Date.now(), texto: action.payload, feito: false }
      ]
    case "REMOVER":
      return state.filter(todo => todo.id !== action.payload)
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, feito: !todo.feito }
          : todo
      )
    default:
      return state
  }
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, [])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) throw new Error("useTodos deve estar dentro de <TodoProvider>")
  return context
}
