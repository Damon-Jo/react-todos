import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './TodoList';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}
