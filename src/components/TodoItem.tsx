import React from 'react';



const TodoItem: React.FC<{text: string; onRemoveTodo: () => void }> = (props) => (
    <li
        onClick={props.onRemoveTodo}
    >{props.text}</li>
);

export default TodoItem;