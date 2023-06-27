import { useState } from 'react';

export default function List({ tasks, onComplete, onDelete, onClearTasks }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = tasks;
  if (sortBy === 'description')
    sortedItems = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'completed')
    sortedItems = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className={!sortedItems.length ? 'empty' : 'container'}>
      {!sortedItems.length ? (
        'No tasks added 😢'
      ) : (
        <ul>
          {sortedItems.map((todo) => (
            <li className={todo.completed ? 'completed' : ''} key={todo.id}>
              <div>
                {todo.description}
                <span onClick={() => onComplete(todo.id)}>
                  {/* {todo.completed ? '🔁' : '✔'} */}
                  <svg className="list__icon">
                    <use
                      xlinkHref={`/sprite.svg#icon-${
                        todo.completed ? 'plus' : 'check'
                      }`}
                    ></use>
                  </svg>
                </span>

                <span onClick={() => onDelete(todo.id)}>
                  {/* ❌ */}
                  <svg className="list__icon list__icon--red">
                    <use xlinkHref="/sprite.svg#icon-x"></use>
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!sortedItems.length ? (
        ''
      ) : (
        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="completed">Sort by completed tasks</option>
          </select>

          <button onClick={onClearTasks}>Clear list</button>
        </div>
      )}
    </div>
  );
}
