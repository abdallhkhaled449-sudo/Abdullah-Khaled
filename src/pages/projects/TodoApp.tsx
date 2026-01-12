import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('luxury-todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem('luxury-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: number) => {
    if (!editText.trim()) return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    ));
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      {/* Header */}
      <section className="py-4" style={{ marginTop: '80px', background: 'var(--luxury-black-light)' }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/projects" className="btn btn-luxury-outline btn-sm">
              ← Back to Projects
            </Link>
            <h1 className="text-gold-gradient mb-0" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>
              Todo App
            </h1>
          </div>
        </div>
      </section>

      {/* App Content */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Add Todo Form */}
              <div className="demo-container mb-4">
                <div className="demo-header">
                  <h5 className="text-gold mb-0">Add New Task</h5>
                </div>
                <div className="p-4">
                  <form onSubmit={addTodo}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control luxury-input"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <button type="submit" className="btn btn-luxury-gold">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Filters */}
              <div className="demo-container mb-4">
                <div className="p-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <span className="text-silver small">
                    {activeCount} item{activeCount !== 1 ? 's' : ''} left
                  </span>
                  <div className="btn-group">
                    {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
                      <button
                        key={f}
                        className={`btn btn-sm ${filter === f ? 'btn-luxury-gold' : 'btn-luxury-outline'}`}
                        onClick={() => setFilter(f)}
                        style={{ textTransform: 'capitalize' }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                  {todos.some(t => t.completed) && (
                    <button
                      className="btn btn-sm"
                      style={{ color: 'var(--luxury-silver)' }}
                      onClick={clearCompleted}
                    >
                      Clear Completed
                    </button>
                  )}
                </div>
              </div>

              {/* Todo List */}
              <div className="demo-container">
                <div className="demo-header">
                  <h5 className="text-gold mb-0">Tasks ({filteredTodos.length})</h5>
                </div>
                <div className="p-0">
                  {filteredTodos.length === 0 ? (
                    <div className="p-5 text-center">
                      <p className="text-silver mb-0">
                        {filter === 'all' ? 'No tasks yet. Add one above!' : `No ${filter} tasks.`}
                      </p>
                    </div>
                  ) : (
                    <ul className="list-unstyled mb-0">
                      {filteredTodos.map((todo) => (
                        <li
                          key={todo.id}
                          className={`todo-item p-3 d-flex align-items-center gap-3 ${todo.completed ? 'completed' : ''}`}
                          style={{ borderBottom: '1px solid var(--luxury-black-lighter)' }}
                        >
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="form-check-input"
                            style={{ 
                              width: '20px', 
                              height: '20px',
                              cursor: 'pointer',
                              borderColor: 'var(--luxury-gold)'
                            }}
                          />
                          
                          {editingId === todo.id ? (
                            <div className="flex-grow-1 d-flex gap-2">
                              <input
                                type="text"
                                className="form-control luxury-input py-1"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') saveEdit(todo.id);
                                  if (e.key === 'Escape') cancelEdit();
                                }}
                                autoFocus
                              />
                              <button
                                className="btn btn-sm btn-luxury-gold"
                                onClick={() => saveEdit(todo.id)}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-sm btn-luxury-outline"
                                onClick={cancelEdit}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <>
                              <span className="flex-grow-1 text-silver">{todo.text}</span>
                              <button
                                className="btn btn-sm"
                                style={{ color: 'var(--luxury-gold)' }}
                                onClick={() => startEditing(todo)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm"
                                style={{ color: 'var(--destructive)' }}
                                onClick={() => deleteTodo(todo.id)}
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Tech Info */}
              <div className="mt-5 p-4" style={{ border: '1px solid var(--luxury-black-lighter)' }}>
                <h5 className="text-gold mb-3">Technical Highlights</h5>
                <ul className="text-silver mb-0 ps-3">
                  <li className="mb-2">Full CRUD operations (Create, Read, Update, Delete)</li>
                  <li className="mb-2">React useState and useEffect hooks</li>
                  <li className="mb-2">LocalStorage persistence</li>
                  <li className="mb-2">Filter functionality (All, Active, Completed)</li>
                  <li className="mb-2">Inline editing with keyboard support</li>
                  <li>TypeScript for type safety</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoApp;
