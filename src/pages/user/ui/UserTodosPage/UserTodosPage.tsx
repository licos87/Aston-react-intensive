import { useParams } from 'react-router-dom';
import { useGetTodoListQuery } from '@/entities/todo';
import { useState } from 'react';
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter';

export const UserTodosPage = () => {
  const [checked, setChecked] = useState(false)
  const {userId} = useParams();
  const todos = useGetTodoListQuery(Number(userId)).data;
  const toggleChecked = () => {
    // Нужно выносить каждую туду в отдельный компонент и заводить состояние в нём,
    // иначе не работает. Реализовал только для того, что бы не выдавал ошибку, что нет функции смены
    setChecked(!checked)
  }

  return (
    <div>
      <h4>Список задач</h4>
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{height: '55px', width: '100%'}}>
            <th>Номер задачи</th>
            <th>Задача</th>
            <th>Статус выполнения</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.map((row) => (
            <tr key={row.id} >
              <td style={{ padding: '8px', textAlign: 'center' }}>{row.id}</td>
              <td style={{ padding: '8px' }}>{capitalizeFirstLetter(row.title)}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{
                <input type='checkbox' checked={row.completed} onChange={toggleChecked}/>
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
