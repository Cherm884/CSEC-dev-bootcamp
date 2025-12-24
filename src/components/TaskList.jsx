import { useTaskContext } from '../store/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks } = useTaskContext();

    if (tasks.length === 0) {
        return <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet!</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
