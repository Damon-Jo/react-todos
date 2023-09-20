import { useState, useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import { Box, Typography } from '@mui/material';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';


// const initialTodos = [
//     { id: 1, text: 'Todo 1', completed: false },
//     { id: 2, text: 'Todo 2', completed: false },
//     { id: 3, text: 'Todo 3', completed: false },
//     { id: 4, text: 'Todo 4', completed: true },
//     { id: 5, text: 'Todo 5', completed: false }
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;
};

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos((previousTodos) => {
            return previousTodos.filter(todo => todo.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos((previousTodos) => {
            return previousTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })

    }

    const addTodo = (text) => {
        setTodos((previousTodos) => {
            return [...previousTodos, { id: crypto.randomUUID(), text, completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            m: 3,
        }}>
            <Typography variant="h2" component="h1" sx={{ textAlign: 'center', margin: '1rem' }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return <TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={() => toggleTodo(todo.id)}
                    />

                })}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>

    )
}
