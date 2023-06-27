import Actions from './Actions';
import List from './List';

export default function View({ tasks, onClearTasks, onComplete, onDelete }) {
  return (
    <div>
      <List
        tasks={tasks}
        onComplete={onComplete}
        onDelete={onDelete}
        onClearTasks={onClearTasks}
      />
      <Actions tasks={tasks} />
    </div>
  );
}
