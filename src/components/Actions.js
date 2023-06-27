export default function Actions({ tasks }) {
  const taskNumber = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((completedTasks / taskNumber) * 100);
  return (
    <div className="footer">
      {!taskNumber ? (
        <p>Supercharge your productivity by adding tasks to your list 🚀</p>
      ) : (
        <p>
          You have {taskNumber} tasks on your list, you have completed{' '}
          {completedTasks} ({percentage}%)
        </p>
      )}
    </div>
  );
}
