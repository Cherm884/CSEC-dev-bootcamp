import { useTaskContext } from '../store/taskContext';

const TaskItem = ({ task }) => {
    const { deleteTask, toggleTask } = useTaskContext();

    const styles = {
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: 'var(--card-bg)',
            borderRadius: '4px',
            boxShadow: 'var(--shadow)',
            border: '1px solid var(--border-color)',
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flex: 1,
        },
        text: {
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#888' : 'var(--text-color)',
            cursor: 'pointer',
        },
        deleteBtn: {
            backgroundColor: 'var(--secondary-color)',
            color: '#fff',
            padding: '5px 10px',
            marginLeft: '10px',
        },
        checkbox: {
            width: '18px',
            height: '18px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.item}>
            <div style={styles.content} onClick={() => toggleTask(task.id)}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    style={styles.checkbox}
                    onClick={(e) => e.stopPropagation()}
                />
                <span style={styles.text}>{task.text}</span>
            </div>
            <button
                style={styles.deleteBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
