import { useState } from 'react';
import { useTaskContext } from '../store/taskContext';

const TaskInput = () => {
    const { addTask } = useTaskContext();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
    };

    const styles = {
        form: {
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
        },
        input: {
            flex: 1,
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--input-bg)',
            color: 'var(--text-color)',
            fontSize: '1rem',
        },
        button: {
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            fontWeight: 'bold',
        },
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                style={styles.input}
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" style={styles.button}>
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;
