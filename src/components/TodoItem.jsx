import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [editableText, setEditableText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    editTodo(todo.id, editableText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <div className="todo-item-container" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <div className="todo-item-left">
        <div className={`todo-item-checkbox ${todo.completed ? 'checked' : ''}`} onClick={handleToggle}></div>
        {isEditing ? (
          <input 
            type="text" 
            value={editableText} 
            onChange={(e) => setEditableText(e.target.value)} 
            onKeyPress={handleKeyPress} 
            autoFocus
            className="todo-item-text"
          />
        ) : (
          <span className="todo-item-text">{todo.text}</span>
        )}
      </div>
      <div className="todo-item-buttons">
        <button onClick={() => setIsEditing(!isEditing)}><i className="fas fa-pen"></i></button>
        <button onClick={() => deleteTodo(todo.id)}><i className="fas fa-trash-alt"></i></button>
        {isEditing && <button className="save-button" onClick={handleEdit}>Spara</button>}
      </div>
    </div>
  );
};

export default TodoItem;
