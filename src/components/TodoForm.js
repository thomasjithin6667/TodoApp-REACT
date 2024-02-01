import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!value.trim()) {
      validationErrors.taskError = 'Please enter a task';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        addTodo(value);
        setValue('');
   
      alert('Task added successfully');
  
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      <p>{errors.taskError && <span className="error-message">{errors.taskError}</span>}</p>
      
    </form>
  );
};
