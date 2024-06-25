import React from 'react';

function TodoItem({ todo }) {
  return (
    <div style={{borderBottom : '1px solid black'}}>
      {todo.text}
    </div>
  );
}

export default TodoItem;
