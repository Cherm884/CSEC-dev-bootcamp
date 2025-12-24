import { Link } from 'react-router-dom';
import { useTaskContext } from '../store/taskContext';

const Stats = () => {
    const { tasks } = useTaskContext();

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    const styles = {
        container: {
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
        },
        card: {
            backgroundColor: 'var(--card-bg)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow)',
            margin: '20px 0',
            border: '1px solid var(--border-color)',
        },
        statItem: {
            fontSize: '1.2rem',
            margin: '10px 0',
        },
        nav: {
            marginTop: '20px',
        },
        link: {
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontSize: '1.1rem',
        }
    };

    return (
        <div style={styles.container}>
            <h2>Task Statistics</h2>
            <div style={styles.card}>
                <div style={styles.statItem}>Total Tasks: <strong>{total}</strong></div>
                <div style={styles.statItem}>Completed: <strong>{completed}</strong></div>
                <div style={styles.statItem}>Pending: <strong>{pending}</strong></div>
            </div>
            <div style={styles.nav}>
                <Link to="/" style={styles.link}>⬅️ Back to Home</Link>
            </div>
        </div>
    );
};

export default Stats;
