import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
const initialTodos = [
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: false },
    { id: 3, text: 'Todo 3', completed: false },
    { id: 4, text: 'Todo 4', completed: true },
    { id: 5, text: 'Todo 5', completed: false }
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo=> {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                  <ListItem
                    key={todo.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton 
                        role={undefined}
                        dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={todo.completed}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={todo.text} />
                    </ListItemButton>
                  </ListItem>)
            })}
        </List>
    )
}




// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value: number) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;

//                 return (
//                     <ListItem
//                         key={value}
//                         secondaryAction={
//                             <IconButton edge="end" aria-label="comments">
//                                 <CommentIcon />
//                             </IconButton>
//                         }
//                         disablePadding
//                     >
//                         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.indexOf(value) !== -1}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     inputProps={{ 'aria-labelledby': labelId }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//         </List>
//     );
// }